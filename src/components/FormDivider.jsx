import React from "react";

export const FormDivider = ({ text }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <hr className="w-full border-t-1 border-gray-400"></hr>
      <span>{text}</span>
      <hr className="w-full border-t-1 border-gray-400"></hr>
    </div>
  );
};
