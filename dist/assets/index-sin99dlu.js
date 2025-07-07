import { r, j as e, L as p, N as j, u as b, O as w } from "./index-CCZ-rFA1.js";
import { a as f } from "./index-Br0q4W-C.js";
function v({ title: s, titleId: a, ...t }, l) {
  return r.createElement(
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
      t,
    ),
    s ? r.createElement("title", { id: a }, s) : null,
    r.createElement("path", {
      fillRule: "evenodd",
      d: "M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",
      clipRule: "evenodd",
    }),
  );
}
const N = r.forwardRef(v);
function E({ title: s, titleId: a, ...t }, l) {
  return r.createElement(
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
      t,
    ),
    s ? r.createElement("title", { id: a }, s) : null,
    r.createElement("path", {
      fillRule: "evenodd",
      d: "M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
      clipRule: "evenodd",
    }),
  );
}
const g = r.forwardRef(E),
  y = ({ userName: s, fullName: a, githubAvatar: t }) => {
    const [l, n] = r.useState(!1);
    return e.jsxs("div", {
      className:
        "bg-white w-[272px] flex flex-col h-screen overflow-hidden  border-r border-[#E4E7EC]",
      children: [
        e.jsx(p, {
          to: "/dashboard",
          className: "py-8 px-5 inline-block",
          children: e.jsx("span", {
            children: e.jsx("img", {
              src: "/images/logo.svg",
              alt: "OpenNest logo",
            }),
          }),
        }),
        e.jsxs("ul", {
          children: [
            e.jsx(c, {
              name: "Most Contributed Projects",
              link: "/dashboard",
              end: !0,
            }),
            e.jsx(c, { name: "Sopohome", link: "/dashboard/sopohome" }),
            e.jsx(c, { name: "Gitlab", link: "/dashboard/gitlab" }),
            e.jsx(c, { name: "MeshAI", link: "/dashboard/meshai" }),
            e.jsx(c, { name: "OpenAI", link: "/dashboard/openai" }),
          ],
        }),
        e.jsxs("ul", {
          className: "mt-auto py-3 px-4",
          children: [
            e.jsx(c, {
              name: "Settings",
              link: "/settings",
              icon: "images/settings-icon.svg",
            }),
            e.jsxs("li", {
              className: "flex items-center gap-x-2 pt-8",
              children: [
                e.jsx("span", {
                  className: "h-10 w-10 rounded-full",
                  children:
                    l || !t
                      ? e.jsxs("div", {
                          className: "relative w-8 h-8",
                          children: [
                            e.jsx(g, {
                              className: "w-full h-full text-gray-500",
                            }),
                            e.jsx("span", {
                              className:
                                "absolute bottom-[1px] right-[1px] w-3 h-3 bg-green-500 border-2 border-white rounded-full",
                            }),
                          ],
                        })
                      : e.jsxs("div", {
                          className: "relative w-8 h-8",
                          children: [
                            e.jsx("img", {
                              src: t,
                              alt: "User Avatar",
                              onError: () => n(!0),
                              className:
                                "w-full h-full object-cover rounded-full",
                            }),
                            e.jsx("span", {
                              className:
                                "absolute bottom-[1px] right-[1px] w-3 h-3 bg-green-500 border-2 border-white rounded-full",
                            }),
                          ],
                        }),
                }),
                e.jsxs("div", {
                  className: "text-sm",
                  children: [
                    e.jsx("h3", {
                      className: "text-[#101928] font-semibold",
                      children: a,
                    }),
                    e.jsxs("p", {
                      className: "text-[#475367] text-xs",
                      children: [s, "@opennest.ui"],
                    }),
                  ],
                }),
                e.jsx("span", {
                  className: "ml-1 w-5",
                  children: e.jsx("img", {
                    src: "/images/side-arrow-icon.svg",
                    alt: "Side arrow",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  c = ({ name: s, link: a, end: t, icon: l }) =>
    e.jsx(j, {
      to: a,
      end: t,
      className: ({ isActive: n }) =>
        `${n ? "inline-block bg-[#CEECF8] py-3 px-4 border-[#CEECF8] border rounded text-sm font-medium w-[252px]" : "text-sm  text-[#344054] py-3 px-4 block"} `,
      children: e.jsxs("div", {
        className: "flex items-center gap-x-2",
        children: [
          e.jsx("span", { children: e.jsx("img", { src: l }) }),
          " ",
          s,
        ],
      }),
    }),
  k = ({ githubAvatar: s }) => {
    const [a, t] = r.useState(!1);
    return e.jsxs("header", {
      className:
        "py-3 px-9 border-b border-[#E4E7EC] w-full flex items-center justify-between",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-x-2",
          children: [
            e.jsx("span", {
              className: "text-[#475367]",
              children: e.jsx(N, { className: "w-4 h-4" }),
            }),
            e.jsx("input", {
              type: "text",
              placeholder: "Search for projects, resources, or contributors...",
              className: "w-full border-none outline-none",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex items-center gap-x-3",
          children: [
            e.jsx("span", {
              children: e.jsx("img", {
                src: "/images/notification-icon.svg",
                alt: "Notification bell",
              }),
            }),
            e.jsx("span", {
              className: "h-10 w-10 rounded-full",
              children:
                a || !s
                  ? e.jsxs("div", {
                      className: "relative w-11 h-11",
                      children: [
                        e.jsx(g, { className: "w-full h-full text-gray-500" }),
                        e.jsx("span", {
                          className:
                            "absolute bottom-[2px] right-[2px] w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full",
                        }),
                      ],
                    })
                  : e.jsxs("div", {
                      className: "relative w-11 h-11",
                      children: [
                        e.jsx("img", {
                          src: s,
                          alt: "User Avatar",
                          onError: () => t(!0),
                          className: "w-full h-full object-cover rounded-full",
                        }),
                        e.jsx("span", {
                          className:
                            "absolute bottom-[2px] right-[2px] w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full",
                        }),
                      ],
                    }),
            }),
          ],
        }),
      ],
    });
  },
  S = ({ children: s, userName: a, fullName: t, githubAvatar: l }) =>
    e.jsxs("div", {
      className: "h-screen w-full flex overflow-hidden",
      children: [
        e.jsxs("div", {
          children: [
            " ",
            e.jsx(y, { userName: a, fullName: t, githubAvatar: l }),
          ],
        }),
        e.jsxs("div", {
          className: "flex-1",
          children: [
            e.jsx(k, { githubAvatar: l }),
            e.jsx("div", {
              className:
                "py-8 pl-9 pr-[100px] bg-[#F0F2F5] h-full overflow-auto",
              children: s,
            }),
          ],
        }),
      ],
    }),
  C = () => {
    const [s, a] = r.useState(null),
      [t, l] = r.useState(null),
      [n, x] = r.useState(!0);
    return (
      r.useEffect(() => {
        (async () => {
          var m, u;
          const i = localStorage.getItem("accessToken");
          if (i)
            try {
              const o = await f.get(
                "https://open-nest-africa.onrender.com/user",
                { headers: { Authorization: `Bearer ${i}` } },
              );
              a(o.data.user);
            } catch (o) {
              console.error(o),
                l(
                  "Error fetching user data: " +
                    (((u = (m = o.response) == null ? void 0 : m.data) == null
                      ? void 0
                      : u.error) || o.message),
                );
            } finally {
              x(!1);
            }
          else l("Please log in."), x(!1), navigate("/signup");
        })();
      }, []),
      { user: s, error: t, loading: n }
    );
  },
  F = () => {
    const { user: s } = C(),
      [a, t] = r.useState([]),
      [l, n] = r.useState(!0),
      [x, h] = r.useState(null),
      i = b();
    return (
      r.useEffect(() => {
        localStorage.getItem("accessToken")
          ? (async () => {
              var o;
              try {
                const d = await f.get(
                  "https://api.github.com/search/repositories?q=topic:hacktoberfest+is:public&sort=stars&order=desc",
                );
                t((o = d == null ? void 0 : d.data) == null ? void 0 : o.items);
              } catch (d) {
                h("Error fetching projects: " + d.message);
              } finally {
                n(!1);
              }
            })()
          : i("/signup");
      }, [i]),
      e.jsx(S, {
        userName: s == null ? void 0 : s.login,
        fullName: s == null ? void 0 : s.name,
        githubAvatar: s == null ? void 0 : s.avatar_url,
        children: e.jsx(w, {
          context: { user: s, projects: a, loading: l, error: x },
        }),
      })
    );
  };
export { F as default };
