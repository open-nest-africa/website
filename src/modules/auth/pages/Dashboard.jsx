import React, { useEffect, useState } from "react";
import axios from "axios";
import PageLoader from "../../../components/PageLoader";

const Dashboard = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			const accessToken = localStorage.getItem("accessToken");

			if (accessToken) {
				try {
					const response = await axios.get("http://localhost:4000/user", {
						headers: { Authorization: `Bearer ${accessToken}` },
					});
					setUser(response.data.user);
				} catch (err) {
					console.error(err);
					setError(
						"Error fetching user data: " +
							(err.response?.data?.error || err.message)
					);
				}
			} else {
				setError("No access token found. Please log in.");
			}
		};

		fetchUser();
	}, []);

	return (
		<div>
			{error && <p>{error}</p>}
			{user ? (
				<div>
					<h1>Welcome, {user.name}</h1>
					<p>GitHub Username: {user.login}</p>
					<img src={user.avatar_url} alt="Avatar" />
					<p>Location: {user.location}</p>
					<p>Bio: {user.bio}</p>
					<p>Followers: {user.followers}</p>
					<p>Following: {user.following}</p>
				</div>
			) : (
				<PageLoader/>
			)}
		</div>
	);
};

export default Dashboard;
