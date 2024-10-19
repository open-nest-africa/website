/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#F4F0AE",
        primary: "#CEECF8",
        dark: "#D0D5DD",
        "dark-2": "#101928",
        blue: "#0C9EDD",
      },
      dropShadow: {
        'custom': '1px 12px 24px 0 rgba(8, 37, 82, 0.05)',
      },
    },
  },
  plugins: [],
};
