/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC300',
        secondery: '#262117',
        blackish: '#403511',
      }
    },
  },
  plugins: [],
}

