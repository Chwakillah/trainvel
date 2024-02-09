/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "inter" : ['inter']
      },
      colors:{
        "ungu" : '#5D50C6',
        "pink" : '#F85E9F',
        "oren" : "#FF5722"
      }
    },
  },
  plugins: [],
}

