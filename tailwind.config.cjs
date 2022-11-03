/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        poppins_r:["Poppins","sans-serif"],
        poppins_b:["Poppins","sans-serif"],
        poppins_eb:["Poppins","sans-serif"]
      },
      colors:{
        'red':{
          500:'#DA4A48'
        },
        'yellow' : {
          900 : '#110c06',
          800 : '#40340F',
          700 : '#7B661F',
          600 : '#B59630',
          500 : '#EEC643',
          400 : '#FDD34C',
          300 : '#FFDF58',
          200 : '#FFE867',
          100 : '#FFFBAD',
        }, 
        'black' : '#141414',
        'r-black' : {
          700:'#141414',
          800:'#0a0a0a',
          900:'#050505',
        },

      }
    }
  },
  plugins: []
};
