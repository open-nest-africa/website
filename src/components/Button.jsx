const Button = ({ text, icon, className, onClick, type }) => {
  const authHoverStyles =
    type === "auth" ? "hover:border hover:border-blue" : "";

  return (
    <button
      onClick={onClick}
      className={`${className} rounded-md transform transition-all duration-300 ease-in-out hover:scale-[104%] hover:shadow-lg active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 overflow-hidden ${authHoverStyles} ${
        icon && "flex items-center gap-x-5"
      }`}
    >
      {icon && typeof icon === "string" ? <img src={icon} alt="Icon" /> : icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
