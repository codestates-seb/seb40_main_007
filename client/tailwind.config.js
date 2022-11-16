/* eslint-env node */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // 명령어: animate-waving
      // 기능: 흔들리는 움직임
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(6deg)" },
          "20%": { transform: "rotate(-6deg)" },
          "30%": { transform: "rotate(6deg)" },
          "40%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(4deg)" },
          "60%": { transform: "rotate(-1deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        waving: "wave 0.05s linear 3",
      },
    },
  },
  plugins: [
    // 명령어: scrollbar-hide
    // 기능 : 스크롤 바 숨김
    require("tailwind-scrollbar-hide"),
  ],
};
