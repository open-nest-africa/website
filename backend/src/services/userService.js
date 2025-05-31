const axios = require("axios");

const getGitHubUserProfile = async (token) => {
  const response = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    login: response.data.login,
    id: response.data.id,
    avatar_url: response.data.avatar_url,
    html_url: response.data.html_url,
    name: response.data.name,
    location: response.data.location,
    bio: response.data.bio,
    followers: response.data.followers,
    following: response.data.following,
    public_repos: response.data.public_repos,
  };
};

module.exports = {
  getGitHubUserProfile,
};
