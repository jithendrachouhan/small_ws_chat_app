/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#B150F2',
        'darkColor1': '#120640',
        'darkColor2': '#120759'
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtility = {
        ".no-scrollbar::-webkit-scrollbar":{
          display: "none"
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar=width": "none",
        }
      }
      addUtilities(newUtility)
    }
  ],
}

