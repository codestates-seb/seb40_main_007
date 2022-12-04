// 테일윈드 호버로 만드는 함수
/* 
 사용방법 ex)
  const hoverStr = "scale-110 rounded-lg shadow-all shadow-[rgb(83,199,240)]";
  const buttonHover = makeHover(hoverStr);
  console.log(buttonHover)
  출력값 : hover:scale-110 hover:rounded-lg hover:shadow-all hover:shadow-[rgb(83,199,240)] 
*/
export const makeHover = (tailwindStr) => {
  if (typeof tailwindStr !== "string") {
    return console.log("makeHover error: 문자열만 넣어주세요");
  }
  const arr = tailwindStr.split(" ");
  const result = arr.reduce((acc, cur) => acc + `hover:${cur} `, "");
  return result;
};

// 테일윈드 액티브로 만드는 함수
/* 
 사용방법 ex)
  const activeStr = "scale-95 rounded-lg shadow-all";
  const buttonActive = makeActive(activeStr);
  console.log(buttonActive)
  출력값 : active:scale-95 active:rounded-lg active:shadow-all  
*/
export const makeActive = (tailwindStr) => {
  if (typeof tailwindStr !== "string") {
    return console.log("makeActive error: 문자열만 넣어주세요");
  }
  const arr = tailwindStr.split(" ");
  const result = arr.reduce((acc, cur) => acc + `active:${cur} `, "");
  return result;
};
