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
      current: "currentColor",
      transparent: 'transparent',
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

    animation: {
      'rotate': 'rotate 10s linear infinite'
    },

    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(-360deg)" },
      }
    },

    extend: {
      spacing: {
        '0.5-em': '0.5em',
        '0.65-em': '0.65em',
        '0.75-em': '0.75em',
        18: '4.6rem',
      },
    }
  }
};
