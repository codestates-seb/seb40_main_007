import Header from "../components/Header";
import CategoryTabs from "../components/MainPage/CategoryTab";
import MainMap from "../components/MainPage/MainMap";
// import PostList from "../components/MainPage/Posts/PostList";
import RelatedTab from "../components/MainPage/RelatedTab";
import MainHeader from "../components/MainPage/MainHeader";
import WriteModal from "../components/modals/WriteModal";
import TestPostList from "../components/MainPage/Posts/TestPostList";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { mapImgClickEvent } from "../atoms/mapImage";
import { postDummyState } from "../atoms/dummyData";
import { mainPostData } from "../atoms/mainPageData";
import { useParams } from "react-router-dom";
import { accessToken } from "../atoms/loginTest";
import axios from "axios";

const MainPage = () => {
  // 더미 데이터 통신 될 경우 변경
  const [...posts] = useRecoilValue(postDummyState);
  const [TOKEN] = useRecoilState(accessToken);
  const { id } = useParams();
  const [, setPostList] = useRecoilState(mainPostData);
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/${id}/1/default/?page=1&size=9`,
      headers: TOKEN
        ? {
            Authorization: TOKEN,
          }
        : {},
    })
      .then(function (response) {
        //handle success
        console.log("메인 페이지 게시글", response.data.items);
        setPostList(response.data.items);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }, [id]);

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
            <div className="mt-14">
              <MainMap posts={posts} stationId={id} />
            </div>
          </div>
          <div>
            <CategoryTabs />
            <RelatedTab />
            {/* <PostList /> */}
            <TestPostList />
          </div>
        </div>
      </div>
      <WriteModal />
    </>
  );
};

export default MainPage;
