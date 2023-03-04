const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      default: ["Archivo", ...defaultTheme.fontFamily.sans],
    },

    fontWeight: {
      300: 300,
      600: 600,
      900: 900,
    },

    colors: {
      black: "#0c0e10",
      white: {
        "01": "#fffeff",
        "02": "#ebedd5",
      },
      green: {
        "01": "#173300",
        "02": "#9ee96f",
      },
    },
  },
  plugins: [],
};
