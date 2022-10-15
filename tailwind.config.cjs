/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        poppins_r:["Poppins-R","sans-serif"],
        poppins_b:["Poppins-B","sans-serif"],
        poppins_eb:["Poppins-EB","sans-serif"]
      },
      colors:{
        'yellow' : {
          900 : '#030201',
          800 : '#40340F',
          700 : '#7B661F',
          600 : '#B59630',
          500 : '#EEC643',
          400 : '#FDD34C',
          300 : '#FFDF58',
          200 : '#FFE867',
          100 : '#FFFBAD',
        }, 
        'black' : '#141414'
      }
    }
  },
  plugins: []
};
