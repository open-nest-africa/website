import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-primary p-6 flex gap-x-6">
      <aside className="bg-[#02202C] rounded-[20px] w-1/3 h-[380px] pl-10 pt-8 pr-[71px] pb-[29px] space-y-4">
        <h3 className="text-white font-semibold text-[30px] -tracking-[4%]">
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
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/resources">Learning Resources</Link></li>
              <li><Link to="/contribute">How to Contribute</Link></li>
              <li><Link to="/community">Community Guidelines</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/open-nest-africa" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://twitter.com/opennest_africa" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://discord.gg/opennest" target="_blank" rel="noreferrer">Discord</a></li>
              <li><a href="mailto:contact@opennest.africa">Contact Us</a></li>
            </ul>
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
