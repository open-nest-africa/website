const express = require("express");
const router = express.Router();
const { gitHubUsers } = require("../controllers/usersController");

router.get("/", gitHubUsers);

module.exports = router;
