/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair:"'Playfair Display', serif",
        lato:"'Lato', sans-serif",
      }
    },
  },
  plugins: [
    // require('tailwind-scrollbar'),
  ],
}

