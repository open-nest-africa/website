const authController = require("../src/controllers/authController");
const authService = require("../src/services/authService");

jest.mock("../src/services/authService");

describe("authController", () => {
  let req, res;

  beforeEach(() => {
    req = { body: {}, query: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();
  });

  describe("handlePasswordResetRequest", () => {
    it("should send reset email and url on success", async () => {
      req.body.email = "test@example.com";
      authService.requestPasswordReset.mockResolvedValue({
        resetUrl: "http://reset.url",
      });

      await authController.handlePasswordResetRequest(req, res);

      expect(authService.requestPasswordReset).toHaveBeenCalledWith(
        "test@example.com",
      );
      expect(res.json).toHaveBeenCalledWith({
        message: "Password reset email sent",
        resetUrl: "http://reset.url",
      });
    });

    it("should return 404 if user not found", async () => {
      req.body.email = "notfound@example.com";
      authService.requestPasswordReset.mockRejectedValue(
        new Error("User not found"),
      );

      await authController.handlePasswordResetRequest(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "User not found" });
    });

    it("should return 500 if email sending fails", async () => {
      req.body.email = "fail@example.com";
      authService.requestPasswordReset.mockRejectedValue(
        new Error("Failed to send reset email"),
      );

      await authController.handlePasswordResetRequest(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Failed to send reset email",
      });
    });

    it("should return 500 for other errors", async () => {
      req.body.email = "error@example.com";
      authService.requestPasswordReset.mockRejectedValue(
        new Error("Some other error"),
      );

      await authController.handlePasswordResetRequest(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Error processing password reset request",
      });
    });
  });

  describe("handlePasswordReset", () => {
    it("should return success message on valid reset", async () => {
      req.body = { token: "token", newPassword: "newpass" };
      authService.resetPassword.mockResolvedValue();

      await authController.handlePasswordReset(req, res);

      expect(authService.resetPassword).toHaveBeenCalledWith(
        "token",
        "newpass",
      );
      expect(res.json).toHaveBeenCalledWith({
        message: "Password successfully reset",
      });
    });

    it("should return 400 for invalid/expired token", async () => {
      req.body = { token: "badtoken", newPassword: "newpass" };
      authService.resetPassword.mockRejectedValue(
        new Error("Invalid or expired reset token"),
      );

      await authController.handlePasswordReset(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: "Invalid or expired reset token",
      });
    });

    it("should return 500 for other errors", async () => {
      req.body = { token: "token", newPassword: "newpass" };
      authService.resetPassword.mockRejectedValue(new Error("Some error"));

      await authController.handlePasswordReset(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Error resetting password",
      });
    });
  });

  describe("githubAuth", () => {
    it("should return result on success", async () => {
      req.query.code = "githubcode";
      authService.handleGitHubAuth.mockResolvedValue({ user: "test" });

      await authController.githubAuth(req, res);

      expect(authService.handleGitHubAuth).toHaveBeenCalledWith("githubcode");
      expect(res.json).toHaveBeenCalledWith({ user: "test" });
    });

    it("should return 401 for bad credentials", async () => {
      req.query.code = "badcode";
      authService.handleGitHubAuth.mockRejectedValue(
        new Error("Bad credentials"),
      );

      await authController.githubAuth(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ error: "Bad credentials" });
    });

    it("should return 500 for other errors", async () => {
      req.query.code = "errorcode";
      authService.handleGitHubAuth.mockRejectedValue(new Error("Some error"));

      await authController.githubAuth(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Error during authentication",
      });
    });
  });
});
