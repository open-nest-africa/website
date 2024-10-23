import React from "react";
import {
	StarIcon,
	CodeBracketIcon,
	ShareIcon,
	ExclamationTriangleIcon, 
	ExclamationCircleIcon, 
} from "@heroicons/react/24/solid";

const RepositoryCard = ({ repo }) => {
    const defaultAvatar = "/images/github-logo.svg";
	return (
		<div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
			<div>
				<img
					src={repo.owner.avatar_url || defaultAvatar}
					alt="Avatar"
					className="h-12 w-12 rounded-full mb-4"
				/>
			</div>
			<div className="border border-blue p-6 rounded-md flex flex-col gap-3">
				<h3 className="text-lg font-semibold underline">
					<a
						href={repo.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 hover:underline"
					>
						{repo.name}
					</a>
				</h3>
				<p className="text-gray-600">
					{repo.description || "No description provided."}
				</p>
				<div className="mt-2 flex items-center gap-5">
					<span className="flex items-center text-sm text-gray-500">
						<StarIcon
							className="h-5 w-5 mr-1 text-yellow-500"
							aria-hidden="true"
						/>
						{repo.stargazers_count}
					</span>
					<span className="flex items-center text-sm text-gray-500">
						<CodeBracketIcon
							className="h-4 w-5 mr-1 text-gray-600"
							aria-hidden="true"
						/>
						{repo.language || "Not specified"}
					</span>
					<span className="flex items-center text-sm text-gray-500">
						<ShareIcon
							className="h-4 w-5 mr-1 text-gray-600"
							aria-hidden="true"
						/>
						{repo.forks_count}
					</span>
					<span className="flex items-center text-sm text-blue">
						<ExclamationCircleIcon
							className="h-4 w-5 mr-1 text-blue"
							aria-hidden="true"
						/>
						<a
							href={`${repo.html_url}/issues`}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline"
						>
							{repo.open_issues_count} open issues
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default RepositoryCard;
