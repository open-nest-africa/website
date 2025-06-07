import React from "react";
import RepositoryCard from "../../components/RepositoryCard";

const RepositoryList = ({ repos, loading, error }) => {
	if (!loading) return <p>Loading repositories...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div className="w-3/5 scrollable-container pr-3 pb-6">
			<ul className="flex flex-col gap-6">
				{repos.map((repo) => (
					<RepositoryCard repo={repo} />
				))}
			</ul>
		</div>
	);
};

export default RepositoryList;
