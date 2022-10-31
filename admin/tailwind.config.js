/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['Nunito', 'sans-serif'],
        'DancingScript': ['Dancing Script', 'cursive'],
        'KdamThmorPro' : ['Kdam Thmor Pro', 'sans-serif'],
      },
      colors: {
        'primary' : "#5a189a",
      },
    },
  },
  plugins: [],
}
