/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "primary": "#7855AB",
          "secondary": "#A475EB",
          "accent": "#ff9900",
          "base-100": "#1f1f1f",
          "info": "#569BF5",
          "success": "#188C6F",
          "warning": "#EFCE6C",
          "error": "#F05682",
        },
      },
    ],
  },
}
