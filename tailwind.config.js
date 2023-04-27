/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      dgcon:{
        400: "#D21312",
        500: "#ffffff",
        600: "#ED2B2A",
        700: "#F15A59",
      },
      dgtext: {
        800: "#070A52",
      },
      dgbg: {
        900: "#eeeeee",
      }
    },
    extend: {},
  },
  plugins: [],
}

