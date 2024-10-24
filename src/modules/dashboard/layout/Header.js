import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

const Header = () => {
  return (
    <header className="py-3 px-9 border-b border-[#E4E7EC] w-full flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <span className="text-[#475367]">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </span>
        <input type="text" placeholder="Search here" className="w-full border-none outline-none" />
      </div>
      <div className="flex items-center gap-x-3">
        <span>
          <img src="/images/notification-icon.svg" alt="" />
        </span>
        <span>
          <img src="/images/user-image2.svg" alt="" />
        </span>
      </div>
    </header>
  );
};

export default Header;
