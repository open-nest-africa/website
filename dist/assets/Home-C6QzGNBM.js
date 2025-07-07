import { j as e, L as i } from "./index-CCZ-rFA1.js";
import { B as o } from "./Button-Btgts8C2.js";
import { O as p } from "./OpenNestInAction-CbOwzNWf.js";
import { L as m } from "./Layout-DGHEHGcU.js";
const d = () =>
    e.jsxs("section", {
      className: "text-center text-black py-10",
      children: [
        e.jsxs("h1", {
          className: "px-[150px] font-semibold text-6xl leading-[90px] mb-4",
          children: [
            "Navigate Open Source Like a Pro with",
            " ",
            e.jsx("span", { className: "text-blue", children: "OpenNest" }),
          ],
        }),
        e.jsx("p", {
          className: "px-[220px] leading-[45px] text-3xl font-medium",
          children:
            "Your go-to platform for mastering the open-source space, with step-by-step guides and resources to kickstart your journey.",
        }),
        e.jsx("div", {
          className: "mt-10 cursor-pointer",
          children: e.jsx(i, {
            to: "/signup",
            children: e.jsx(o, {
              text: "Get Started Now",
              className:
                "text-white bg-blue text-base font-semibold py-4 px-[152px]",
            }),
          }),
        }),
        e.jsx("div", {
          className: "px-16 pt-[77px]",
          children: e.jsx("img", {
            src: "/images/hero-image.svg",
            alt: "Two women working on laptop",
          }),
        }),
      ],
    }),
  h = ({ image: t }) =>
    e.jsx("div", {
      className:
        "bg-[#CEECF8] w-[52px] h-[52px] rounded-full flex items-center justify-center",
      children: e.jsx("img", { src: `/images/${t}`, alt: "Circled image" }),
    }),
  s = ({
    title: t,
    paragraph: a,
    image: n,
    bgColor: l,
    titleTextColour: c,
    paragraphTextColour: x,
  }) =>
    e.jsxs("div", {
      className: `flex items-center gap-x-4 ${l} p-5 rounded-[10px]`,
      children: [
        e.jsx(h, { image: n }),
        e.jsxs("div", {
          children: [
            e.jsx("h2", {
              className: `${c} font-semibold text-base`,
              children: t,
            }),
            e.jsx("p", { className: `${x} text-sm font-normal`, children: a }),
          ],
        }),
      ],
    }),
  u = () =>
    e.jsxs("section", {
      className: "py-16 px-[103px]",
      children: [
        e.jsx("h1", {
          className:
            "text-black text-[64px] leading-[92.8px] font-semibold text-center",
          children: "How it Works",
        }),
        e.jsxs("div", {
          className: "flex justify-center gap-x-6 pt-10",
          children: [
            e.jsxs("aside", {
              className: "w-1/2 space-y-6",
              children: [
                e.jsx(s, {
                  title: "Learn the Basics",
                  paragraph:
                    "Understand open source fundamentals with beginner-friendly tutorials.",
                  image: "money-icon.svg",
                  bgColor: "bg-[#F9FAFB]",
                  titleTextColour: "text-dark-2",
                  paragraphTextColour: "text-[#344054]",
                }),
                e.jsx(s, {
                  title: "Find your first Project",
                  paragraph:
                    "We help you discover projects that match your skill level and interests.",
                  image: "truck-icon.svg",
                  bgColor: "bg-[#F9FAFB]",
                  titleTextColour: "text-dark-2",
                  paragraphTextColour: "text-[#344054]",
                }),
                e.jsx(s, {
                  title: "Contribute like a PRO",
                  paragraph:
                    "Gain hands-on experience by contributing to real-world projects.",
                  image: "chart-up-icon.svg",
                  bgColor: "bg-[#F9FAFB]",
                  titleTextColour: "text-dark-2",
                  paragraphTextColour: "text-[#344054]",
                }),
                e.jsx(s, {
                  title: "Grow with the Community",
                  paragraph:
                    "Join a supportive community of open-source contributors.",
                  image: "money-icon.svg",
                  bgColor: "bg-blue",
                  titleTextColour: "text-white",
                  paragraphTextColour: "text-[#F0F2F5]",
                }),
              ],
            }),
            e.jsx("aside", {
              className: "w-1/2",
              children: e.jsx("img", {
                src: "/images/how-it-works-image.svg",
                alt: "Woman smiling",
              }),
            }),
          ],
        }),
      ],
    }),
  r = ({ title: t, paragraph: a }) =>
    e.jsxs("div", {
      className:
        "border border-primary bg-[#35AEE312] px-14 pt-8 space-y-4 text-2xl text-center pb-[50px]",
      children: [
        e.jsx("h3", { className: "font-bold text-[#04354A]", children: t }),
        e.jsx("p", {
          className: "font-semibold text-black text-lg",
          children: a,
        }),
      ],
    }),
  g = () =>
    e.jsxs("section", {
      className: "px-[100px] py-14",
      children: [
        e.jsx("h1", {
          className:
            "text-black text-[64px] leading-[92.8px] font-semibold text-center",
          children: "Why Choose OpenNest",
        }),
        e.jsxs("main", {
          className: "grid grid-cols-2 gap-x-[25px] gap-y-6 pt-8",
          children: [
            e.jsx(r, {
              title: "Beginner-Friendly Guides",
              paragraph:
                "Step-by-step tutorials to guide you through the open-source space.",
            }),
            e.jsx(r, {
              title: "Curated Resources",
              paragraph:
                "Access to the best tools, guides, and articles for newcomers.",
            }),
            e.jsx(r, {
              title: "Community Support",
              paragraph:
                "Join our community and collaborate with others on open-source projects.",
            }),
            e.jsx(r, {
              title: "Regular Updates",
              paragraph:
                "Stay ahead with the latest trends and best practices in open source.",
            }),
          ],
        }),
      ],
    }),
  j = () =>
    e.jsxs("section", {
      className: "bg-primary px-[212px] py-16 text-center",
      children: [
        e.jsx("h1", {
          className: "font-semibold text-6xl leading-[92.8px]",
          children: "Our Commitment to Open Source",
        }),
        e.jsx("p", {
          className: "text-[#04354A] -tracking-[1px] text-2xl",
          children:
            "We're dedicated to making open source accessible to everyone. Join us in building a diverse, inclusive community where knowledge is shared freely and innovation thrives.",
        }),
        e.jsx("div", {
          className: "mt-11",
          children: e.jsx(i, {
            to: "/about-us",
            children: e.jsx(o, {
              className:
                "bg-blue text-white font-semibold text-base px-[153px] py-4",
              text: "Learn More",
            }),
          }),
        }),
      ],
    }),
  b = () =>
    e.jsxs("section", {
      className: "flex items-center gap-x-[30px] py-20 pl-24",
      children: [
        e.jsxs("aside", {
          className: "w-1/2",
          children: [
            e.jsx("h2", {
              className:
                "text-black text-[64px] leading-[92.8px] font-semibold",
              children: "Our Community",
            }),
            e.jsx("p", {
              className: "text-[#04354A] -tracking-[1px] text-2xl",
              children:
                "Join our vibrant community of open source enthusiasts. Connect with fellow developers, designers, and technical writers. Share knowledge, collaborate on projects, and grow together in the open source ecosystem.",
            }),
            e.jsx("div", {
              className: "mt-11",
              children: e.jsx(o, {
                text: "Join Our Community",
                className:
                  "bg-blue text-white text-base font-semibold px-[114px] py-4",
              }),
            }),
          ],
        }),
        e.jsx("aside", {
          className: "w-1/2  relative right-0",
          children: e.jsx("img", {
            src: "/images/community-image.svg",
            className: "h-[30rem] w-full",
            alt: "Lot of people sanding together",
          }),
        }),
      ],
    }),
  C = () =>
    e.jsx(m, {
      children: e.jsxs(e.Fragment, {
        children: [
          e.jsx(d, {}),
          e.jsx(u, {}),
          e.jsx(g, {}),
          e.jsx(p, {}),
          e.jsx(j, {}),
          e.jsx(b, {}),
        ],
      }),
    });
export { C as default };
