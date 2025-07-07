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
    <div className="px-[7.4rem] py-24 bg-[#F5FCFF] flex flex-col gap-12">
      <div className="flex flex-col gap-10">
        <h4 className="text-6xl font-semibold">
          {icon} {role}
        </h4>
        <p className="text-xl leading-9">{info}</p>
      </div>
      <div className="flex flex-col gap-8">
        {data.map((contribution, i) => (
          <div key={i} className="">
            <h2 className="text-2xl font-bold mb-4">{contribution.title}</h2>
            <ul className="list-disc pl-6 text-xl leading-9">
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
          <h6 className="text-2xl font-bold mb-4">🎥 Video Tutorial</h6>
          <p className="text-xl leading-9">{videoText}:</p>
          <a
            href={videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl leading-9 underline hover:text-blue"
          >
            How to Contribute to Open Source as {role}
          </a>
          <div className="mt-10 flex justify-center items-center overflow-hidden">
            <iframe
              width="800"
              height="500"
              src={`https://www.youtube.com/embed/${
                videoLink.includes("youtu.be/")
                  ? videoLink.split("youtu.be/")[1]
                  : videoLink.split("youtube.com/live/")[1].split("?")[0]
              }`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-6">
        <h6 className="text-2xl font-bold">{summaryTitle}</h6>
        <p className="text-xl leading-9">{summaryContent1}</p>
        <p className="text-xl leading-9">{summaryContent2}</p>
      </div>
    </div>
  );
};

export default ContributionGuide;
