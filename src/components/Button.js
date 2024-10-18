import React from "react";

const Button = ({ text, icon, className }) => {
  return (
    <buton className={`${className} rounded-md w-full bg-red-100`}>
      <img src={icon} alt="" />
      <span>{text}</span>
    </buton>
  );
};

export default Button;
