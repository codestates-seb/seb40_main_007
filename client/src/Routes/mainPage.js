/*eslint-disable*/
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import axios from "axios";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import CategoryTabs from "../components/MainPage/CategoryTab";
import MainMap from "../components/MainPage/MainMap";
import RelatedTab from "../components/MainPage/TagTab";
import MainHeader from "../components/MainPage/MainHeader";
import WriteModal from "../components/modals/WriteModal";
import PostList from "../components/MainPage/Posts/PostList";
import { mapCenterMoveEvent, mapImgClickEvent } from "../atoms/mapImage";
import { mainPostData, mainPageInfo } from "../atoms/mainPageData";
import {
  mainSortEvent,
  mainSortToEngData,
  selectCategoryEvent,
  selectTagEvent,
} from "../atoms/mainFilter";
import { trainInfo } from "../atoms/trainInfo";
import { accessToken } from "../atoms/loginData";
import { tagsInfoToNumList } from "../atoms/tagsInfo";
import { myTravelListData } from "../atoms/mypage/myTravelData";

const MainPage = () => {
  // 데이터 왔는지 확인 데이터
  const [isPostOk, setIsPostOk] = useState(false);
  // 더미 데이터 통신 될 경우 변경
  const [TOKEN] = useRecoilState(accessToken);
  const { id } = useParams();
  // 필터 && 태그 정보
  const selectCategory = useRecoilValue(selectCategoryEvent);
  const selectTag = useRecoilValue(selectTagEvent);
  const tagsInfoToNum = useRecoilValue(tagsInfoToNumList);
  const mainSort = useRecoilValue(mainSortEvent);
  const mainSortToEng = useRecoilValue(mainSortToEngData);
  const resetSort = useResetRecoilState(mainSortEvent);
  // Main Map Event 관련 정보
  const resetMapImgClickid = useResetRecoilState(mapImgClickEvent);
  const trainStationInfo = useRecoilValue(trainInfo);
  // Main 게시글 데이터
  const [, setPostList] = useRecoilState(mainPostData);
  // Main 인피니티 스크롤 관련 정보
  const [, setPageInfo] = useRecoilState(mainPageInfo);
  const [, setMapCenter] = useRecoilState(mapCenterMoveEvent);
  // MyTravel 데이터
  const [, setMyTravelList] = useRecoilState(myTravelListData);

  // 메인페이지 데이터 통신
  useEffect(() => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    const URL =
      tagsInfoToNum[selectTag] !== 0
        ? `${process.env.REACT_APP_URL}/${id}/${selectCategory}/${mainSortToEng[mainSort]}/search/?page=1&size=12&tag=${tagsInfoToNum[selectTag]}`
        : `${process.env.REACT_APP_URL}/${id}/${selectCategory}/${mainSortToEng[mainSort]}/?page=1&size=12`;
    if (TOKEN === "") {
      axios
        .get(URL)
        .then(function (response) {
          //handle success
          console.log("메인페이지", response);
          setPostList(response.data.items);
          setPageInfo(response.data.pageInfo);
          setMapCenter([trainStationInfo[id - 1].position]);
          resetMapImgClickid();
          // 데이터 도착 확인
          setIsPostOk(true);
        })
        .catch(function (error) {
          //handle error
          console.log(error);
        });
    } else {
      axios
        .get(URL, config)
        .then(function (response) {
          //handle success
          console.log("메인페이지", response);
          setPostList(response.data.items);
          setPageInfo(response.data.pageInfo);
          setMapCenter([trainStationInfo[id - 1].position]);
          resetMapImgClickid();
          // 데이터 도착 확인
          setIsPostOk(true);
        })
        .catch(function (error) {
          //handle error
          console.log(error);
        });
    }
  }, [id, selectCategory, selectTag, mainSort]);

  // 필터(최신,거리,추천) 초기화
  useEffect(() => {
    resetSort();
  }, [id, selectCategory, selectTag]);

  // 지도에서 게시글 정보 보이는 기능 초기화
  const [, setMapImgClickId] = useRecoilState(mapImgClickEvent);
  useEffect(() => {
    setMapImgClickId(null);
    const config = {
      headers: { Authorization: TOKEN },
    };
    const URL = `${process.env.REACT_APP_URL}/planners`;
    TOKEN !== ""
      ? axios
          .get(URL, config)
          .then((response) => {
            console.log("GET TravelList :", response.data);
            setMyTravelList(response.data.items);
          })
          .catch((error) => {
            console.log("GET TravelList Fail :", error);
          })
      : null;
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
            <PostList stationId={id} isPostOk={isPostOk} />
          </div>
        </div>
      </div>
      {TOKEN === "" ? null : <WriteModal />}
    </>
  );
};

export default MainPage;
