/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        sf_cyan:"#0CC8AE",
        sf_pink:"#579CD0",
        sf_blue:"#B766FB",
        primary: "white",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "cyber-pink":"#bf61ff",
        "cyber-green":"#00cea8",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 0px 30px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('../src/assets/bg_white.png')",
      },
    },
  },
  plugins: [],
};