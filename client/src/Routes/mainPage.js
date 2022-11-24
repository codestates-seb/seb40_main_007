/*eslint-disable*/
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";

import Header from "../components/Header";
import CategoryTabs from "../components/MainPage/CategoryTab";
import MainMap from "../components/MainPage/MainMap";
import RelatedTab from "../components/MainPage/RelatedTab";
import MainHeader from "../components/MainPage/MainHeader";
import WriteModal from "../components/modals/WriteModal";
import { mapImgClickEvent } from "../atoms/mapImage";
import { mainPostData, mainPageInfo } from "../atoms/mainPageData";
import { useParams } from "react-router-dom";
import { accessToken } from "../atoms/loginTest";

// 테스트용 입니다. 테스트 완료하면 합칠예정..!
// import PostList from "../components/MainPage/Posts/PostList";
// import DummyPostList from "../components/MainPage/Posts/dummyPostList";
import TestPostList from "../components/MainPage/Posts/TestPostList";

const MainPage = () => {
  // 더미 데이터 통신 될 경우 변경
  const [TOKEN] = useRecoilState(accessToken);
  const { id } = useParams();
  // Main 게시글 데이터
  const [, setPostList] = useRecoilState(mainPostData);
  // Main 인피니티 스크롤 관련 정보
  const [, setPageInfo] = useRecoilState(mainPageInfo);

  // 메인페이지 데이터 통신
  useEffect(() => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .get(`${process.env.REACT_APP_URL}/${id}/1/default/?page=1&size=12`, {
        config,
      })
      .then(function (response) {
        //handle success
        console.log("메인 페이지 게시글", response.data.pageInfo);
        setPostList(response.data.items);
        setPageInfo(response.data.pageInfo);
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
              <MainMap stationId={id} />
            </div>
          </div>
          <div>
            <CategoryTabs />
            <RelatedTab />
            <TestPostList />
          </div>
        </div>
      </div>
      <WriteModal />
    </>
  );
};

export default MainPage;
