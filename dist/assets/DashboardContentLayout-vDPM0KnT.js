import { j as e, P as n } from "./index-CCZ-rFA1.js";
import { B as i } from "./Button-Btgts8C2.js";
const x = ({ children: a, user: s, loading: o, error: t }) =>
  e.jsx("div", {
    className: "bg-[#F0F2F5] min-h-screen",
    children: o
      ? e.jsx(n, {})
      : t
        ? e.jsxs("div", { children: ["Error: ", t] })
        : e.jsxs("div", {
            className: "flex flex-col gap-8",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsxs("h2", {
                    className: "text-2xl font-semibold pb-1",
                    children: [
                      "Welcome back, ",
                      s == null ? void 0 : s.name,
                      "!",
                    ],
                  }),
                  e.jsx("p", {
                    children: "Ready to make your mark in open source today?",
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "bg-[#AEDFF4] flex px-24 py-7 items-center justify-between gap-10",
                children: [
                  e.jsx("p", {
                    children:
                      "What type of open source projects interest you the most?",
                  }),
                  e.jsx(i, { text: "Share", className: "bg-blue p-3 px-6" }),
                ],
              }),
              e.jsx("div", { children: a }),
            ],
          }),
  });
export { x as D };
