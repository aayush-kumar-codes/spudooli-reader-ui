/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '2px 2px 10px 0.2px rgba(3, 105, 161, 0.3)',
      }
    },
  },
  plugins: [],
}

