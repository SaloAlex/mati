/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#000000',
        'custom-gold': '#D4AF37',
        'custom-white': '#FFFFFF',
      },
      keyframes: {
        bubble: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        bubble: 'bubble 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
