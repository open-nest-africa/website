import { r as t, j as e, a as n } from "./index-CCZ-rFA1.js";
import { D as o } from "./DashboardContentLayout-vDPM0KnT.js";
import "./Button-Btgts8C2.js";
function c({ title: r, titleId: a, ...s }, l) {
  return t.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: l,
        "aria-labelledby": a,
      },
      s,
    ),
    r ? t.createElement("title", { id: a }, r) : null,
    t.createElement("path", {
      fillRule: "evenodd",
      d: "M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z",
      clipRule: "evenodd",
    }),
  );
}
const i = t.forwardRef(c);
function d({ title: r, titleId: a, ...s }, l) {
  return t.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: l,
        "aria-labelledby": a,
      },
      s,
    ),
    r ? t.createElement("title", { id: a }, r) : null,
    t.createElement("path", {
      fillRule: "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      clipRule: "evenodd",
    }),
  );
}
const m = t.forwardRef(d);
function x({ title: r, titleId: a, ...s }, l) {
  return t.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: l,
        "aria-labelledby": a,
      },
      s,
    ),
    r ? t.createElement("title", { id: a }, r) : null,
    t.createElement("path", {
      fillRule: "evenodd",
      d: "M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z",
      clipRule: "evenodd",
    }),
  );
}
const u = t.forwardRef(x);
function h({ title: r, titleId: a, ...s }, l) {
  return t.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: l,
        "aria-labelledby": a,
      },
      s,
    ),
    r ? t.createElement("title", { id: a }, r) : null,
    t.createElement("path", {
      fillRule: "evenodd",
      d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
      clipRule: "evenodd",
    }),
  );
}
const f = t.forwardRef(h),
  p = () =>
    e.jsxs("div", {
      className: "bg-[#AEDFF4] p-6 w-2/5 rounded-md h-80",
      children: [
        e.jsx("h5", {
          className: "text-xl font-semibold mb-4",
          children: "Latest Updates",
        }),
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsx("p", {
              className: "text-sm",
              children: "• New contribution guidelines added",
            }),
            e.jsx("p", {
              className: "text-sm",
              children: "• Community spotlight: Featured contributors",
            }),
            e.jsx("p", {
              className: "text-sm",
              children: "• Upcoming open source events",
            }),
            e.jsx("p", {
              className: "text-sm",
              children: "• Recent project milestones",
            }),
          ],
        }),
      ],
    }),
  g = ({ repo: r }) => {
    const a = "/images/github-logo.svg";
    return e.jsxs("div", {
      className:
        "bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200",
      children: [
        e.jsx("div", {
          children: e.jsx("img", {
            src: r.owner.avatar_url || a,
            onError: (s) => {
              (s.target.onerror = null), (s.target.src = a);
            },
            alt: "Avatar",
            className: "h-12 w-12 rounded-full mb-4",
          }),
        }),
        e.jsxs("div", {
          className: "border border-blue p-4 rounded-md flex flex-col gap-3",
          children: [
            e.jsx("h3", {
              className: "text-lg font-semibold underline",
              children: e.jsx("a", {
                href: r.html_url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-500 hover:underline",
                children: r.name,
              }),
            }),
            e.jsx("p", {
              className: "text-gray-600",
              children: r.description || "No description provided.",
            }),
            e.jsxs("div", {
              className: "mt-2 flex items-center gap-3",
              children: [
                e.jsxs("span", {
                  className: "flex items-center text-sm text-gray-500",
                  children: [
                    e.jsx(f, {
                      className: "h-5 w-5 mr-1 text-yellow-500",
                      "aria-hidden": "true",
                    }),
                    r.stargazers_count,
                  ],
                }),
                e.jsxs("span", {
                  className: "flex items-center text-sm text-gray-500",
                  children: [
                    e.jsx(i, {
                      className: "h-4 w-5 mr-1 text-gray-600",
                      "aria-hidden": "true",
                    }),
                    r.language || "Not specified",
                  ],
                }),
                e.jsxs("span", {
                  className: "flex items-center text-sm text-gray-500",
                  children: [
                    e.jsx(u, {
                      className: "h-4 w-5 mr-1 text-gray-600",
                      "aria-hidden": "true",
                    }),
                    r.forks_count,
                  ],
                }),
                e.jsxs("span", {
                  className: "flex items-center text-sm text-blue",
                  children: [
                    e.jsx(m, {
                      className: "h-4 w-5 mr-1 text-blue",
                      "aria-hidden": "true",
                    }),
                    e.jsxs("a", {
                      href: `${r.html_url}/issues`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-blue-500 hover:underline",
                      children: [r.open_issues_count, " open issues"],
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
  j = ({ repos: r, loading: a, error: s }) =>
    a
      ? e.jsx("p", { children: "Loading repositories..." })
      : s
        ? e.jsx("p", { children: s })
        : e.jsx("div", {
            className: "w-3/5 scrollable-container pr-3 pb-6",
            children: e.jsx("ul", {
              className: "flex flex-col gap-6",
              children: r.map((l) => e.jsx(g, { repo: l })),
            }),
          }),
  N = () => {
    const { user: r, projects: a, loading: s, error: l } = n();
    return e.jsx(o, {
      user: r,
      loading: s,
      error: l,
      children: e.jsxs("div", {
        className: "flex gap-5",
        children: [e.jsx(j, { repos: a, loading: s, error: l }), e.jsx(p, {})],
      }),
    });
  };
export { N as default };
