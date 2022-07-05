/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', '"Poppins"', '"Lora"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        anton: ['Anton', 'sans-serif']
      },
      animation: {
        arrowPointer: 'arrowPointer 1s linear infinite',
        wiggle: 'wiggle 1s linear infinite',
      },
      keyframes: {
        arrowPointer: {
          '0%, 100%': {transform: 'translate(0)'},
          '50%': {transform: 'translate(20px, 0)'},
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
