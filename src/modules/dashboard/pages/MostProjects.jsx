import React from "react";
import { useOutletContext } from "react-router-dom";
import DashboardContentLayout from "../../DashboardContentLayout";
import LatestChanges from "../../component/LatestChanges";
import RepositoryList from "../../component/RepositoryList";

const MostProjects = () => {
	const { user, projects, loading, error } = useOutletContext();

	return (
		<DashboardContentLayout user={user} loading={loading} error={error}>
			<div className="flex gap-5">
				<RepositoryList repos={projects} loading={loading} error={error} />
				<LatestChanges />
			</div>
		</DashboardContentLayout>
	);
};

export default MostProjects;
