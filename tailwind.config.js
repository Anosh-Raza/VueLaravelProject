/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      dgcon:{
        400: "#e40246",
        500: "#ffffff",
        600: "#ED2B2A",
        700: "#F15A59",
      },
      dgtext: {
        800: "#1f1646",
      },
      formbg: {
        850: "#f5f8fa",
      },
      dgbg: {
        900: "#eeeeee",
      },
      red: {
        950: "#e40246",
      }
    },
    extend: {},
  },
  plugins: [],
}

