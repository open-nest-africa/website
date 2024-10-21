import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PageLoader from "../../../components/PageLoader";

const GithubAuth = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [accessToken, setAccessToken] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchUser = async () => {
			const code = new URLSearchParams(window.location.search).get("code");

			if (!code) {
				setError("Authorization code not found.");
				setLoading(false);
				return;
			}

			try {
				const response = await axios.get(
					`https://open-nest-africa.onrender.com/auth/github?code=${code}`
				);

				localStorage.setItem("accessToken", response.data.accessToken);
				setAccessToken(response.data.accessToken);
				setError(null);
				setLoading(false);
				navigate("/dashboard");
			} catch (err) {
				console.error(err);
				setError(
					`Error logging in: ${err.response?.data?.message || err.message}`
				);
				setLoading(false);
			}
		};

		fetchUser();
	}, [navigate]);

	return (
		<>
			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<div className="flex flex-col gap-4 items-center">
					<div className="loader ease-linear rounded-full border-8 border-t-8 border-[#0C9EDD] h-32 w-32 mb-4"></div>
					<p className="text-[#0C9EDD] text-xl">
						Please wait.....You will be redirected to your dashboard
					</p>
				</div>
			</div>
		</>
	);
};

export default GithubAuth;
