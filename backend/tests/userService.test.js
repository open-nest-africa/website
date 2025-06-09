const axios = require("axios");
const userService = require("../src/services/userService");

jest.mock("axios");

describe("userService", () => {
  describe("getGitHubUserProfile", () => {
    it("should return user profile fields from GitHub API", async () => {
      const mockData = {
        login: "octocat",
        id: 1,
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/octocat",
        name: "The Octocat",
        location: "San Francisco",
        bio: "GitHub's mascot",
        followers: 100,
        following: 5,
        public_repos: 10,
      };
      axios.get.mockResolvedValue({ data: mockData });

      const result = await userService.getGitHubUserProfile("sometoken");

      expect(axios.get).toHaveBeenCalledWith("https://api.github.com/user", {
        headers: { Authorization: "Bearer sometoken" },
      });
      expect(result).toEqual(mockData);
    });

    it("should throw if axios fails", async () => {
      axios.get.mockRejectedValue(new Error("GitHub error"));

      await expect(userService.getGitHubUserProfile("badtoken")).rejects.toThrow("GitHub error");
    });
  });
});