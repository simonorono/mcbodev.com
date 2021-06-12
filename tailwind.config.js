const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{jsx,tsx,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
