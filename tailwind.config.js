/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B8E99E",
        secondary: "#F9C04C",
        tPrimary: "#4E4E4E",
        tSecondary: "#1D1D20",
        tThird: "#91E564",
        tFourth: "#F9F991",
        tFifth: "#A4FF74",
      },
      fontFamily: {
        causten: ["Causten", "sans-serif"],
        caustenBlack: ["CaustenBlack", "sans-serif"],
        caustenBold: ["CaustenBold", "sans-serif"],
        caustenSemiBold: ["CaustenSemiBold", "sans-serif"],
        caustenMedium: ["CaustenMedium", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        gradient2: "url('/src/assets/gradient2.png')",
        gradient3: "url('/src/assets/gradient3.png')",
      },
      backgroundSize: {
        stretch: "100% 100%",
      },
    },
  },
  plugins: [],
};
