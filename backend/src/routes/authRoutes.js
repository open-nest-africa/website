const express = require("express");
const router = express.Router();
const { handlePasswordResetRequest, handlePasswordReset, githubAuth, handleRegister, handleLogin, handleLogout, } = require("../controllers/authController");

router.post("/password-request", handlePasswordResetRequest);
router.post("/password-reset", handlePasswordReset);
router.get("/github", githubAuth);
router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.post("/logout", handleLogout);

module.exports = router;
