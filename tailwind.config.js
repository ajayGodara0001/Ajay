/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        height: {
          '3screen': '300vh', // 3 times the screen height
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'], // Add your font family here
        },
      }
    },
  plugins: [],
}

