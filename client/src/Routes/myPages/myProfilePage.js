/*eslint-disable*/
import InfoEditBtn from "../../components/myprofile/infoeditbtn/InfoEditBtn";
import MyStation from "../../components/myprofile/mystation/MyStation";
import MyInfo from "../../components/myprofile/myinfo/MyInfo";
import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import MyEmail from "../../components/myprofile/myinfo/MyEmail";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  accessToken,
  userName,
  userAvatar,
  userEmail,
} from "../../atoms/loginTest";
import { useRecoilValue } from "recoil";

const MyProfilePage = () => {
  const name = useRecoilValue(userName);
  const avatar = useRecoilValue(userAvatar);
  const email = useRecoilValue(userEmail);
  const [totalBoard, setTotalBoard] = useState("");
  const [totalComment, setTotalComment] = useState("");
  const [score, setScore] = useState("");
  const [visit, setVisit] = useState([]);
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
        setVisit(response.data.visitedStations);
      })
      .catch((error) => {
        if (error.response.status === 401) console.log("401!!!");
      });
  }, []);

  return (
    <>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내역이요"} />
        <div className="lg:w-full lg:max-w-xl flex justify-center items-center flex-col">
          <div id="my__EditBtn" className="w-full flex justify-end">
            <InfoEditBtn />
          </div>
          <MyInfo
            nickName={name}
            userAvatar={avatar}
            totalBoard={totalBoard}
            totalComment={totalComment}
            score={score}
          />
          <MyEmail email={email} />
          <MyStation visit={visit} />
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
