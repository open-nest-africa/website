import React, { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import { Outlet } from "react-router-dom";
import axios from "axios";
import useFetchUser from "../../hooks/useFetchUser";

const Dashboard = () => {
	const { user, error: userError, loading: userLoading } = useFetchUser();
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await axios.get(
					"https://api.github.com/search/repositories?q=topic:hacktoberfest+is:public&sort=stars&order=desc"
				);
				setProjects(response?.data?.items);
			} catch (err) {
				setError("Error fetching projects: " + err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	return (
		<Layout
			userName={user?.login}
			fullName={user?.name}
			githubAvatar={user?.avatar_url}
		>
			<Outlet context={{ user, projects, loading, error }} />
		</Layout>
	);
};

export default Dashboard;
