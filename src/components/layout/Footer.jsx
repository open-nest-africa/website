import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-primary p-6 flex flex-col lg:flex-row gap-6">
      <aside className="bg-[#02202C] rounded-[20px] w-full lg:w-1/3 h-auto lg:h-[380px] pl-6 md:pl-10 pt-8 pr-6 md:pr-[71px] pb-6 space-y-4">
        <h3 className="text-white font-semibold text-2xl md:text-[30px] -tracking-[4%]">
          Built by Open Sourcers, for Open Sourcers.
        </h3>
        <p className="text-[#E4DBDB] text-base">
          Join 1000+ designers, innovators, and creators who have embraced
          excellence, innovation, and creativity.
        </p>
        <div className="pt-3">
          <Button text="Get Started" className="bg-blue px-6 md:px-[29.5px] py-4" />
        </div>
      </aside>
      <aside className="bg-[#AEDFF4] rounded-[20px] w-full lg:w-2/3 h-auto lg:h-[380px] p-6 md:p-9 flex flex-col gap-10 md:gap-y-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-x-6">
            <ul className="text-[#3E3838] text-sm font-medium space-y-4">
              <span className="text-[#8D8484]">Product</span>
              <li className="pt-4 sm:pt-6">
                <Link to="/">Technical Writing</Link>
              </li>
              <li>
                <Link to="/">Development</Link>
              </li>
              <li>
                <Link to="/">Product Design</Link>
              </li>
              <li>
                <Link to="/">Pull Request</Link>
              </li>
              <li>
                <Link to="/">Resume Build</Link>
              </li>
            </ul>
            <ul className="text-[#3E3838] text-sm font-medium space-y-4">
              <span className="text-[#8D8484]">Community</span>
              <li className="pt-4 sm:pt-6">
                <Link to="/">OpenNest Community</Link>
              </li>
              <li>
                <Link to="/">Get Support</Link>
              </li>
              <li>
                <Link to="/">Help Center</Link>
              </li>
            </ul>
            <ul className="text-[#3E3838] text-sm font-medium space-y-4">
              <span className="text-[#8D8484]">Learn</span>
              <li className="pt-4 sm:pt-6">
                <Link to="/">Documentation</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Git Tutorials</Link>
              </li>
            </ul>
          </div>
          <div className="self-start">
            <Link to="/">
              <img src="/images/logo.svg" alt="OpenNest logo" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-start space-y-4 sm:space-y-0 sm:space-x-9 text-[#514A4A] text-sm font-semibold">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Use</Link>
        </div>
      </aside>
    </section>
  );
};


export default Footer;
