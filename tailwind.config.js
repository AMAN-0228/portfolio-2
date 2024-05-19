/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'text1': '#000000',
        'secondary': '#7C3AED',
        'highlight': '#FE5B02',
        'base': '#FFFFFF',
        'base1': '#241F21',
        'base2': '#E1E1E1',  
      },
    },
  },
  plugins: [],
}