import { j as e } from "./index-CCZ-rFA1.js";
import { L as i } from "./Layout-DGHEHGcU.js";
import "./Button-Btgts8C2.js";
const s = ({ name: a, role: o, image: r }) =>
    e.jsxs("div", {
      className: "space-y-10",
      children: [
        e.jsx("div", {
          className: "bg-[#BAE85D] rounded-[10px] h-80 relative",
          children: e.jsx("span", {
            className:
              "rounded-[8.81px] h-80 w-full absolute right-[20px] top-[15px] drop-shadow-custom2",
            children: e.jsx("img", {
              src: r,
              alt: "Woman smiling",
              className: "w-full h-full object-cover",
            }),
          }),
        }),
        e.jsxs("div", {
          className: "text-center space-y-2",
          children: [
            e.jsx("h2", { className: "font-normal", children: a }),
            e.jsx("p", { className: "font-medium", children: o }),
          ],
        }),
      ],
    }),
  c = () =>
    e.jsx(i, {
      children: e.jsxs("div", {
        className:
          "px-[100px] py-16 w-full h-full mx-auto text-black space-y-[50px]",
        children: [
          e.jsx("h1", {
            className: "text-[64px] leading-[92.8px] font-semibold",
            children: "About Us",
          }),
          e.jsx("p", {
            className: "text-2xl leading-[34.8px]",
            children:
              "At OpenNest, we are dedicated to fostering a welcoming and inclusive community for everyone who wants to explore the world of open-source software. Our mission is to provide beginners with resources, support, and guidance regardless of their technical background. Everyone deserves a safe space to learn, grow, and contribute to open-source projects.",
          }),
          e.jsxs("div", {
            children: [
              e.jsx("h2", {
                className: "font-semibold text-4xl",
                children: "OpenNest Team",
              }),
              e.jsxs("p", {
                className: "text-2xl leading-[34.8px] pt-3",
                children: [
                  e.jsx("span", {
                    className: "font-bold",
                    children: "We’re not just a team;",
                  }),
                  " we’re a family of passionate individuals who believe in the power of open source. Each of us brings our unique experiences and talents to the table, and together, we're on a mission to make open-source projects accessible and enjoyable for everyone.",
                ],
              }),
              e.jsxs("div", {
                className:
                  "grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 pt-10 gap-10",
                children: [
                  e.jsx(s, {
                    name: "Noimot Alabi",
                    role: "Frontend Developer",
                    image: "/team-images/naima.svg",
                  }),
                  e.jsx(s, {
                    name: "Miracle Ozukalu",
                    role: "Product Designer",
                    image: "/team-images/miracle.svg",
                  }),
                  e.jsx(s, {
                    name: "Mutiat Bashua",
                    role: "Software Developer",
                    image: "/team-images/mutiat.svg",
                  }),
                  e.jsx(s, {
                    name: "Aishat Muibudeen",
                    role: "Community Manager & Product Designer",
                    image: "/team-images/maya.svg",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsx("h3", {
                className: "text-4xl font-semibold",
                children: "💖 Sponsor Us",
              }),
              e.jsxs("div", {
                className: "text-2xl leading-[34.8px] space-y-6",
                children: [
                  e.jsx("p", {
                    children:
                      "We believe in making open source accessible to everyone. Your support helps us keep building, maintaining resources, and fostering a welcoming space for contributors.",
                  }),
                  e.jsxs("p", {
                    children: [
                      e.jsx("h6", {
                        children:
                          "If you like what we’re building, you can support us in two ways:",
                      }),
                      e.jsxs("ul", {
                        className: "list-disc pl-5",
                        children: [
                          e.jsxs("li", {
                            children: [
                              "⭐",
                              " ",
                              e.jsx("a", {
                                href: "https://github.com/open-nest-africa/open-nest-africa",
                                className: "font-semibold underline",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Star us on GitHub",
                              }),
                              " –  ",
                              "A quick way to show support and help others discover our project.",
                            ],
                          }),
                          e.jsxs("li", {
                            children: [
                              "🌐",
                              " ",
                              e.jsx("a", {
                                href: "https://opencollective.com/open-nest-africa",
                                target: "_blank",
                                className: "font-semibold underline",
                                rel: "noreferrer",
                                children: "Sponsor us on OpenCollective",
                              }),
                              " ",
                              "– If you believe in our mission, consider contributing to help us grow and build a better community.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    children:
                      "Your support, big or small, makes a real difference. Together, we can keep open source fun, accessible, and inclusive! 😊",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
export { c as default };
