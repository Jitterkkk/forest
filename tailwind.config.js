/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
      },
    },
    extend: {
      keyframes: {
        slideIn: {
          '0%': {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          '100%': {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        ["slideIn"]: "slideIn .4s ease-in-out forwards",
        ["fadeIn"]: "fadeIn .4s ease-in-out forwards",
      },
      colors: {
        verde: {
          200: "#ACEF75",
          300: "#91EE77",
          400: "#17E880",
          700: "#2E482C",
          800: "#16281F",
          900: "#0F1C15",
          950: "#030504",
        },
      },
    },
  },
  plugins: [],
};
