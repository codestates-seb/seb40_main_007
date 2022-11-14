/* eslint-env node */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(6deg)" },
          "20%": { transform: "rotate(-2deg)" },
          "30%": { transform: "rotate(6deg)" },
          "40%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(4.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        waving: "wave 0.05s linear 3",
      },
    },
  },
  plugins: [],
};
