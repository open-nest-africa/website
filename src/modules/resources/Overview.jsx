import React from "react";

const Overview = () => {
	return (
		<div className="lg:p-24 bg-[#F5FCFF] flex flex-col gap-10 max-sm:w-sm">
			<h1 className="lg:text-6xl font-bold md:px-auto md:text-center mx-auto mobile-header">Welcome to OpenNest Resources</h1>
			<p className="text-xl leading-9 w-[90%] mx-auto text-start mobile-cont">
				Welcome to OpenNest, your cozy community hub for embarking on your
				open-source journey! Here, we believe that everyone has something
				valuable to contribute, regardless of their background or experience
				level. Our mission is to empower beginners to confidently navigate
				the world of open source by providing essential resources, guidance,
				and a supportive community.
			</p>
			<p className="text-xl leading-9 w-[90%] mx-auto md:text-start mobile-cont">
				Whether you're interested in coding, documentation, design, or
				community management, OpenNest offers a variety of pathways to get
				involved. Join us as we cultivate an inclusive environment where
				everyone can learn, grow, and thrive together in the open-source
				space!
			</p>
		</div>
	);
};

export default Overview;
