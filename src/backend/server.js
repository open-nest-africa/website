const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

app.get("/auth/github", async (req, res) => {
	const code = req.query.code;

	try {
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
			return res.status(401).json({ error: "Bad credentials" });
		}

		const accessToken = tokenResponse.data.access_token;

		const userResponse = await axios.get("https://api.github.com/user", {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		const userData = userResponse.data;

		res.json({
			accessToken: accessToken,
			user: userData,
		});
	} catch (error) {
		console.error("Error during authentication:", error.message || error);
		if (error.response) {
			console.error("Response data:", error.response.data);
			console.error("Response status:", error.response.status);
		}
		res.status(500).json({ error: "Error during authentication" });
	}
});

app.get("/user", async (req, res) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	try {
		const response = await axios.get("https://api.github.com/user", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		res.json({
			user: {
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
			},
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch user data from GitHub." });
	}
});

app.listen(4000, () => {
	console.log("Server running on http://localhost:4000");
});
