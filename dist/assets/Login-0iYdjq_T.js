import { r, j as e, L as u } from "./index-CCZ-rFA1.js";
import { A as h } from "./AuthLayout-1vYGDJFr.js";
import { B as n } from "./Button-Btgts8C2.js";
import "./OpenNestInAction-CbOwzNWf.js";
function p({ title: t, titleId: s, ...a }, o) {
  return r.createElement(
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
        ref: o,
        "aria-labelledby": s,
      },
      a,
    ),
    t ? r.createElement("title", { id: s }, t) : null,
    r.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88",
    }),
  );
}
const b = r.forwardRef(p);
function g({ title: t, titleId: s, ...a }, o) {
  return r.createElement(
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
        ref: o,
        "aria-labelledby": s,
      },
      a,
    ),
    t ? r.createElement("title", { id: s }, t) : null,
    r.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z",
    }),
    r.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    }),
  );
}
const f = r.forwardRef(g),
  w = ({
    type: t,
    value: s,
    name: a,
    label: o,
    placeholder: l,
    className: c,
  }) => {
    const { showText: i, setShowText: d } = r.useState(!1),
      x = () => {
        d((m) => !m);
      };
    return e.jsxs("div", {
      className: "",
      children: [
        !!o &&
          e.jsx("label", {
            className: "mb-1 text-sm font-medium text-dark-2 inline-block",
            children: o,
          }),
        t === "password" &&
          e.jsx("button", {
            type: "button",
            onClick: x,
            className: "absolute right-4 top-10",
            children: i.get
              ? e.jsx(b, { className: "h-5 w-5" })
              : e.jsx(f, { className: "h-5 w-5" }),
          }),
        e.jsx("input", {
          type: t === "password" && i ? "text" : t,
          name: a,
          value: s,
          placeholder: l,
          className: `${c} border rounded-md px-4 py-1.5 w-full`,
        }),
      ],
    });
  },
  j = ({ text: t }) =>
    e.jsxs("div", {
      className: "flex items-center justify-center gap-3",
      children: [
        e.jsx("hr", { className: "w-full border-t-1 border-gray-400" }),
        e.jsx("span", { children: t }),
        e.jsx("hr", { className: "w-full border-t-1 border-gray-400" }),
      ],
    }),
  v = () => {
    const t = () => {
      const o =
        "https://github.com/login/oauth/authorize?client_id=Ov23lictUWkic5JQHWmh&redirect_uri=https://opennestafrica.netlify.app/auth/github&scope=user";
      window.location.href = o;
    };
    return e.jsx(h, {
      title: "Sign in",
      className: "flex-col gap-5 w-full max-w-md mx-auto",
      children: e.jsxs("div", {
        className: "flex flex-col gap-8",
        children: [
          e.jsx("p", {
            className: "text-2xl font-semibold",
            children: "Login with your email",
          }),
          e.jsx("form", {
            action: "",
            children: e.jsx(w, {
              className: "border-dark outline-dark py-4",
              placeholder: "Enter your email address",
            }),
          }),
          e.jsx(n, {
            text: "Login",
            className:
              "bg-blue text-white text-base font-semibold px-[114px] py-4 text-center",
          }),
          e.jsx(j, { text: "or" }),
          e.jsxs("div", {
            className: "flex flex-col gap-3",
            children: [
              e.jsx(n, {
                onClick: t,
                icon: "/images/github-logo.svg",
                text: "Continue with Github",
                className:
                  "bg-white text-black text-base font-semibold px-[108px] py-4 text-center border border-dark rounded-md",
              }),
              e.jsx(n, {
                icon: "/images/google-logo.svg",
                text: "Continue with Google",
                className:
                  "bg-white text-black text-base font-semibold px-[110px] py-4 text-center border border-dark rounded-md",
              }),
            ],
          }),
          e.jsxs("p", {
            className: "text-sm text-[#667185]",
            children: [
              "Are you new here?",
              " ",
              e.jsx(u, {
                to: "/signup",
                className: "text-blue",
                children: "Create account",
              }),
            ],
          }),
        ],
      }),
    });
  };
export { v as default };
