/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'sidebar' : '#1b2938',
        'white0.0' : '#fff',
        'black1.1' : '#8899a6',
        'black0.9' : '#15202c',
        'black1.2' : '#212529',
      },
      boxShadow: {
        '3xl': '2px 2px 10px 0.2px rgba(3, 105, 161, 0.3)',
      }
    },
  },
  plugins: [],
}

