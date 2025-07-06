import { j as e, L as o } from "./index-CCZ-rFA1.js";
import { A as r } from "./AuthLayout-1vYGDJFr.js";
import { B as t } from "./Button-Btgts8C2.js";
import "./OpenNestInAction-CbOwzNWf.js";
const m = () => {
  const i = () => {
    const s =
      "https://github.com/login/oauth/authorize?client_id=Ov23lictUWkic5JQHWmh&redirect_uri=https://opennestafrica.netlify.app/auth/github&scope=user";
    window.location.href = s;
  };
  return e.jsx(r, {
    title: "Sign up",
    className: "flex-col items-center",
    children: e.jsxs("div", {
      children: [
        e.jsxs("div", {
          className:
            "space-y-4 flex flex-col justify-center items-center w-[448px] pt-10",
          children: [
            e.jsx(t, {
              onClick: i,
              text: "Continue with Github",
              icon: "/images/github-logo.svg",
              className:
                "bg-primary text-[#344054] text-base font-semibold align-center py-4 px-24 w-full",
            }),
            e.jsx(t, {
              text: "Continue with Google",
              icon: "/images/google-logo.svg",
              className:
                "bg-primary text-[#344054] text-base font-semibold align-center py-4 px-24 w-full",
            }),
            e.jsxs("div", {
              className: "flex items-center w-full gap-x-3",
              children: [
                e.jsx("h", {
                  className: "border border-green-900 border-solid w-full",
                }),
                "or",
                e.jsx("h", { className: "border border-[#344054] w-full" }),
              ],
            }),
            e.jsx(t, {
              text: "Continue with Email",
              className:
                "bg-white border-[1.5px] border-[#D0D5DD] border-solid text-[#344054] text-base font-semibold py-4 px-[130px] w-full",
            }),
            e.jsx("p", {
              className: "text-base text-[#667185]",
              children:
                "By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings.",
            }),
          ],
        }),
        e.jsxs("p", {
          className: "text-sm text-[#667185] mt-10",
          children: [
            "Already have an account?",
            " ",
            e.jsx("span", {
              className: "font-medium text-[#0C9EDD]",
              children: e.jsx(o, { to: "/login", children: "Sign in" }),
            }),
          ],
        }),
      ],
    }),
  });
};
export { m as default };
