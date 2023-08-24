/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,tsx}",
  ],
  theme: {
  
    extend: {
      spacing:{
        "half":"50%"
      }
    },
  },
  plugins: [],
}

