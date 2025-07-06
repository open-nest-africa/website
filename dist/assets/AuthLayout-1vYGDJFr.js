import { j as e, L as l } from "./index-CCZ-rFA1.js";
import { C as a } from "./OpenNestInAction-CbOwzNWf.js";
const n = ({ title: s, children: o, className: t }) =>
  e.jsxs("section", {
    className: "w-full h-screen flex",
    children: [
      e.jsxs("aside", {
        className: `${t} w-3/5 flex justify-center`,
        children: [
          e.jsxs("h1", {
            className: "text-black font-bold text-4xl",
            children: [s, " to OpenNest"],
          }),
          e.jsx("div", { children: o }),
        ],
      }),
      e.jsxs("aside", {
        className: "w-2/5 bg-light-yellow flex flex-col justify-between p-10",
        children: [
          e.jsx(l, {
            to: "/",
            children: e.jsx("img", {
              src: "/images/logo.svg",
              alt: "OpenNest logo",
            }),
          }),
          e.jsx(a, {
            name: "Sarah, ",
            image: "/images/member-icon2.svg",
            paragraph:
              "Openenest made my open-source journey so much easier. Now, I confidently contribute to multiple projects.",
            jobRole: "Junior Developer",
          }),
        ],
      }),
    ],
  });
export { n as A };
