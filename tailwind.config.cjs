const plugin = require("tailwindcss/plugin");
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {

    extend: {
      fontSize: {
        "2xl": "2.2rem",
        "3xl": "2.8rem"
      },
      textShadow: {
        "2xl": "5px 10px;"
      }
    }
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        "h1": { fontSize: theme("fontSize.3xl") },
        "h2": { fontSize: theme("fontSize.2xl") },
        "h3": { fontSize: theme("fontSize.lg") }
      });
    })
  ]
};
