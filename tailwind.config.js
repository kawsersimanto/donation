/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    colors: {
      "accent-40": "rgba(17, 17, 17, 0.4)",
      "accent-30": "rgba(17, 17, 17, 0.30)",
      "accent-70": "rgba(17, 17, 17, 0.70)",
    },
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
          accent30: "rgba(17, 17, 17, 0.30)",
          neutral: "#111111",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
