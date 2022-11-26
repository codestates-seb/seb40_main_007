import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import MyPostTab from "../../components/mypost/MyPostTab";
import { useState, useEffect } from "react";
import { mapImgClickEvent } from "../../atoms/mapImage";
import { useRecoilState, useResetRecoilState } from "recoil";

import TrainStationModal from "../../components/modals/TrainStationModal";
import { accessToken } from "../../atoms/loginTest";
import axios from "axios";
import { myPostData } from "../../atoms/mypage/myPostData";
import MyPostList from "../../components/mypost/MyPostList";
import MyPostMap from "../../components/mypost/MyPostMap";
// import Loading from "../../components/Loading";

const MyPostPage = () => {
  const [tabValue, setTabValue] = useState("작성한게시글");
  const [TOKEN] = useRecoilState(accessToken);
  const [, setMyPost] = useRecoilState(myPostData);
  const resetMyPost = useResetRecoilState(myPostData);

  // 더미 데이터 통신 될 경우 변경
  useEffect(() => {
    resetMyPost();
    // 리스트 바뀌는 모습 감추는 방향
    const config = {
      headers: { Authorization: TOKEN },
    };
    const URL =
      tabValue === "작성한게시글"
        ? `${process.env.REACT_APP_URL}/members/my-page`
        : `${process.env.REACT_APP_URL}/members/my-page/dibs`;
    // const URL = `${process.env.REACT_APP_URL}/members/my-page`;
    axios
      .get(URL, config)
      .then((response) => {
        console.log("mypost response:", response);
        setMyPost(response.data);
      })
      .catch((error) => {
        console.log("mypost error:", error);
      });
  }, [tabValue]);

  // 지도에서 게시글 정보 보이는 기능 초기화
  const [, setMapImgClickId] = useRecoilState(mapImgClickEvent);
  useEffect(() => {
    setMapImgClickId(null);
  }, [tabValue]);

  return (
    <div className="">
      <Header />
      <div className="mypage-header-tab ">
        <MyPageTab index={"내게시글"} />
        <div className="w-full max-w-2xl flex justify-center scrollbar-hide relative">
          <MyPostTab setTabValue={setTabValue} tabValue={tabValue} />
          <div
            className={
              tabValue === "작성한게시글"
                ? "absolute top-1 right-[-175px]"
                : "absolute right-0 top-[-3px]"
            }
          >
            <TrainStationModal />
          </div>
        </div>
        {tabValue === "작성한게시글" ? (
          <>
            <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-end gap-2 relative ">
              <MyPostMap />
              <MyPostList />
            </div>
          </>
        ) : (
          <div className="w-full  max-w-2xl h-full flex flex-col justify-center">
            <MyPostList />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPostPage;
