import React, { useState } from "react";
import Button from "../Button";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="relative px-4 md:px-[112px] py-6">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <img src="/images/logo.svg" alt="OpenNest logo" />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-dark-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-between text-base font-semibold text-dark-2 capitalize gap-x-8 bg-[#F7F9FC] rounded-[40px] py-4 px-10">
            <li className="flex items-center gap-x-1">
              use cases <ChevronDownIcon className="w-6 h-6" />
            </li>
            <li>
              <Link to="/resources" className="flex items-center gap-x-1">
                Resources <ChevronDownIcon className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>What's new</li>
          </ul>

          <Link to="/signup" className="hidden md:block">
            <Button
              text="Sign up"
              className="bg-blue text-white font-semibold text-base py-4 px-10"
            />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-white shadow-lg`}>
          <ul className="flex flex-col text-base font-semibold text-dark-2 capitalize">
            <li className="p-4 border-b flex items-center justify-between">
              use cases <ChevronDownIcon className="w-6 h-6" />
            </li>
            <li className="p-4 border-b">
              <Link to="/resources" className="flex items-center justify-between">
                Resources <ChevronDownIcon className="w-6 h-6" />
              </Link>
            </li>
            <li className="p-4 border-b">
              <Link to="/about-us">About us</Link>
            </li>
            <li className="p-4 border-b">What's new</li>
            <li className="p-4">
              <Link to="/signup" className="block">
                <Button
                  text="Sign up"
                  className="bg-blue text-white font-semibold text-base py-4 px-10 w-full"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;