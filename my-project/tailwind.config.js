/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {  transform: {
      'rotate-y-180': 'rotateY(180deg)',
    },
    fontFamily: {
      'barlow': ['Barlow Condensed', 'sans-serif'],
      'playfair': ['Playfair Display', 'serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'space-grotesk': ['Space Grotesk', 'sans-serif'],
    }},
  },
  plugins: [],
}

