const { getGitHubUserProfile } = require("../services/userService");

const gitHubUsers = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const user = await getGitHubUserProfile(token);
    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user data from GitHub." });
  }
};

module.exports = {
  gitHubUsers,
};
