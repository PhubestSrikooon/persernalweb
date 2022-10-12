/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        poppins_r:["Poppins-R","sans-serif"],
        poppins_b:["Poppins-B","sans-serif"]
      },
      colors:{
        'yellow' : '#eec643', 
        'black' : '#141414'
      }
    }
  },
  plugins: []
};
