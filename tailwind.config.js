/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors : {
        bg: "#D9D9D9",
        "bg-alt": "#C9C9C9",
        text: "#000000",
        "text-muted": "#555555",
        primary: "#895EA9",
        accent: "#c283f3ff",
        border: "#B0B0B0",
      }
    },
    fontFamily: {
      sans: ["Mona Sans", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
