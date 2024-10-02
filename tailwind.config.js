/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
     bg_nav:'#000000',
     bg_main:'#111111',
     bg_com:'#1E1F22',
     color_font:'#FFFFFF',
     color_hover:'#4865FF',
     color_text:"#E4E6E7"
    },
    extend: {},
  },
  plugins: [],
}

