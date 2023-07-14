/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
