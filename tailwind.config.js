/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      spacing: {
        big: "46rem",
      },
    },

    fontFamily: {
      mons: ["Montserrat", "sans-serif"],
    },
  },

  plugins: [],
};
