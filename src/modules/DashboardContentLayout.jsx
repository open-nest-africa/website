import React from "react";
import Button from "../components/Button";
import PageLoader from "../components/PageLoader";

const DashboardContentLayout = ({children, user, loading, error}) => {
	return (
		<div className="bg-[#F0F2F5] min-h-screen">
			{loading ? (
				<PageLoader />
			) : error ? (
				<div>Error: {error}</div>
			) : (
				<div className="flex flex-col gap-8">
					<div>
						<h2 className="text-2xl font-semibold pb-1">
							Welcome {user?.name}
						</h2>
						<p>It’s Open Source Week, how is it going?</p>
					</div>
					<div className="bg-[#AEDFF4] flex px-24 py-7 items-center justify-between gap-10">
						<p>What software are you interested in?</p>
						<Button text={"Send"} className="bg-blue p-3 px-6" />
					</div>
					<div>{children}</div>
				</div>
			)}
		</div>
	);
};

export default DashboardContentLayout;
