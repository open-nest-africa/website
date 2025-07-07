import { j as s } from "./index-CCZ-rFA1.js";
const t = () =>
  s.jsxs("div", {
    className: "p-6",
    children: [
      s.jsx("h2", {
        className: "text-2xl font-semibold mb-4",
        children: "Dashboard Overview",
      }),
      s.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: [
          s.jsxs("div", {
            className: "bg-white p-6 rounded-lg shadow",
            children: [
              s.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "Your Contributions",
              }),
              s.jsx("p", {
                className: "text-gray-600",
                children:
                  "Track your open source contributions and see your impact on the community.",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "bg-white p-6 rounded-lg shadow",
            children: [
              s.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "Active Projects",
              }),
              s.jsx("p", {
                className: "text-gray-600",
                children:
                  "View and manage the open source projects you're currently contributing to.",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "bg-white p-6 rounded-lg shadow",
            children: [
              s.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: "Community Activity",
              }),
              s.jsx("p", {
                className: "text-gray-600",
                children:
                  "Stay updated with the latest discussions and events in the OpenNest community.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
export { t as default };
