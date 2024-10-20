import React from "react";
import Button from "../Button";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-[112px] py-6">
      <nav className="flex items-center justify-between">
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
        <ul className="flex items-center justify-between text-base font-semibold text-dark-2 capitalize gap-x-8 bg-[#F7F9FC] rounded-[40px] py-4 px-10">
          <li className="flex items-center gap-x-1">
            use cases <ChevronDownIcon className="w-6 h-6" />
          </li>
          <li>
            <Link to="/resources" className="flex items-center gap-x-1">
              Resources <ChevronDownIcon className="w-6 h-6" />
            </Link>
          </li>
          <li>About us</li>
          <li>What's new</li>
        </ul>
        <Link to="/signup">
          <Button
            text="Sign up"
            className="bg-blue text-white font-semibold text-base py-4 px-10"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
