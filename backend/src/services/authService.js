const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const User = require("../models/User");
const { sendPasswordResetEmail } = require("../config/email");

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const CLIENT_ID = process.env.VITE_GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.VITE_GITHUB_CLIENT_SECRET;

const requestPasswordReset = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const resetToken = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  await user.save();

  // Generate reset URL
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  const emailSent = await sendPasswordResetEmail(email, resetToken);
  if (!emailSent) {
    throw new Error("Failed to send reset email");
  }

  return { resetUrl };
};

const resetPassword = async (token, newPassword) => {
  const decoded = jwt.verify(token, JWT_SECRET);

  const user = await User.findOne({
    _id: decoded.userId,
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    throw new Error("Invalid or expired reset token");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();

  return true;
};

const handleGitHubAuth = async (code) => {
  const tokenResponse = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: code,
    },
    {
      headers: {
        accept: "application/json",
      },
    }
  );

  if (!tokenResponse.data.access_token) {
    throw new Error("Bad credentials");
  }

  const accessToken = tokenResponse.data.access_token;

  const userResponse = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return {
    accessToken,
    user: userResponse.data,
  };
};

module.exports = {
  requestPasswordReset,
  resetPassword,
  handleGitHubAuth,
};
