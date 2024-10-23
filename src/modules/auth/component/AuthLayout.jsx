import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../component/OpenNestInAction";

const AuthLayout = ({ title, children, className }) => {
  return (
		<section className="w-full h-screen flex">
			<aside className={`${className} w-3/5 flex justify-center`}>
				<h1 className="text-black font-bold text-4xl">
					{title} to OpenNest
				</h1>
				<div>{children}</div>
			</aside>
			<aside className="w-2/5 bg-light-yellow flex flex-col justify-between p-10">
				<Link to="/">
					<img src="/images/logo.svg" alt="" />
				</Link>
				<Card
					name="Sarah, "
					image="/images/member-icon2.svg"
					paragraph="Openenest made my open-source journey so much easier. Now, I confidently contribute to multiple projects."
					jobRole="Junior Developer"
				/>
			</aside>
		</section>
  );
};

export default AuthLayout;
