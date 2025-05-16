import React from "react";

export const CircleImage = ({ image }) => {
  return (
    <div className="bg-[#CEECF8] w-[52px] h-[52px] rounded-full flex items-center justify-center">
      <img src={`/images/${image}`} alt="Circled image" />
    </div>
  );
};
