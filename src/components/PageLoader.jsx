import React from "react";

const PageLoader = ({ text = "Loading... Please wait." }) => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="flex flex-col gap-4 items-center">
				<div className="loader ease-linear rounded-full border-8 border-t-8 border-[#0C9EDD] h-32 w-32 mb-4"></div>
				<p className="text-[#0C9EDD] text-xl">{text}</p>
			</div>
		</div>
	);
};

export default PageLoader;
