/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      'sm': '320px',
     
      'md': '481px',
   
      'lg': '1025px',
    
      'xl': '1201px',
    },
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
