 import React from "react";

const ContributionGuide = ({
	data,
	icon,
	role,
	info,
	videoContent,
	videoText,
	videoLink,
	summaryTitle,
	summaryContent1,
	summaryContent2,
}) => {
	return (
		<div className="md:px-[7.4rem] md:py-24 bg-[#F5FCFF] flex flex-col md:gap-12">
			<div className="flex flex-col md:gap-10 mx-auto technical-writer">
				<h4 className="md:text-6xl font-semibold technical-role">
					{icon} {role}
				</h4>
				<p className="md:text-xl leading-9 technical-info">{info}</p>
			</div>
			<div className="flex flex-col gap-8">
				{data.map((contribution, i) => (
					<div key={i} className="">
						<h2 className="text-2xl font-bold mb-4 technical-role">
							{contribution.title}
						</h2>
						<ul className="list-disc md:pl-6 text-xl leading-9 mx-auto technical-list">
							{contribution.points.map((point, index) => (
								<li key={index} className="mb-2">
									<strong>{point.title}</strong>: {point.description}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			{videoContent && (
				<div className="mobile-cont">
					<h6 className="text-2xl font-bold mb-4 technical-role">🎥 Video Tutorial</h6>
					<p className="text-xl leading-9 border-2 youtube-text mx-auto">{videoText}:</p>
					<a
						href={videoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl leading-9 underline"
					>
					<p className="contribute-role mx-auto mt-6">	How to Contribute to Open Source as {role}</p>
					</a>
					<div className="mt-10 flex justify-center items-center overflow-hidden mx-auto technical-writer">
						<iframe
							width="800"
							height="500"
							src={`https://www.youtube.com/embed/${
								videoLink.includes("youtu.be/")
									? videoLink.split("youtu.be/")[1]
									: videoLink
											.split("youtube.com/live/")[1]
											.split("?")[0]
							}`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="rounded-2xl"
						></iframe>
					</div>
				</div>
			)}
			<div className="flex flex-col md:gap-6 mx-auto technical-writer">
				<h6 className="text-2xl font-bold technical-role">{summaryTitle}</h6>
				<p className="text-xl leading-9">{summaryContent1}</p>
				<p className="text-xl leading-9">{summaryContent2}</p>
			</div>
		</div>
	);
};

export default ContributionGuide;
