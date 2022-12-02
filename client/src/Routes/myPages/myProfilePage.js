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
} from "../../atoms/loginData";
import { useRecoilValue } from "recoil";
import { RiKakaoTalkFill, RiKakaoTalkLine } from "react-icons/ri";

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
          <div className="w-full lg:p-2 mb-4">
            <p className="w-fit mb-5 lg:text-base text-sm lg:ml-2 lg:px-3 px-2 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
              HELP-DESK
            </p>
            <div className="mb-3 lg:text-base text-xs text-gray-400">
              <RiKakaoTalkFill className="inline mr-1 lg:w-6 lg:h-6 w-4 h-4 ml-2 text-[rgb(83,199,240)]" />
              <a href=" https://github.com/codestates-seb/seb40_main_007">
                yeogiyo kakao Channel
              </a>
            </div>
            <div className="lg:text-base text-xs text-gray-400">
              <RiKakaoTalkLine className="inline mr-1 lg:w-6 lg:h-6 w-4 h-4 ml-2 text-[rgb(83,199,240)]" />
              <a href="https://topaz-land-b32.notion.site/3ff18439ae114b828c2c5ff482f18506">
                yeogiyo 오류/및 문의사항
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
