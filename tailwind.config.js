/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        white_smoke: "#F5F5F5",
        dark_pastel_green: "#49BD44",
        pakistan_green: "#113A10",
        footer_color: "#113A10",
        footer_color2: "#1E1E1E",
      },

      width: {
        919: "919px",
        700: "700px",
        1200: "1200px",
        3: "3px",
        892: "892px",
        217: "217px",
        150: "150px",
        498: "498px",
        270: "270px",
        172: "170px",
        35: "35px",
        200: "200px",
        160: "160px",
      },

      height: {
        700: "700px",
        500: "500px",
        344: "344px",
        152: "152",
        160: "160px",
        350: "350px",
        250: "250px",
        200: "200px",
      },

      margin: {
        "mb-n4": "margin-bottom: -1rem",
        bottom: "150px",
      },

      padding: {},
    }, // Existing Tailwind utilities
  },
  plugins: [],
};
