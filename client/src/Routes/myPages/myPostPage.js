import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import PostList from "../../components/MainPage/Posts/PostList";
import MyPostTab from "../../components/MyPostTab";
import { useState, useEffect } from "react";
// import MainMap from "../components/MainPage/MainMap";
import MainMapTest from "../../components/MainPage/TestMainMap";
import { useRecoilState } from "recoil";
import { mapImgClickEvent } from "../../atoms/mapImage";
import TrainStationModal from "../../components/modals/TrainStationModal";

const MyPostPage = () => {
  const [index, setIndex] = useState("작성한게시글");

  // 지도에서 게시글 정보 보이는 기능 초기화
  const [, setMapImgClickId] = useRecoilState(mapImgClickEvent);
  useEffect(() => {
    setMapImgClickId(null);
  }, []);

  return (
    <div className="">
      <Header />
      <div className="mypage-header-tab ">
        <MyPageTab index={"내게시글"} />

        <div className="w-full max-w-2xl flex justify-center scrollbar-hide relative">
          <MyPostTab setIndex={setIndex} index={index} />
          <div
            className={
              index === "작성한게시글"
                ? "absolute top-1 right-[-175px]"
                : "absolute right-0 top-[-3px]"
            }
          >
            <TrainStationModal />
          </div>
        </div>
        {index === "작성한게시글" ? (
          <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-end gap-2 relative">
            <MainMapTest />
            <PostList />
          </div>
        ) : (
          <div className="w-full  max-w-2xl h-full flex flex-col justify-center">
            {/* <MainMap /> */}
            <PostList />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPostPage;
