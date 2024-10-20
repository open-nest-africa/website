import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-primary p-6 flex gap-x-6">
      <aside className="bg-[#02202C] rounded-[20px] w-1/3 h-[380px] pl-10 pt-8 pr-[71px] pb-[29px] space-y-3">
        <h3 className="text-white font-semibold text-[40px] -tracking-[4%]">
          Built by Open Sourcers, for Open Sourcers.
        </h3>
        <p className="text-[#E4DBDB] text-base">
          Join 1000+ designers, innovators, and creators who have embraced
          excellence, innovation, and creativity.
        </p>
        <div className="pt-3">
          <Button text="Get Started" className="bg-blue px-[29.5px] py-4" />
        </div>
      </aside>
      <aside className="bg-[#AEDFF4] rounded-[20px] w-2/3 h-[380px] p-9 flex flex-col gap-y-20">
        <div className="flex justify-between">
          <div className="flex gap-x-6">
            <ul className="text-[#3E3838]  text-sm font-medium space-y-4">
              <span className="text-[#8D8484]">Product</span>
              <li className="pt-6">
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
            <ul className="text-[#3E3838]  text-sm font-medium space-y-4">
              <span className="text-[#8D8484]">Community</span>
              <li className="pt-6">
                <Link to="/">OpenNest Community</Link>
              </li>
              <li>
                <Link to="/">Get Support</Link>
              </li>
              <li>
                <Link to="/">Help Center</Link>
              </li>
            </ul>
            <ul className="text-[#3E3838]  text-sm font-medium space-y-4">
              <span className="text-[#8D8484]">Learn</span>
              <li className="pt-6">
                <Link to="/">Documenttaion</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Git Tutorials</Link>
              </li>
            </ul>
          </div>
          <div>
            <img src="/images/logo.svg" alt="" />
          </div>
        </div>
        <div className="space-x-9 text-[#514A4A] text-sm font-semibold">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Use</Link>
        </div>
      </aside>
    </section>
  );
};

export default Footer;
