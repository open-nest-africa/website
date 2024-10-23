/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardContentLayout from "../../DashboardContentLayout";
import useFetchUser from "../../../hooks/useFetchUser";
import PageLoader from "../../../components/PageLoader";
import RepositoryList from "../../component/RepositoryList";
import LatestChanges from "../../component/LatestChanges";

const Dashboard = () => {
	const { user, error: userError, loading: userLoading } = useFetchUser();
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await axios.get(
					"https://api.github.com/search/repositories?q=topic:hacktoberfest+is:public&sort=stars&order=desc"
				);
				setProjects(response.data.items);
			} catch (err) {
				setError("Error fetching projects: " + err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	useEffect(() => {
		const fetchRepositories = async () => {
			if (user?.login) {
				try {
					const response = await axios.get(
						`https://api.github.com/users/${user.login}/repos`
					);
					setRepos(response.data);
				} catch (err) {
					setError("Error fetching repositories");
				} finally {
					setLoading(false);
				}
			}
		};

		fetchRepositories();
	}, [user]);

	if (userLoading) return <PageLoader />;
	if (userError) return <div>Error: {userError}</div>;

	const latestRepos = repos.slice(0, 5);

	return (
		<DashboardContentLayout
			user={user}
			error={userError}
			loading={userLoading}
		>
			<div className="flex gap-9">
				<RepositoryList repos={projects} loading={loading} error={error} />
				<LatestChanges/>
			</div>
		</DashboardContentLayout>
	);
};

export default Dashboard;
