const express = require("express");
const router = express.Router();
const {
  handlePasswordResetRequest,
  handlePasswordReset,
  githubAuth,
} = require("../controllers/authController");

router.post("/password-request", handlePasswordResetRequest);
router.post("/password-reset", handlePasswordReset);
router.get("/github", githubAuth);

module.exports = router;
