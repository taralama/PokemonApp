/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
        customBlue:'#2C72B8',
        lightBlue:'#9ACDFF',
        historyBlue: '#3383D2',
        borderBlue:'#9ACDFF'
        
      },
      fontFamily: {
        kanit:['kanit','sans-serif']
      },
      height:{
        fullHeight: '200vh'
      },
      screens:{
        ssm:'100px'
      }
     
    },
  },
  plugins: [],
}