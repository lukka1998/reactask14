/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/bg-stars.svg ')"
      } ,
      colors: {
        'brand': '#1D1E28', 
      },
      variants: {
        fill: ['hover', 'focus'], 
      },
    },
  },
  plugins: [],
}

