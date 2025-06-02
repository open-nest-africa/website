import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-primary p-4 sm:p-6 flex flex-col lg:flex-row gap-4 sm:gap-6">
      <aside className="bg-[#02202C] rounded-[20px] w-full lg:w-1/3 h-auto lg:h-[380px] p-4 sm:pl-6 md:pl-10 sm:pt-8 sm:pr-6 md:pr-[71px] sm:pb-6 space-y-3 sm:space-y-4">
        <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-[30px] -tracking-[4%] leading-tight">
          Built by Open Sourcers, for Open Sourcers.
        </h3>
        <p className="text-[#E4DBDB] text-sm sm:text-base leading-relaxed">
          Join 1000+ designers, innovators, and creators who have embraced
          excellence, innovation, and creativity.
        </p>
        <div className="pt-2 sm:pt-3">
          <Button text="Get Started" className="bg-blue px-4 sm:px-6 md:px-[29.5px] py-3 sm:py-4 text-sm sm:text-base w-full sm:w-auto" />
        </div>
      </aside>
      <aside className="bg-[#AEDFF4] rounded-[20px] w-full lg:w-2/3 h-auto lg:h-[380px] p-4 sm:p-6 md:p-9 flex flex-col gap-6 sm:gap-10 md:gap-y-20">
        <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-x-8 md:gap-x-6 flex-1">
            <ul className="text-[#3E3838] text-sm font-medium space-y-3 sm:space-y-4 min-w-0">
              <span className="text-[#8D8484] block">Product</span>
              <li className="pt-2 sm:pt-4 md:pt-6">
                <Link to="/" className="hover:text-[#02202C] transition-colors">Technical Writing</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#02202C] transition-colors">Development</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#02202C] transition-colors">Product Design</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#02202C] transition-colors">Pull Request</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#02202C] transition-colors">Resume Build</Link>
              </li>
            </ul>
            <ul className="text-[#3E3838] text-sm font-medium space-y-3 sm:space-y-4 min-w-0">
              <span className="text-[#8D8484] block">Community</span>
              <li className="pt-2 sm:pt-4 md:pt-6">
                <Link to="/" className="hover:text-[#02202C] transition-colors">OpenNest Community</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#02202C] transition-colors">Get Support</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#02202C] transition-colors">Help Center</Link>
              </li>
            </ul>
            <ul className="text-[#3E3838] text-sm font-medium space-y-3 sm:space-y-4 min-w-0">
              <span className="text-[#8D8484] block">Learn</span>
              <li className="pt-2 sm:pt-4 md:pt-6">
                <Link to="/" className="hover:text-[#02202C] transition-colors">Documentation</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#02202C] transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#02202C] transition-colors">Git Tutorials</Link>
              </li>
            </ul>
          </div>
          <div className="self-start lg:self-center flex-shrink-0">
            <Link to="/">
              <img src="/images/logo.svg" alt="OpenNest logo" className="h-8 sm:h-10 w-auto" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col xs:flex-row xs:justify-start space-y-3 xs:space-y-0 xs:space-x-6 sm:space-x-9 text-[#514A4A] text-sm font-semibold pt-2 sm:pt-0">
          <Link to="/" className="hover:text-[#02202C] transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-[#02202C] transition-colors">Terms of Use</Link>
        </div>
      </aside>
    </section>
  );
};

export default Footer;