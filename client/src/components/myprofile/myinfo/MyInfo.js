import axios from "axios";
import { useEffect, useState } from "react";
import { accessToken } from "../../../atoms/loginTest";
import { useRecoilValue } from "recoil";
const MyInfo = ({ nickName, userAvatar }) => {
  const [totalBoard, setTotalBoard] = useState("");
  const [totalComment, setTotalComment] = useState("");
  const [score, setScore] = useState("");
  const TOKEN = useRecoilValue(accessToken);
  useEffect(() => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .get(`${process.env.REACT_APP_URL}/members/info`, config)
      .then((response) => {
        setTotalBoard(response.data.totalBoard);
        setTotalComment(response.data.totalComment);
        setScore(response.data.score);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full p-2 mb-4 flex flex-row items-center justify-evenly">
      {/* nickName */}
      <div className="w-2/6 pl-8 flex flex-col align-middle ">
        <p className="text-sm text-gray-400">반가워요 !</p>
        <p className="-mt-1 text-lg text-[rgb(83,199,240)]">{nickName}</p>
      </div>

      {/* 프로필 이미지 */}
      <img
        className="w-28 h-28 rounded-full p-0 m-0 static"
        alt="ProfileImg"
        src={userAvatar}
      />

      {/* 게시글,댓글,추천 */}
      <div className="w-2/6 flex justify-between text-xs text-[rgb(83,199,240)]">
        <div className="flex flex-col items-center">
          <p>{totalBoard}</p>
          <p>게시글</p>
        </div>
        <div className="flex flex-col items-center">
          <p>{totalComment}</p>
          <p>댓글</p>
        </div>
        <div className="flex flex-col items-center">
          <p>{score}</p>
          <p>추천</p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
