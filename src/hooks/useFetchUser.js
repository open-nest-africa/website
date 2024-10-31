// src/hooks/useFetchUser.js

import { useEffect, useState } from "react";
import axios from "axios";

const useFetchUser = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			const accessToken = localStorage.getItem("accessToken");

			if (accessToken) {
				try {
					const response = await axios.get(
						"https://open-nest-africa.onrender.com/user",
						{
							headers: { Authorization: `Bearer ${accessToken}` },
						}
					);
					setUser(response.data.user);
				} catch (err) {
					console.error(err);
					setError(
						"Error fetching user data: " +
							(err.response?.data?.error || err.message)
					);
				} finally {
					setLoading(false);
				}
			} else {
				setError("Please log in.");
				setLoading(false);
				navigate("/signup"); 
			}
		};

		fetchUser();
	}, []);

	return { user, error, loading };
};

export default useFetchUser;
