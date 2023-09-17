/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB2F5B',
        secondary: '#FED841',
        accent: '#222222'
      }
    },
  },
  plugins: [],
}