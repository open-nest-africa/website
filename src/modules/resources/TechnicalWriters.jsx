import React from "react";
import ContributionGuide from "../../components/ContributionGuide";
import { contributionData } from "../../Data";

const TechnicalWriters = () => {
	const technicalWriterData = contributionData.find(
		(contribution) => contribution.role === "Technical Writers"
	);

	return (
		<ContributionGuide
			data={technicalWriterData.contributions}
			role={technicalWriterData.role}
            icon={technicalWriterData.icon}
			info={technicalWriterData.intro}
			videoContent={!!technicalWriterData.videoTutorial}
			videoText={technicalWriterData.videoTutorial?.description}
			videoLink={technicalWriterData.videoTutorial?.link}
			summaryTitle={technicalWriterData.remarks.title}
			summaryContent1={technicalWriterData.remarks.content1}
			summaryContent2={technicalWriterData.remarks.content2}
		/>
	);
};

export default TechnicalWriters;
