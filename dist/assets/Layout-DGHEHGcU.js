import { r as l, j as e, L as s } from "./index-CCZ-rFA1.js";
import { B as a } from "./Button-Btgts8C2.js";
function o({ title: t, titleId: n, ...r }, i) {
  return l.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: i,
        "aria-labelledby": n,
      },
      r,
    ),
    t ? l.createElement("title", { id: n }, t) : null,
    l.createElement("path", {
      fillRule: "evenodd",
      d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
      clipRule: "evenodd",
    }),
  );
}
const c = l.forwardRef(o),
  x = () =>
    e.jsx("header", {
      className: "px-[112px] py-6",
      children: e.jsxs("nav", {
        className: "flex items-center justify-between",
        children: [
          e.jsx("div", {
            children: e.jsx(s, {
              to: "/",
              children: e.jsx("img", {
                src: "/images/logo.svg",
                alt: "OpenNest logo",
              }),
            }),
          }),
          e.jsxs("ul", {
            className:
              "flex items-center justify-between text-base font-semibold text-dark-2 capitalize gap-x-8 bg-[#F7F9FC] rounded-[40px] py-4 px-10",
            children: [
              e.jsxs("li", {
                className: "flex items-center gap-x-1",
                children: ["use cases ", e.jsx(c, { className: "w-6 h-6" })],
              }),
              e.jsx("li", {
                children: e.jsxs(s, {
                  to: "/resources",
                  className: "flex items-center gap-x-1",
                  children: ["Resources ", e.jsx(c, { className: "w-6 h-6" })],
                }),
              }),
              e.jsx("li", {
                children: e.jsx(s, { to: "/about-us", children: "About us" }),
              }),
              e.jsx("li", { children: "What's new" }),
            ],
          }),
          e.jsx(s, {
            to: "/signup",
            children: e.jsx(a, {
              text: "Sign up",
              className:
                "bg-blue text-white font-semibold text-base py-4 px-10",
            }),
          }),
        ],
      }),
    }),
  d = () =>
    e.jsxs("section", {
      className: "bg-primary p-6 flex gap-x-6",
      children: [
        e.jsxs("aside", {
          className:
            "bg-[#02202C] rounded-[20px] w-1/3 h-[380px] pl-10 pt-8 pr-[71px] pb-[29px] space-y-4",
          children: [
            e.jsx("h3", {
              className: "text-white font-semibold text-[30px] -tracking-[4%]",
              children: "Built by Open Sourcers, for Open Sourcers.",
            }),
            e.jsx("p", {
              className: "text-[#E4DBDB] text-base",
              children:
                "Join 1000+ designers, innovators, and creators who have embraced excellence, innovation, and creativity.",
            }),
            e.jsx("div", {
              className: "pt-3",
              children: e.jsx(a, {
                text: "Get Started",
                className: "bg-blue px-[29.5px] py-4",
              }),
            }),
          ],
        }),
        e.jsxs("aside", {
          className:
            "bg-[#AEDFF4] rounded-[20px] w-2/3 h-[380px] p-9 flex flex-col gap-y-20",
          children: [
            e.jsxs("div", {
              className: "flex justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex gap-x-6",
                  children: [
                    e.jsxs("ul", {
                      className:
                        "text-[#3E3838]  text-sm font-medium space-y-4",
                      children: [
                        e.jsx("span", {
                          className: "text-[#8D8484]",
                          children: "Product",
                        }),
                        e.jsx("li", {
                          className: "pt-6",
                          children: e.jsx(s, {
                            to: "/",
                            children: "Technical Writing",
                          }),
                        }),
                        e.jsx("li", {
                          children: e.jsx(s, {
                            to: "/",
                            children: "Development",
                          }),
                        }),
                        e.jsx("li", {
                          children: e.jsx(s, {
                            to: "/",
                            children: "Product Design",
                          }),
                        }),
                        e.jsx("li", {
                          children: e.jsx(s, {
                            to: "/",
                            children: "Pull Request",
                          }),
                        }),
                        e.jsx("li", {
                          children: e.jsx(s, {
                            to: "/",
                            children: "Resume Build",
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("ul", {
                      className:
                        "text-[#3E3838]  text-sm font-medium space-y-4",
                      children: [
                        e.jsx("span", {
                          className: "text-[#8D8484]",
                          children: "Community",
                        }),
                        e.jsx("li", {
                          className: "pt-6",
                          children: e.jsx(s, {
                            to: "/",
                            children: "OpenNest Community",
                          }),
                        }),
                        e.jsx("li", {
                          children: e.jsx(s, {
                            to: "/",
                            children: "Get Support",
                          }),
                        }),
                        e.jsx("li", {
                          children: e.jsx(s, {
                            to: "/",
                            children: "Help Center",
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("ul", {
                      className:
                        "text-[#3E3838]  text-sm font-medium space-y-4",
                      children: [
                        e.jsx("span", {
                          className: "text-[#8D8484]",
                          children: "Learn",
                        }),
                        e.jsx("li", {
                          className: "pt-6",
                          children: e.jsx(s, {
                            to: "/",
                            children: "Documentation",
                          }),
                        }),
                        e.jsx("li", {
                          children: e.jsx(s, { to: "/", children: "Blog" }),
                        }),
                        e.jsx("li", {
                          children: e.jsx(s, {
                            to: "/",
                            children: "Git Tutorials",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  children: e.jsx(s, {
                    to: "/",
                    children: e.jsx("img", {
                      src: "/images/logo.svg",
                      alt: "OpenNest logo",
                    }),
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-x-9 text-[#514A4A] text-sm font-semibold",
              children: [
                e.jsx(s, { to: "/", children: "Privacy Policy" }),
                e.jsx(s, { to: "/", children: "Terms of Use" }),
              ],
            }),
          ],
        }),
      ],
    });
function h() {
  const t = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return e.jsx(e.Fragment, {
    children: e.jsxs("div", {
      className: "fixed bottom-6 right-6 flex flex-col items-center z-50",
      children: [
        e.jsx("button", {
          onClick: t,
          className:
            "bg-[#0C9EDD] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300",
          children: e.jsx("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "white",
            strokeWidth: 2,
            viewBox: "0 0 24 24",
            children: e.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M5 15l7-7 7 7",
            }),
          }),
        }),
        e.jsx("span", {
          className: "mt-2 text-sm text-[#0C9EDD]  px-2 py-1 rounded",
          children: "BACK TO TOP",
        }),
      ],
    }),
  });
}
const p = ({ children: t }) => {
  const [n, r] = l.useState(!1);
  return (
    l.useEffect(() => {
      const i = () => r(window.scrollY > 2e3);
      return (
        window.addEventListener("scroll", i),
        () => {
          window.removeEventListener("scroll", i);
        }
      );
    }, []),
    e.jsxs("section", {
      children: [
        e.jsx(x, {}),
        e.jsx("main", { children: t }),
        n && e.jsx(h, {}),
        e.jsx(d, {}),
      ],
    })
  );
};
export { p as L };
