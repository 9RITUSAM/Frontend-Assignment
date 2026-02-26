/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'core-dark': '#332D2D', // Dark sidebar color
        'core-bg': '#F8F9FA',   // Light grey background
      },
    },
  },
  plugins: [],
}