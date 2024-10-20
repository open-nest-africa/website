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
		<div className="p-24 bg-[#F5FCFF] flex flex-col gap-12">
			<div className="flex flex-col gap-10">
				<h4 className="text-6xl font-semibold">
					{icon} {role}
				</h4>
				<p className="text-2xl">{info}</p>
			</div>
			<div className="flex flex-col gap-8">
				{data.map((contribution, i) => (
					<div key={i} className="">
						<h2 className="text-xl font-bold mb-4">
							{contribution.title}
						</h2>
						<ul className="list-disc pl-6">
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
				<div>
					<h6 className="text-xl font-bold mb-4">🎥 Video Tutorial</h6>
					<p>{videoText}</p>
					<a href={videoLink} target="_blank" rel="noopener noreferrer">
						Watch the video
					</a>
				</div>
			)}
			<div className="flex flex-col gap-6">
				<h6 className="text-xl font-bold">{summaryTitle}</h6>
				<p className="text-xl">{summaryContent1}</p>
				<p className="text-xl">{summaryContent2}</p>
			</div>
		</div>
	);
};

export default ContributionGuide;
