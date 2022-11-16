/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Raleway','sans-serif']
      },
      keyframes: {
        appears: {
          '0%': {transform: 'translateY(10px)',
          opacity: '0'
        },
          '100%': {transform: 'translateY(0px)',
          opacity: '1'
          }
        }
      },
      animation: {
        'appearing': 'appears 600ms linear'
      }
    },
  },
  plugins: [],
}
