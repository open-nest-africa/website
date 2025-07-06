import { r as n, j as e } from "./index-CCZ-rFA1.js";
import { D as r } from "./DashboardContentLayout-vDPM0KnT.js";
import "./Button-Btgts8C2.js";
function c({ title: s, titleId: t, ...a }, i) {
  return n.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: i,
        "aria-labelledby": t,
      },
      a,
    ),
    s ? n.createElement("title", { id: t }, s) : null,
    n.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125",
    }),
  );
}
const o = n.forwardRef(c),
  l = () => {
    const s = [
      "Beginners guide",
      "React good-first issues",
      "Technical Writing",
      "Latest Commits",
    ];
    return e.jsxs("section", {
      className: "w-full",
      children: [
        e.jsx("div", {
          className: "w-full flex items-center justify-center",
          children: e.jsx("div", {
            className: "flex gap-x-1",
            children: s.map((t) => e.jsx(m, { text: t })),
          }),
        }),
        e.jsxs("main", {
          className: "bg-[#CEECF875] rounded-2xl px-[58px] py-20 mt-8",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between px-10 pb-[22px]",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-x-2",
                  children: [
                    e.jsx("span", {
                      children: e.jsx("img", {
                        src: "/images/avatar.svg",
                        alt: "User avatar",
                      }),
                    }),
                    e.jsx("p", {
                      className: "text-2xl text-black",
                      children: "How do I get started in Open Source?",
                    }),
                  ],
                }),
                e.jsx("span", {
                  className: "text-[#292D32]",
                  children: e.jsx(o, { className: "w-5 h-5" }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "bg-white rounded-2xl p-9 space-y-12",
              children: [
                e.jsx("p", {
                  className: "text-black text-2xl leading-8",
                  children: `Getting started with open source can be intimidating, but it doesn't have to be. Start by exploring projects that interest you, reading their documentation, and looking for issues labeled "good first issue" or "help wanted". Remember, every contribution, no matter how small, makes a difference in the open source community.`,
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-x-6",
                  children: [
                    e.jsx("span", {
                      children: e.jsx("img", {
                        src: "/images/camera-icon.svg",
                        alt: "Camera emoji",
                      }),
                    }),
                    e.jsx("span", {
                      children: e.jsx("img", {
                        src: "/images/copy-icon.svg",
                        alt: "Copy emoji",
                      }),
                    }),
                    e.jsx("span", {
                      children: e.jsx("img", {
                        src: "/images/thumbs-up-icon.svg",
                        alt: "Thumbs up emoji",
                      }),
                    }),
                    e.jsx("span", {
                      children: e.jsx("img", {
                        src: "/images/thumbs-down-icon.svg",
                        alt: "Thumbs down emoji",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  m = ({ text: s }) =>
    e.jsx("div", {
      className: "bg-[#DDD30C] rounded-lg p-2 text-[#2C2A02] text-sm",
      children: s,
    });
function g() {
  return e.jsx(r, { children: e.jsx("div", { children: e.jsx(l, {}) }) });
}
export { g as default };
