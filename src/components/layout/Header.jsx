import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <li>
            <Link to="/resources" className="flex items-center gap-x-1 hover:text-gray-900 transition-colors">
              Resources <ChevronDown className="w-4 h-4 xl:w-6 xl:h-6" />
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-gray-900 transition-colors">
              About us
            </Link>
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
