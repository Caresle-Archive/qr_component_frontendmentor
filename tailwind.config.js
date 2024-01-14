/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cs-light-gray': 'hsl(212, 45%, 89%)',
        'cs-grayish-blue': 'hsl(220, 15%, 55%)',
        'cs-dark-blue': 'hsl(218, 44%, 22%)',
      },
      fontFamily: {
        'outfit': 'Outfit',
      }
    },
  },
  plugins: [],
}

