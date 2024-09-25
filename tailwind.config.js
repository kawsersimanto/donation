/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "1140px",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#B4F461",
          secondary: "#F9F7F3",
          accent: "rgba(17, 17, 17, 0.05)",
          neutral: "#111111",
          "accent-40": "rgba(17, 17, 17, 0.4)",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
