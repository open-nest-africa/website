import React, { useEffect, useState } from 'react'
import DashboardContentLayout from '../../DashboardContentLayout'
import LatestChanges from '../../component/LatestChanges';
import RepositoryList from '../../component/RepositoryList';
import useFetchUser from '../../../hooks/useFetchUser';
import axios from 'axios';

const MostProjects = () => {

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

  return (
    <DashboardContentLayout
			user={user}
			// error={userError}
			// loading={userLoading}
		>
			<div className="flex gap-9">
				<RepositoryList repos={projects} 
				// loading={loading} error={error} 
				/>
				<LatestChanges/>
			</div>
		</DashboardContentLayout>
  )
}

export default MostProjects