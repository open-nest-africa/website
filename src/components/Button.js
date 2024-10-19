import React from "react";

const Button = ({ text, icon, className }) => {
  return (
    <buton
      className={`${className} rounded-md ${
        icon && "flex items-center gap-x-5"
      }`}
    >
      {icon && typeof(icon) === "string" ? <img src={icon} alt="" /> : icon}
      <span>{text}</span>
    </buton>
  );
};

export default Button;
