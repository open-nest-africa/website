import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ userName, fullName, githubAvatar }) => {
  const profileImage = "/images/user-image.svg";
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white w-[272px] flex flex-col h-screen overflow-hidden  border-r border-[#E4E7EC]">
      <Link to="/dashboard" className="py-8 px-5 inline-block">
        <span>
          <img
            src="/images/logo.svg"
            alt="OpenNest logo"
            className=" transform transition-all duration-300 ease-in-out hover:scale-105 "
          />
        </span>
      </Link>
      <ul>
        <CustomLink name="Most Contributed Projects" link="/dashboard" end />
        <CustomLink name="Sopohome" link="/dashboard/sopohome" />
        <CustomLink name="Gitlab" link="/dashboard/gitlab" />
        <CustomLink name="MeshAI" link="/dashboard/meshai" />
        <CustomLink name="OpenAI" link="/dashboard/openai" />
      </ul>
      <ul className="mt-auto py-3 px-4">
        <CustomLink
          name="Settings"
          link="/settings"
          icon="images/settings-icon.svg"
        />
        <li className="flex items-center gap-x-2 pt-8">
          <span className="h-10 w-10 rounded-full">
            {imageError || !githubAvatar ? (
              <div className="relative w-8 h-8">
                <UserCircleIcon className="w-full h-full text-gray-500" />
                <span className="absolute bottom-[1px] right-[1px] w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
            ) : (
              <div className="relative w-8 h-8">
                <img
                  src={githubAvatar}
                  alt="User Avatar"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover rounded-full"
                />
                <span className="absolute bottom-[1px] right-[1px] w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
            )}
          </span>

          <div className="text-sm">
            <h3 className="text-[#101928] font-semibold">{fullName}</h3>
            <p className="text-[#475367] text-xs">{userName}@opennest.ui</p>
          </div>
          <span className="ml-1 w-5">
            <img
              src="/images/side-arrow-icon.svg"
              alt="Side arrow"
              className=" cursor-pointer"
            />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

const CustomLink = ({ name, link, end, icon }) => {
  return (
    <NavLink
      to={link}
      end={end}
      className={({ isActive }) =>
        `${
          isActive
            ? "bg-gradient-to-r from-[#CEECF8] to-[#E1F4FD] text-[#1570EF] border-r-3 border-r-[#1570EF] shadow-sm"
            : "text-[#344054] hover:bg-gradient-to-r hover:from-[#F9FAFB] hover:to-[#FAFBFC] hover:text-[#1570EF] hover:border-l-2 hover:border-l-[#CEECF8]"
        } relative flex items-center gap-x-3 py-3 px-4 rounded-r-lg text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:translate-x-1 hover:shadow-sm group overflow-hidden w-[252px]`
      }
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CEECF8]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

      <div className="flex items-center gap-x-3 relative z-10 w-full">
        {icon && (
          <span className="flex-shrink-0 w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            <img
              src={icon}
              alt={`${name} icon`}
              className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
          </span>
        )}
        <span className="truncate transition-all duration-300 group-hover:translate-x-0.5 font-medium">
          {name}
        </span>
      </div>

      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#CEECF8]/10 to-transparent"></div>
    </NavLink>
  );
};
