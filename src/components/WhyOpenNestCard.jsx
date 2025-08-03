import React from "react";

const WhyOpenNestCard = ({ title, paragraph }) => {
  return (
    <div className="border border-primary bg-[#35AEE312] px-14 pt-8 space-y-4 text-2xl text-center pb-[50px]">
      <h3 className="font-bold text-[#04354A] dark:text-[#A4DDEE]">{title}</h3>
      <p className="font-semibold text-black dark:text-white text-lg">{paragraph}</p>
    </div>
  );
};

export default WhyOpenNestCard;
