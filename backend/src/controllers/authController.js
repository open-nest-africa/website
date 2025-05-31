const { requestPasswordReset, resetPassword, handleGitHubAuth } = require("../services/authService");

const handlePasswordResetRequest = async (req, res) => {
  try {
    const { email } = req.body;
    const { resetUrl } = await requestPasswordReset(email);
    res.json({
      message: "Password reset email sent",
      resetUrl,
    });
  } catch (error) {
    console.error("Password reset request error:", error);
    if (error.message === "User not found") {
      return res.status(404).json({ error: error.message });
    }
    if (error.message === "Failed to send reset email") {
      return res.status(500).json({ error: error.message });
    }
    res.status(500).json({ error: "Error processing password reset request" });
  }
};

const handlePasswordReset = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    await resetPassword(token, newPassword);
    res.json({ message: "Password successfully reset" });
  } catch (error) {
    console.error("Password reset error:", error);
    if (error.message === "Invalid or expired reset token") {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Error resetting password" });
  }
};

const githubAuth = async (req, res) => {
  try {
    const { code } = req.query;
    const result = await handleGitHubAuth(code);
    res.json(result);
  } catch (error) {
    console.error("Error during authentication:", error.message || error);
    if (error.message === "Bad credentials") {
      return res.status(401).json({ error: error.message });
    }
    res.status(500).json({ error: "Error during authentication" });
  }
};

module.exports = {
  handlePasswordResetRequest,
  handlePasswordReset,
  githubAuth,
};
