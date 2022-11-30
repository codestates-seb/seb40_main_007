// 게시글, 내 여행 계획 이동 시간
export const timeFunc = (time) => {
  let totalTime = {
    min: Math.ceil(time / 60),
    hour: Math.floor(time / 3600),
  };
  if (totalTime.min < 60) {
    return `약 ${totalTime.min}분`;
  } else {
    return `약 ${totalTime.hour}시간 ${totalTime.min - 60 * totalTime.hour}분`;
  }
};

// 디텡리 페이지 시간 조회
export const detailPageTime = (time) => {
  let nowTime = new Date();
  let createdTime = new Date(time);
  let elapsedMsec = nowTime.getTime() - createdTime.getTime();
  let result = "";

  // 경과 시간
  const elsTime = {
    elapsedSec: elapsedMsec / 1000,
    elapsedMin: elapsedMsec / 1000 / 60,
    elapsedHour: elapsedMsec / 1000 / 60 / 60,
    elapsedDay: elapsedMsec / 1000 / 60 / 60 / 24,
  };
  if (elsTime.elapsedDay < 1) {
    if (elsTime.elapsedHour >= 1 && elsTime.elapsedHour < 24) {
      if (Math.floor(elsTime.elapsedHour) === 1) {
        result = Math.floor(elsTime.elapsedHour) + " hour ago";
      } else {
        result = Math.floor(elsTime.elapsedHour) + " hours ago";
      }
    }
  }
  if (elsTime.elapsedHour < 1) {
    if (elsTime.elapsedMin >= 1 && elsTime.elapsedMin < 60) {
      if (Math.floor(elsTime.elapsedMin) === 1) {
        result = Math.floor(elsTime.elapsedMin) + " min ago";
      } else {
        result = Math.floor(elsTime.elapsedMin) + " mins ago";
      }
    }
  }
  if (elsTime.elapsedMin < 1) {
    if (elsTime.elapsedSec >= 0 && elsTime.elapsedSec < 60) {
      if (Math.floor(elsTime.elapsedSec) === 1) {
        result = Math.floor(elsTime.elapsedSec) + " sec ago";
      } else {
        result = Math.floor(elsTime.elapsedSec) + " secs ago";
      }
    }
  }
  if (elsTime.elapsedDay >= 1 && elsTime.elapsedDay < 2) {
    result = Math.floor(elsTime.elapsedDay) + " day ago";
  } else if (elsTime.elapsedDay >= 2 && elsTime.elapsedDay < 3) {
    result = Math.floor(elsTime.elapsedDay) + " days ago";
  } else if (elsTime.elapsedDay >= 3) {
    result = createdTime.toLocaleString("en");
  }

  return result;
};
