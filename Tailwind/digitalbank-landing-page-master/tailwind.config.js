/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-dark': 'hsl(233, 26%, 24%)',
        'primary-green': 'hsl(136, 64%, 51%)',
        'primary-cyan': 'hsl(192, 69%, 51%)',
        'neutral-gray': 'hsl(233, 8%, 62%)',
        'neutral-light-gray': 'hsl(220, 16%, 96%)',
        'neutral-very-light-gray': 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
