import React from "react";

const ImageCard = ({ name, role, image }) => {
  return (
    <div className="space-y-10">
      <div className="bg-[#BAE85D] rounded-[10px] h-80 relative">
        <span className="rounded-[8.81px] h-80 w-full absolute right-[20px] top-[15px] drop-shadow-custom2">
          <img src={image} alt="" className="w-full h-full object-cover"/>
        </span>
      </div>
      <div className="text-center space-y-2">
        <h2 className="font-normal">{name}</h2>
        <p className="font-medium">{role}</p>
      </div>
    </div>
  );
};

export default ImageCard;
