import React, { useEffect, useState } from "react";
import Button from "../Button";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    setIsResourcesOpen(false);
  }, []);
  return (
    <header className="sticky top-0 z-50 bg-white px-4 sm:px-8 md:px-16 lg:px-[112px] py-4 sm:py-6 shadow">
      <nav className="flex items-center justify-between">
        <div>
          <Link to="/">
            <div className="w-12 h-8 sm:w-16 sm:h-10 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">
               <img src="/images/logo.svg" alt="OpenNest logo" />
            </div>
          </Link>
        </div>

        <ul className="hidden lg:flex items-center justify-between text-sm xl:text-base font-semibold text-gray-700 capitalize gap-x-4 xl:gap-x-8 bg-[#F7F9FC] rounded-[40px] py-3 xl:py-4 px-6 xl:px-10">
          <li className="flex items-center gap-x-1 cursor-pointer hover:text-gray-900 transition-colors">
            use cases <ChevronDown className="w-4 h-4 xl:w-6 xl:h-6" />
          </li>
          <li className="relative">
            <div
              className="flex items-center gap-x-1 cursor-pointer"
              onClick={(e) => {
                setIsResourcesOpen(!isResourcesOpen);
              }}
              onMouseEnter={() => setIsResourcesOpen(true)}
            >
              Resources <ChevronDownIcon className="w-6 h-6" />
            </div>
            {isResourcesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                onClick={(e) => e.stopPropagation()}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <Link to={"/resources"}>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700   hover:bg-[#0C9EDD] hover:text-white">
                    Overview
                  </button>
                </Link>

                <Link to={"/resources/technical-writing"}>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700  hover:bg-[#0C9EDD] hover:text-white"
                    color=""
                  >
                    Technical-Writing
                  </button>
                </Link>
                <Link to={"/resources/developers"}>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700  hover:bg-[#0C9EDD] hover:text-white">
                    Development
                  </button>
                </Link>
                <Link to={"/resources/designers"}>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700  hover:bg-[#0C9EDD] hover:text-white">
                    Design
                  </button>
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-900 transition-colors">What's new</li>
        </ul>

        <div className="hidden sm:block">
          <Link to="/signup">
            <button className="bg-blue text-white font-semibold text-sm lg:text-base py-3 lg:py-4 px-6 lg:px-10">
              Sign up
            </button>
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
          <ul className="flex flex-col space-y-4 pt-4 text-base font-semibold text-gray-700">
            <li className="flex items-center justify-between py-2 cursor-pointer hover:text-gray-900 transition-colors">
              <span>Use cases</span>
              <ChevronDown className="w-5 h-5" />
            </li>
            <li className="py-2">
              <Link to="/resources" className="flex items-center justify-between hover:text-gray-900 transition-colors">
                <span>Resources</span>
                <ChevronDown className="w-5 h-5" />
              </Link>
            </li>
            <li className="py-2">
              <Link to="/about-us" className="hover:text-gray-900 transition-colors">
                About us
              </Link>
            </li>
            <li className="py-2 cursor-pointer hover:text-gray-900 transition-colors">
              What's new
            </li>
            <li className="pt-4 sm:hidden">
              <Link to="/signup" className="block">
                <button className="bg-blue text-white font-semibold text-sm lg:text-base py-3 lg:py-4 px-6 lg:px-10 w-full">
                  Sign up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
