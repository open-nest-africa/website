import React from "react";
import { CircleImage } from "./CircleImage";

export const Card = ({ title, paragraph, image, bgColor, titleTextColour, paragraphTextColour }) => {
  return (
    <div className={`flex items-center gap-x-4 ${bgColor} p-5 rounded-[10px]`}>
      <CircleImage image={image} />
      <div>
        <h2 className={`${titleTextColour} font-semibold text-base`}>{title}</h2>
        <p className={`${paragraphTextColour} text-sm font-normal`}>{paragraph}</p>
      </div>
    </div>
  );
};
