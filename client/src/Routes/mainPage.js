import Header from "../components/Header";
import CategoryTabs from "../components/MainPage/CategoryTab";
// import MainMap from "../components/MainPage/MainMap";
// import PostList from "../components/MainPage/Posts/PostList";
import RelatedTab from "../components/MainPage/RelatedTab";
import MainHeader from "../components/MainPage/MainHeader";
import WriteModal from "../components/modals/WriteModal";
import MainMapTest from "../components/MainPage/TestMainMap";
import TestPostList from "../components/MainPage/Posts/TestPostList";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { mapImgClickEvent } from "../atoms/mapImage";
import { postDummyState } from "../atoms/dummyData";

const MainPage = () => {
  // 더미 데이터 통신 될 경우 변경
  const [...posts] = useRecoilValue(postDummyState);

  // 지도에서 게시글 정보 보이는 기능 초기화
  const [, setMapImgClickId] = useRecoilState(mapImgClickEvent);
  useEffect(() => {
    setMapImgClickId(null);
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center lg:w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <MainHeader />
            {/* <MainMap /> */}
            <div className="mt-14">
              <MainMapTest posts={posts} />
            </div>
          </div>
          <div>
            <CategoryTabs />
            <RelatedTab />
            {/* <PostList /> */}
            <TestPostList></TestPostList>
          </div>
        </div>
      </div>
      <WriteModal />
    </>
  );
};

export default MainPage;
