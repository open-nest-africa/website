import { j as t } from "./index-CCZ-rFA1.js";
const a = ({ text: e, icon: s, className: r, onClick: n }) =>
  t.jsxs("button", {
    onClick: n,
    className: `${r} rounded-md ${s && "flex items-center gap-x-5"}`,
    children: [
      s && typeof s == "string" ? t.jsx("img", { src: s, alt: "Icon" }) : s,
      t.jsx("span", { children: e }),
    ],
  });
export { a as B };
