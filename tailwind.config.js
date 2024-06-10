/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1d232a",
      },
    },
  },
  plugins: [
    require("daisyui"),
    "prettier-plugin-tailwindcss",
  ],
  
}

