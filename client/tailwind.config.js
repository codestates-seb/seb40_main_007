/* eslint-env node */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // 커스텀 박스쉐도우
      boxShadow: {
        all: "0px 0px 5px 4px rgba(0, 0, 0, 0.3)",
      },
      // 명령어: animate-waving
      // 기능: 아래위로 흔들리는 움직임
      // rotate : 회전
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
        // 명령어: animate-moving
        // 기능: 좌우 흔들림
        // translateX : 좌우
        // translateY : 상하
        moveTrain: {
          "0%": { transform: "translateX(0%)" },
          "5%": { transform: "translateX(-5%)" },
          "10%": { transform: "translateX(-7.5%)" },
          "15%": { transform: "translateX(-10%)" },
          "20%": { transform: "translateX(-7.5%)" },
          "25%": { transform: "translateX(-5%)" },
          "30%": { transform: "translateX(-2.5%)" },
          "35%": { transform: "translateX(0%)" },
          "40%": { transform: "translateX(2.5%)" },
          "45%": { transform: "translateX(5%)" },
          "50%": { transform: "translateX(7.5%)" },
          "60%": { transform: "translateX(10%)" },
          "70%": { transform: "translateX(12.5%)" },
          "80%": { transform: "translateX(10%)" },
          "90%": { transform: "translateX(7.5%)" },
          "100%": { transform: "translateX(4%)" },
        },
        smallBounce: {
          "0%": { transform: "translateY(3%)" },
          "50%": { transform: "translateY(5%)" },
          "100%": { transform: "translateY(3%)" },
        },
        bigBounce: {
          "0%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        goTrain: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        bgMove: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-72%)" },
        },
        oneBounce: {
          "0%": {
            transform: "rotate(8deg) scalex(1.2) scaley(1.2)",
          },
          "25%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(-8deg)",
          },
          "75%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(8deg)",
          },
        },
        moveUp: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        moveDown: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
      },

      animation: {
        waving: "wave 0.05s linear 3",
        moving: "moveTrain 1s linear infinite",
        goTrain: "goTrain 10s linear infinite",
        smallBounce: "smallBounce 1s linear infinite",
        bigBounce: "bigBounce 1s linear infinite",
        bgMove: "bgMove 5s linear infinite",
        oneBounce: "oneBounce .2s linear 3",
        moveUp: "moveUp .2s linear 1",
        moveDown: "moveDown .2s linear 1",
      },
    },
  },
  plugins: [
    // 명령어: scrollbar-hide
    // 기능 : 스크롤 바 숨김
    require("tailwind-scrollbar-hide"),
  ],
};
