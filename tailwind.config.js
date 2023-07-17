/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          black: "#0D1B2A",
          blue: {
            light: "#778DA9",
            DEFAULT: "#415A77",
            dark: "#1B263B",
          },
          white: "#E0E1DD",
        },
      },
      keyframes: {
        runningText: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        featureDetailIn: {},
      },
      animation: {
        runningText: "runningText 2s linear infinite",
        runningImage: "runningText 3s linear infinite",
      },
    },
  },
  plugins: [],
};
