import { j as e } from "./index-CCZ-rFA1.js";
const i = () =>
    e.jsxs("section", {
      className: "py-14 px-[100px]",
      children: [
        e.jsxs("div", {
          className: "text-center",
          children: [
            e.jsx("h1", {
              className:
                "text-black text-[64px] leading-[92.8px] font-semibold text-center",
              children: "OpenNest in Action",
            }),
            e.jsx("p", {
              className: "text-[#04354A] text-3xl",
              children: "Hear from our community members",
            }),
          ],
        }),
        e.jsxs("main", {
          className: "grid grid-cols-2 gap-x-6 mt-12",
          children: [
            e.jsx(s, {
              name: "Sarah,",
              image: "/images/member-icon1.svg",
              paragraph:
                "OpenNest provided me with the perfect platform to start my open source journey. The community support and resources helped me make my first contribution with confidence.",
              jobRole: "Frontend Developer",
            }),
            e.jsx(s, {
              name: "Michael,",
              image: "/images/member-icon2.svg",
              paragraph:
                "As a designer, I found OpenNest's approach to open source incredibly welcoming. The platform helped me understand how to contribute design work to open source projects effectively.",
              jobRole: "UI/UX Designer",
            }),
          ],
        }),
      ],
    }),
  s = ({ image: t, name: r, paragraph: n, jobRole: o }) =>
    e.jsxs("div", {
      className:
        "drop-shadow-custom border-2 bg-white border-[#0C9EDD36] rounded-[20px] px-[40px] py-[60px] text-[#04354A] -tracking-[1px]",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-x-3",
          children: [
            e.jsx("span", {
              children: e.jsx("img", { src: t, alt: "Employee picture" }),
            }),
            e.jsxs("h5", {
              className: "font-medium text-2xl",
              children: [
                e.jsx("span", { className: "font-semibold", children: r }),
                o,
              ],
            }),
          ],
        }),
        e.jsx("p", { className: "text-xl pt-4", children: n }),
      ],
    });
export { s as C, i as O };
