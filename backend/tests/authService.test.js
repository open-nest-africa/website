const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const User = require("../src/models/User");
const { sendPasswordResetEmail } = require("../src/config/email");
const authService = require("../src/services/authService");

jest.mock("../src/models/User");
jest.mock("../src/config/email");
jest.mock("jsonwebtoken");
jest.mock("bcryptjs");
jest.mock("axios");

describe("authService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("requestPasswordReset", () => {
    it("throws error if user not found", async () => {
      User.findOne.mockResolvedValue(null);

      await expect(authService.requestPasswordReset("test@example.com"))
        .rejects.toThrow("User not found");
    });

    it("throws error if email not sent", async () => {
      const fakeUser = {
        _id: "123",
        save: jest.fn(),
      };
      User.findOne.mockResolvedValue(fakeUser);
      jwt.sign.mockReturnValue("token");
      sendPasswordResetEmail.mockResolvedValue(false);

      await expect(authService.requestPasswordReset("test@example.com"))
        .rejects.toThrow("Failed to send reset email");
    });

    it("returns resetUrl if successful", async () => {
      const fakeUser = {
        _id: "123",
        save: jest.fn(),
      };
      User.findOne.mockResolvedValue(fakeUser);
      jwt.sign.mockReturnValue("token");
      sendPasswordResetEmail.mockResolvedValue(true);

      process.env.FRONTEND_URL = "http://frontend";
      const result = await authService.requestPasswordReset("test@example.com");

      expect(result).toEqual({ resetUrl: "http://frontend/reset-password/token" });
      expect(fakeUser.save).toHaveBeenCalled();
      expect(sendPasswordResetEmail).toHaveBeenCalledWith("test@example.com", "token");
    });
  });

  describe("resetPassword", () => {
    it("throws error if token is invalid or expired", async () => {
      jwt.verify.mockReturnValue({ userId: "123" });
      User.findOne.mockResolvedValue(null);

      await expect(authService.resetPassword("token", "newpass"))
        .rejects.toThrow("Invalid or expired reset token");
    });

    it("resets password if token is valid", async () => {
      jwt.verify.mockReturnValue({ userId: "123" });
      const fakeUser = {
        password: "old",
        save: jest.fn(),
        resetPasswordToken: "token",
        resetPasswordExpires: Date.now() + 10000,
      };
      User.findOne.mockResolvedValue(fakeUser);
      bcrypt.hash.mockResolvedValue("hashed");

      const result = await authService.resetPassword("token", "newpass");

      expect(fakeUser.password).toBe("hashed");
      expect(fakeUser.save).toHaveBeenCalled();
      expect(result).toBe(true);
    });
  });

  describe("handleGitHubAuth", () => {
    it("throws error if no access_token", async () => {
      axios.post.mockResolvedValue({ data: {} });

      await expect(authService.handleGitHubAuth("code"))
        .rejects.toThrow("Bad credentials");
    });

    it("returns accessToken and user on success", async () => {
      axios.post.mockResolvedValue({ data: { access_token: "token" } });
      axios.get.mockResolvedValue({ data: { login: "user" } });

      const result = await authService.handleGitHubAuth("code");

      expect(result).toEqual({
        accessToken: "token",
        user: { login: "user" },
      });
      expect(axios.post).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalled();
    });
  });
});