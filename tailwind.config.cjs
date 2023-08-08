/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { right: -200 },
          '100%': { right: 0 },
        },
        wiggle1: {
          '0%': { right: 0 },
          '100%': { right: -200 },
         
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out ',
        wiggle1: 'wiggle1 1s ease-in-out'
      }
    },
  },
  plugins: [],
}
