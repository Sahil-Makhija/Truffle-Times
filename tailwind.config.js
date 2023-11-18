/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "998px",
    },
    extend: {
      colors: {
        secondary: {
          DEFAULT: "rgb(255, 249, 237)",
        },
        "text-hover": "#eedb99",
      },
      fontFamily: {
        mango: ["Mango", "Helvetica", "Arial", "Lucida", "sans-serif"],
        "mango-small": ["Mango", "Helvetica", "Arial", "Lucida", "sans-serif"],
        basic: ["Montserrat", "sans-serif"],
      },
      flex: {
        center: "",
      },
      animation: {
        slideRight: "slideInView 800ms ease-in",
        slideRightOut: "slideOutView 500ms ease-in-out",
      },
      keyframes: {
        slideInView: {
          from: { opacity: 0, transform: "translateX(-100%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideOutView: {
          "0%": { opacity: 0, transform: "translateX(0%)" },
          "70%": { opacity: 1, transform: "translateX(130%)" },
        },
      },
    },
    plugins: [],
  },
};
