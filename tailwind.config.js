const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
