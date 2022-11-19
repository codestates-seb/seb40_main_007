const timeFunc = (time) => {
  const result = Math.ceil(time / 60);
  return `약 ${result}분 거리`;
};

export default timeFunc;
