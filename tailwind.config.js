/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DD8500",
        secondary: "#F9C04C",
        tPrimary: "#4E4E4E",
        tSecondary: "#1D1D20",
        tThird: "#91E564",
        tFourth: "#F9F991",
        tFifth: "#A4FF74",
      },
      fontFamily: {
        causten: ["Causten", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
