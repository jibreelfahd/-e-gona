/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        white_smoke: "#F5F5F5",
        dark_pastel_green: "#49BD44",
        pakistan_green: "#113A10",
      },
    }, // Existing Tailwind utilities
  },
  plugins: [],
};
