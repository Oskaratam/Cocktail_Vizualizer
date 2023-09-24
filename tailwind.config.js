/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': {'max': '1536px'},

      'xl': {'max': '1344px'},

      'lg': {'max': '1054px'},

      'md': {'max': '870px'},

      'sm': {'max': '600px'},
      
      'xs': {'max': '460px'}
    },
    extend: {},
  },
  plugins: [],
}

