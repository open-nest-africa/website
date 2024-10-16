import React, { useState } from "react";

const TextField = ({ type, value, name, label, placeholder }) => {
  const { showText, setShowText } = useState(false);
  const togglePasswordVisibility = () => {
    setShowText((prev) => !prev);
  };
  return (
    <div>
      <label htmlFor="">{label}</label>
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className={clsx(
            "absolute right-4",
            floating && "top-[17px]",
            label && !floating && "top-[40px]"
          )}
        >
          {showText.get ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      )}
      <input
        type={type === "password" && showText ? "text" : type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
