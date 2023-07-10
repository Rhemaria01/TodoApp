/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pink: "#00B4D8",
        brown: "#0096C7",
        green: "#0077B6",
        button: "#03045E",
        primary: "#212529",
        card: "#023E8A",
      }
    },
  },
  plugins: [],
}
