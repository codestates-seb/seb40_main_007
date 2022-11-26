/*eslint-disable*/
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { accessToken } from "../atoms/loginTest";

export default function Heart({ boardId, heartState }) {
  const TOKEN = useRecoilValue(accessToken);
  const [bounce, setBounce] = useState(false);
  const [isCheck, setIsCheck] = useState(heartState ? true : false);

  const wishCountHandler = () => {
    setIsCheck(!isCheck);
    !isCheck ? setBounce(true) : setBounce(false);

    const config = {
      headers: { Authorization: TOKEN },
    };
    const data = {};
    axios
      .post(`${process.env.REACT_APP_URL}/boards/${boardId}/dibs`, data, config)
      .then(function () {
        // console.log("응답 도착", response.data);
      })
      .catch(function (error) {
        //handle error
        console.log(error);
      });
  };

  // console.log(wishCount);
  //콘솔 찍으면 0인지 1인지 나옵니다 0은 빈하트 1은 채워진 하트
  return (
    <div className={`${bounce ? "animate-oneBounce" : ""}`}>
      {isCheck ? (
        <AiFillHeart
          size={30}
          className="text-[#EC1258] cursor-pointer active:scale-90"
          onClick={wishCountHandler}
          // onMouseUp={() => setBounce(true)}
        />
      ) : (
        <AiOutlineHeart
          size={30}
          className={`text-[#EC1258] cursor-pointer active:scale-90`}
          onClick={wishCountHandler}
        />
      )}
    </div>
  );
}
// 나중에 기능 구현 한다면..
// fetch("8080", {
//   method: "POST".
//   body: JSON.stringify({
//    게시글 id를 보내야 하지 않을까?
//   }
