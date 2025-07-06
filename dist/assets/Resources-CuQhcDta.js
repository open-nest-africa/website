import { r as n, j as t } from "./index-CCZ-rFA1.js";
import { L as b } from "./Layout-DGHEHGcU.js";
import "./Button-Btgts8C2.js";
function f({ title: e, titleId: i, ...o }, r) {
  return n.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": i,
      },
      o,
    ),
    e ? n.createElement("title", { id: i }, e) : null,
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z",
      clipRule: "evenodd",
    }),
  );
}
const v = n.forwardRef(f);
function y({ title: e, titleId: i, ...o }, r) {
  return n.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": i,
      },
      o,
    ),
    e ? n.createElement("title", { id: i }, e) : null,
    n.createElement("path", {
      fillRule: "evenodd",
      d: "M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",
      clipRule: "evenodd",
    }),
  );
}
const k = n.forwardRef(y),
  j = () =>
    t.jsxs("div", {
      className: "p-24 bg-[#F5FCFF] flex flex-col gap-10",
      children: [
        t.jsx("h1", {
          className: "text-6xl font-bold",
          children: "Welcome to OpenNest Resources",
        }),
        t.jsx("p", {
          className: "text-xl leading-9",
          children:
            "Welcome to OpenNest, your cozy community hub for embarking on your open-source journey! Here, we believe that everyone has something valuable to contribute, regardless of their background or experience level. Our mission is to empower beginners to confidently navigate the world of open source by providing essential resources, guidance, and a supportive community.",
        }),
        t.jsx("p", {
          className: "text-xl leading-9",
          children:
            "Whether you're interested in coding, documentation, design, or community management, OpenNest offers a variety of pathways to get involved. Join us as we cultivate an inclusive environment where everyone can learn, grow, and thrive together in the open-source space!",
        }),
      ],
    }),
  c = ({
    data: e,
    icon: i,
    role: o,
    info: r,
    videoContent: l,
    videoText: s,
    videoLink: a,
    summaryTitle: m,
    summaryContent1: h,
    summaryContent2: g,
  }) =>
    t.jsxs("div", {
      className: "px-[7.4rem] py-24 bg-[#F5FCFF] flex flex-col gap-12",
      children: [
        t.jsxs("div", {
          className: "flex flex-col gap-10",
          children: [
            t.jsxs("h4", {
              className: "text-6xl font-semibold",
              children: [i, " ", o],
            }),
            t.jsx("p", { className: "text-xl leading-9", children: r }),
          ],
        }),
        t.jsx("div", {
          className: "flex flex-col gap-8",
          children: e.map((u, x) =>
            t.jsxs(
              "div",
              {
                className: "",
                children: [
                  t.jsx("h2", {
                    className: "text-2xl font-bold mb-4",
                    children: u.title,
                  }),
                  t.jsx("ul", {
                    className: "list-disc pl-6 text-xl leading-9",
                    children: u.points.map((p, w) =>
                      t.jsxs(
                        "li",
                        {
                          className: "mb-2",
                          children: [
                            t.jsx("strong", { children: p.title }),
                            ": ",
                            p.description,
                          ],
                        },
                        w,
                      ),
                    ),
                  }),
                ],
              },
              x,
            ),
          ),
        }),
        l &&
          t.jsxs("div", {
            children: [
              t.jsx("h6", {
                className: "text-2xl font-bold mb-4",
                children: "🎥 Video Tutorial",
              }),
              t.jsxs("p", {
                className: "text-xl leading-9",
                children: [s, ":"],
              }),
              t.jsxs("a", {
                href: a,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-xl leading-9 underline",
                children: ["How to Contribute to Open Source as ", o],
              }),
              t.jsx("div", {
                className:
                  "mt-10 flex justify-center items-center overflow-hidden",
                children: t.jsx("iframe", {
                  width: "800",
                  height: "500",
                  src: `https://www.youtube.com/embed/${a.includes("youtu.be/") ? a.split("youtu.be/")[1] : a.split("youtube.com/live/")[1].split("?")[0]}`,
                  title: "YouTube video player",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowFullScreen: !0,
                  className: "rounded-2xl",
                }),
              }),
            ],
          }),
        t.jsxs("div", {
          className: "flex flex-col gap-6",
          children: [
            t.jsx("h6", { className: "text-2xl font-bold", children: m }),
            t.jsx("p", { className: "text-xl leading-9", children: h }),
            t.jsx("p", { className: "text-xl leading-9", children: g }),
          ],
        }),
      ],
    }),
  d = [
    {
      role: "Technical Writers",
      icon: "✍️ ",
      intro:
        "Making your first contribution to an open-source project might feel daunting, but it doesn’t have to be! This step-by-step guide will walk you through everything you need to know to confidently contribute to an open-source project for the very first time.",
      contributions: [
        {
          title: "🌟 Why Technical Writers Should Contribute",
          points: [
            {
              title: "Impact",
              description: "Make complex topics understandable for new users.",
            },
            {
              title: "Grow",
              description:
                "Build a public portfolio with valuable writing samples.",
            },
            {
              title: "Collaborate",
              description:
                "Work with developers, designers, and other writers worldwide.",
            },
            {
              title: "Learn",
              description:
                "Expand your knowledge of technology while writing about it.",
            },
          ],
        },
        {
          title: "💡 Ways Technical Writers Can Contribute",
          points: [
            {
              title: "Documentation",
              description:
                "Write or improve installation guides, README files, and tutorials.",
            },
            {
              title: "User Guides",
              description: "Create step-by-step walkthroughs for new features.",
            },
            {
              title: "API Documentation",
              description:
                "Explain APIs clearly with examples and code snippets.",
            },
            {
              title: "Glossaries",
              description:
                "Build glossaries to make technical terms easy to understand.",
            },
            {
              title: "Release Notes",
              description:
                "Help document changes and new features for each release.",
            },
          ],
        },
        {
          title: "🚀 How to Get Started",
          points: [
            {
              title: "Pick a Project",
              description:
                "Search for issues labelled with documentation or good first issue.",
            },
            {
              title: "Please introduce yourself",
              description:
                "Engage with the project team through Discussions or GitHub Issues.",
            },
            {
              title: "Pick a Documentation Task",
              description: "Update the README or write a quick-start guide.",
            },
            {
              title: "Submit Your Work",
              description: "Create a PR following the contribution guidelines.",
            },
            {
              title: "Iterate and Learn",
              description: "Collaborate with reviewers to polish your work.",
            },
          ],
        },
      ],
      videoTutorial: {
        title: "🎥 Video Tutorial",
        description:
          "Watch this YouTube tutorial to learn how technical writers can contribute to open source",
        link: "https://youtu.be/IaBTzZIZPks?si=exCfpk6xqyRiXA0_",
      },
      remarks: {
        title: "✍️ Start Your Writing Journey Today!",
        content1:
          "Every word counts, whether it’s improving documentation, writing tutorials, or clarifying complex concepts. Your contribution will help others understand and use the project more easily.",
        content2:
          "Don’t be afraid to ask questions or request feedback—writers are essential to every open-source project. Dive in and make a difference! ",
      },
    },
    {
      role: "Developers",
      icon: "💻",
      intro:
        "Open source isn't just about code — it's about collaboration! As a developer, you have endless opportunities to make an impact, learn new skills, and grow your network. This guide will help you get started.",
      contributions: [
        {
          title: "🌟 Why Developers Should Contribute to Open Source",
          points: [
            {
              title: "Impact",
              description:
                "Improve tools and projects used by millions worldwide.",
            },
            {
              title: "Learn",
              description:
                "Gain experience with new technologies and frameworks.",
            },
            {
              title: "Grow",
              description:
                "Build a portfolio with real-world projects and boost your career.",
            },
            {
              title: "Community",
              description:
                "Collaborate with developers globally and grow your network.",
            },
          ],
        },
        {
          title: "💡 Ways Developers Can Contribute",
          points: [
            {
              title: "Bug Fixes",
              description: "Find and fix issues reported in the project.",
            },
            {
              title: "New Features",
              description: "Implement features or suggest improvements.",
            },
            {
              title: "Refactor Code",
              description: "Improve code readability and performance.",
            },
            {
              title: "Testing",
              description:
                "Write unit, integration, or automated tests to ensure code quality.",
            },
            {
              title: "Documentation Support",
              description: "Update or improve code documentation.",
            },
          ],
        },
        {
          title: "🚀 How to Get Started",
          points: [
            {
              title: "Find a Project",
              description:
                "Look for issues tagged as good first issue or help wanted.",
            },
            {
              title: "Introduce Yourself",
              description:
                "Join the project's Discussions or Slack to ask how you can help.",
            },
            {
              title: "Pick a Task",
              description:
                "Start with small tasks like bug fixes or documentation updates.",
            },
            {
              title: "Submit a Pull Request (PR)",
              description:
                "Follow the contribution guidelines and share your changes.",
            },
            {
              title: "Learn & Iterate",
              description:
                "Collaborate with the community to improve your code.",
            },
          ],
        },
      ],
      videoTutorial: {
        title: "🎥 Video Tutorial",
        description:
          "Watch this YouTube tutorial to learn how developers can contribute to open source",
        link: "https://youtu.be/dLRA1lffWBw?si=5h0HP0ARJwi0N1eF",
      },
      remarks: {
        title: "✍️ Start Your Development Journey Today!",
        content1:
          "No contribution is too small—whether it's fixing a bug, adding a feature, or reviewing code. Jump in, write code, and help make open source better one commit at a time!",
        content2:
          "If you ever get stuck, reach out to the community—developers love to help each other grow and learn. Together, we can build amazing things! 🚀",
      },
    },
    {
      role: "Designers",
      icon: "🎨",
      intro:
        "Contributing to open source isn't just for developers — designers play an important role in making open-source projects more user-friendly, visually appealing, and accessible. If you’re a designer and want to get started, this guide is for you!",
      contributions: [
        {
          title: "🌟 Why Should Designers Contribute to Open Source?",
          points: [
            {
              title: "Impact",
              description:
                "Improve user experience for projects used by thousands or even millions.",
            },
            {
              title: "Collaboration",
              description:
                "Work with developers and other designers around the world.",
            },
            {
              title: "Portfolio Building",
              description:
                "Contribute to real projects and showcase your work.",
            },
            {
              title: "Learning",
              description:
                "Gain new skills in working with diverse teams and tools.",
            },
          ],
        },
        {
          title: "💡 Ways Designers Can Contribute",
          points: [
            {
              title: "UI/UX Design",
              description:
                "Design new features, refine existing layouts, or create wireframes.",
            },
            {
              title: "Graphic Design",
              description:
                "Design social media assets or promotional graphics for project launches.",
            },
            {
              title: "Documentation Design",
              description:
                "Create diagrams to make complex ideas easier to understand.",
            },
            {
              title: "Website Design",
              description:
                "Ensure responsive design for better mobile and tablet experiences.",
            },
            {
              title: "User Testing",
              description:
                "Conduct user testing to help teams understand pain points and improve the user flow.",
            },
          ],
        },
        {
          title: "🚀 How to Start Contributing",
          points: [
            {
              title: "Find an Open Source Project",
              description: "Look for projects actively looking for designers.",
            },
            {
              title: "Communicate with the Team",
              description:
                "Introduce yourself in the project’s communication channels (GitHub Discussions, Slack, etc.).",
            },
            {
              title: "Pick a Design Task",
              description:
                "Look for tasks labelled design or UX under the project’s issues.",
            },
            {
              title: "Submit Your Work",
              description:
                "Once your work is ready, submit an issue with your designs or suggestions. (For a start, you don't need to create a PR).",
            },
          ],
        },
      ],
      videoTutorial: {
        title: "🎥 Video Tutorial",
        description:
          "Watch this YouTube tutorial to learn how designers can contribute to open source",
        link: "https://www.youtube.com/live/AZl6-kMRMpE",
      },
      remarks: {
        title: "🌻 Start Your Design Journey Today!",
        content1:
          "No contribution is too small—whether it’s a logo, a wireframe, or feedback on an interface. Dive in, share your creativity, and make open source a more beautiful place!",
        content2:
          "If you ever feel stuck, don’t hesitate to ask questions in the community—designers are just as essential as open-source developers.",
      },
    },
  ],
  T = () => {
    var i, o;
    const e = d.find((r) => r.role === "Technical Writers");
    return t.jsx(c, {
      data: e.contributions,
      role: e.role,
      icon: e.icon,
      info: e.intro,
      videoContent: !!e.videoTutorial,
      videoText: (i = e.videoTutorial) == null ? void 0 : i.description,
      videoLink: (o = e.videoTutorial) == null ? void 0 : o.link,
      summaryTitle: e.remarks.title,
      summaryContent1: e.remarks.content1,
      summaryContent2: e.remarks.content2,
    });
  },
  C = () => {
    var i, o;
    const e = d.find((r) => r.role === "Developers");
    return t.jsx(c, {
      data: e.contributions,
      role: e.role,
      icon: e.icon,
      info: e.intro,
      videoContent: !!e.videoTutorial,
      videoText: (i = e.videoTutorial) == null ? void 0 : i.description,
      videoLink: (o = e.videoTutorial) == null ? void 0 : o.link,
      summaryTitle: e.remarks.title,
      summaryContent1: e.remarks.content1,
      summaryContent2: e.remarks.content2,
    });
  },
  N = () => {
    var i, o;
    const e = d.find((r) => r.role === "Designers");
    return t.jsx(c, {
      data: e.contributions,
      role: e.role,
      icon: e.icon,
      info: e.intro,
      videoContent: !!e.videoTutorial,
      videoText: (i = e.videoTutorial) == null ? void 0 : i.description,
      videoLink: (o = e.videoTutorial) == null ? void 0 : o.link,
      summaryTitle: e.remarks.title,
      summaryContent1: e.remarks.content1,
      summaryContent2: e.remarks.content2,
    });
  },
  S = () => {
    const [e, i] = n.useState(0),
      o = [
        { name: "Overview", component: t.jsx(j, {}, "1") },
        { name: "Technical Writing", component: t.jsx(T, {}, "2") },
        { name: "Developer Guide", component: t.jsx(C, {}, "3") },
        { name: "Design Guide", component: t.jsx(N, {}, "4") },
      ],
      r = () => {
        i((s) => (s + 1) % o.length);
      },
      l = () => {
        i((s) => (s === 0 ? o.length - 1 : s - 1));
      };
    return t.jsxs(b, {
      children: [
        o[e].component,
        t.jsxs("div", {
          className: `${e === 0 ? "justify-end" : "justify-between"} bg-[#E3DA35] w-full h-[118px] mb-[140px] flex items-center px-[99px]`,
          children: [
            e !== 0 &&
              t.jsxs("div", {
                className: "flex items-center gap-x-2",
                children: [
                  t.jsx("button", {
                    onClick: l,
                    children: t.jsx(v, { className: "w-5 h-5" }),
                  }),
                  t.jsx("span", {
                    className: "text-2xl",
                    children: "Previous",
                  }),
                  t.jsx("label", {
                    className: "text-black text-[32px]",
                    children: o[e - 1].name,
                  }),
                ],
              }),
            e !== o.length - 1 &&
              t.jsxs("div", {
                className: "flex items-center gap-x-2",
                children: [
                  t.jsx("span", { className: "text-2xl", children: "Next" }),
                  t.jsx("label", {
                    className: "text-black font-medium text-[32px]",
                    children: o[e + 1].name,
                  }),
                  t.jsx("button", {
                    disabled: e === o.length - 1,
                    onClick: r,
                    children: t.jsx(k, { className: "w-5 h-5" }),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  };
export { S as default };
