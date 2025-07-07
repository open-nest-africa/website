import { r as t, u as d, j as s } from "./index-CCZ-rFA1.js";
import { a as u } from "./index-Br0q4W-C.js";
const b = () => {
  const [h, a] = t.useState(!0),
    [m, r] = t.useState(null),
    [f, i] = t.useState(null),
    o = d();
  return (
    t.useEffect(() => {
      (async () => {
        var n, l;
        const c = new URLSearchParams(window.location.search).get("code");
        if (!c) {
          r("Authorization code not found."), a(!1);
          return;
        }
        try {
          const e = await u.get(
            `https://open-nest-africa.onrender.com/auth/github?code=${c}`,
          );
          localStorage.setItem("accessToken", e.data.accessToken),
            i(e.data.accessToken),
            r(null),
            a(!1),
            o("/dashboard");
        } catch (e) {
          console.error(e),
            r(
              `Error logging in: ${((l = (n = e.response) == null ? void 0 : n.data) == null ? void 0 : l.message) || e.message}`,
            ),
            a(!1);
        }
      })();
    }, [o]),
    s.jsx(s.Fragment, {
      children: s.jsx("div", {
        className: "flex items-center justify-center min-h-screen bg-gray-100",
        children: s.jsxs("div", {
          className: "flex flex-col gap-4 items-center",
          children: [
            s.jsx("div", {
              className:
                "loader ease-linear rounded-full border-8 border-t-8 border-[#0C9EDD] h-32 w-32 mb-4",
            }),
            s.jsx("p", {
              className: "text-[#0C9EDD] text-xl",
              children:
                "Please wait....You will be redirected to your dashboard",
            }),
          ],
        }),
      }),
    })
  );
};
export { b as default };
