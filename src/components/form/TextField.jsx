import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const TextField = ({ type, value, name, label, placeholder, className, onChange }) => {
  const { showText, setShowText } = useState(false);
  const togglePasswordVisibility = () => {
    setShowText((prev) => !prev);
  };
  return (
    <div className="">
      {!!label && <label className="mb-1 text-sm font-medium text-dark-2 inline-block">{label}</label>}
      {type === "password" && (
        <button type="button" onClick={togglePasswordVisibility} className="absolute right-4 top-10">
          {showText ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
        </button>
      )}
      <input
        type={type === "password" && showText ? "text" : type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} border rounded-md px-4 py-1.5 w-full`}
      />
    </div>
  );
};

export default TextField;
