import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white w-[272px] flex flex-col h-screen  border-r border-[#E4E7EC]">
      <Link to="/dashboard" className="py-8 px-5 inline-block">
        <span>
          <img src="/images/logo.svg" alt="" />
        </span>
      </Link>
      <ul >
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
          <span>
            <img src="/images/user-image.svg" alt="" />
          </span>
          <div className="text-sm">
            <h3 className="text-[#101928] font-semibold">David Fayemi</h3>
            <p className="text-[#475367]">David@opennest.ui</p>
          </div>
          <span className="ml-1">
            <img src="/images/side-arrow-icon.svg" alt="" />
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
            ? "inline-block bg-[#CEECF8] py-3 px-4 border-[#CEECF8] border rounded text-sm font-medium w-[252px]"
            : "text-sm  text-[#344054] py-3 px-4 block"
        } `
      }
    >
      <div className="flex items-center gap-x-2">
        <span>
          <img src={icon} alt="" />
        </span>{" "}
        {name}
      </div>
    </NavLink>
  );
};
