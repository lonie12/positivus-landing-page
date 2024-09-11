/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B9FF66",
        secondary: "#191A23",
        customGray: "#191A23",
        textDark: "#000000",
        textLight: "#FFFFFF"
      },
      borderRadius: {
        smallRadius: 14,
        largeRadius: 45,
      }
    },
  },
  plugins: [],
}