import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

// Social Media Icons as React Components
const TwitterIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const SlackIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.527 2.527 0 0 1 8.834 24a2.527 2.527 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/open-nest-africa",
      icon: <GitHubIcon />,
      bgColor: "hover:bg-gray-700",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/Opennest_Africa",
      icon: <TwitterIcon />,
      bgColor: "hover:bg-blue-600",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/opennest-africa/",
      icon: <LinkedInIcon />,
      bgColor: "hover:bg-blue-700",
    },
    {
      name: "Slack",
      url: "https://join.slack.com/t/opennestafrica/shared_invite/zt-36a95q8is-A9GBGWrt89ko4egspqyV6g",
      icon: <SlackIcon />,
      bgColor: "hover:bg-purple-600",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/opennestafrica",
      icon: <InstagramIcon />,
      bgColor: "hover:bg-pink-600",
    },
  ];

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
          <Button
            text="Get Started"
            className="bg-blue px-6 md:px-[29.5px] py-4"
          />
        </div>
      </aside>

      <aside className="bg-[#AEDFF4] rounded-[20px] w-full lg:w-2/3 h-auto lg:h-[380px] p-6 md:p-9 flex flex-col">
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-x-8">
              <ul className="text-[#3E3838] text-sm font-medium space-y-4">
                <span className="text-[#8D8484] font-semibold">Product</span>
                <li className="pt-4 sm:pt-6">
                  <Link
                    to="/technical-writing"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    Technical Writing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/development"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product-design"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    Product Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pull-requests"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    Pull Requests
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resume-builder"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    Resume Build
                  </Link>
                </li>
              </ul>

              <ul className="text-[#3E3838] text-sm font-medium space-y-4">
                <span className="text-[#8D8484] font-semibold">Community</span>
                <li className="pt-4 sm:pt-6">
                  <Link
                    to="/community"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    OpenNest Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    Get Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>

              <ul className="text-[#3E3838] text-sm font-medium space-y-4">
                <span className="text-[#8D8484] font-semibold">Learn</span>
                <li className="pt-4 sm:pt-6">
                  <Link
                    to="/documentation"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/git-tutorials"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    Git Tutorials
                  </Link>
                </li>
              </ul>
            </div>

            <div className="self-start">
              <Link to="/" className="block">
                <img
                  src="/images/logo.svg"
                  alt="OpenNest logo"
                  className="h-8 md:h-10"
                />
              </Link>
            </div>
          </div>

          {/* Social Media Icons Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-transparent text-black transition-all duration-300 transform hover:scale-110 ${social.bgColor} hover:text-white`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Links at Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-start space-y-2 sm:space-y-0 sm:space-x-8 text-[#514A4A] text-sm font-semibold border-t border-[#8D8484]/20 pt-4 mt-auto">
          <Link
            to="/privacy-policy"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-use"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Terms of Use
          </Link>
          <span className="text-[#8D8484]">
            © {new Date().getFullYear()} OpenNest Africa. All rights reserved.
          </span>
        </div>
      </aside>
    </section>
  );
};

export default Footer;
