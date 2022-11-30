import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";

import InfiniteScroll from "react-infinite-scroll-component";
import { mainPageInfo, mainPostData } from "../../../atoms/mainPageData";
import {
  mainSortEvent,
  mainSortToEngData,
  selectCategoryEvent,
  selectTagEvent,
} from "../../../atoms/mainFilter";

import Loading from "../../Loading";
import { accessToken } from "../../../atoms/loginTest";
import Post from "./Post";
import SortDropdown from "./SortDropdown";
import { Link } from "react-router-dom";
import { tagsInfoToNumList } from "../../../atoms/tagsInfo";

function PostList({ stationId, isPostOk }) {
  const [TOKEN] = useRecoilState(accessToken);
  const [postList, setPostList] = useRecoilState(mainPostData);
  const [hasMore, setHasMore] = useState(true);

  const pageInfo = useRecoilValue(mainPageInfo);
  // 필터 && 태그 정보
  const selectCategory = useRecoilValue(selectCategoryEvent);
  const selectTag = useRecoilValue(selectTagEvent);
  const tagsInfoToNum = useRecoilValue(tagsInfoToNumList);
  const mainSort = useRecoilValue(mainSortEvent);
  const mainSortToEng = useRecoilValue(mainSortToEngData);
  const [pageCnt, setPageCnt] = useState(2);

  useEffect(() => {
    setPageCnt(2);
  }, [selectTag, selectCategory, mainSort]);

  // 스크롤 바닥에 도달시 동작하는 함수
  const fetchMoreData = () => {
    // 마지막 데이터 불러왔을 경우 종료 함수
    if (postList.length >= pageInfo.totalElements) {
      setPostList(postList);
      setHasMore(false);
      return;
    }
    // 데이터를 추가로 불러오는 함수
    const config = {
      headers: { Authorization: TOKEN },
    };
    const URL =
      tagsInfoToNum[selectTag] !== 0
        ? `${process.env.REACT_APP_URL}/${stationId}/${selectCategory}/${mainSortToEng[mainSort]}/search/?page=${pageCnt}&size=12&tag=${tagsInfoToNum[selectTag]}`
        : `${process.env.REACT_APP_URL}/${stationId}/${selectCategory}/${mainSortToEng[mainSort]}/?page=${pageCnt}&size=12`;
    if (TOKEN === "") {
      axios
        .get(URL)
        .then(function (response) {
          // console.log("인피니티 스크롤 페이지", response);
          setPostList(postList.concat(response.data.items));
          setHasMore(true);
          setPageCnt(pageCnt + 1);
        })
        .catch(function (response) {
          console.log(response);
        });
    } else {
      axios
        .get(URL, config)
        .then(function (response) {
          // console.log("인피니티 스크롤 페이지", response);
          setPostList(postList.concat(response.data.items));
          setHasMore(true);
          setPageCnt(pageCnt + 1);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  };
  return (
    <>
      <div className="flex justify-end mr-4">
        <SortDropdown />
      </div>
      {postList?.length !== 0 ? (
        <div className="mx-auto px-4 ">
          <InfiniteScroll
            className={`border-t-2 mt-2 border-[rgb(83,199,240)] ${
              postList?.length <= 6 ? "mr-[14px]" : ""
            }`} // scrollbar-hide => 스크롤 숨김옵션
            // dataLength : 현재데이터의 길이
            dataLength={postList.length}
            next={fetchMoreData}
            // 저장된 데이터의 총 길이를 알면 그걸로 false 조건 줄 수 있음.
            hasMore={
              postList?.length >= pageInfo?.totalElements ? false : hasMore
            }
            height={600}
            loader={
              <div className="w-full flex justify-center">
                <Loading />
              </div>
            }
          >
            <div className="p-2 pt-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4">
              {postList.map((post) => (
                <Post key={post.boardId} data={post} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      ) : (
        <div className="w-full sm:w-[560px] mb-12 mt-10 sm:mt-20 text-gray-400 text-lg flex flex-col justify-center items-center mr-[14px]">
          {isPostOk ? (
            <div className="p-5 rounded-2xl font-medium flex flex-col justify-center items-center border-2 ">
              <h1>게시글이 비었습니다.</h1>
              <p className="text-sm ">게시글을 작성해보세요!</p>
              <Link to={TOKEN === "" ? "/initial" : `/post/${stationId}`}>
                <div className="bg-[rgb(83,199,240)] hover:bg-[rgba(83,199,240,0.8)] active:scale-90 mt-4 p-2 rounded-2xl w-[170px] border-2 flex flex-col justify-center items-center">
                  {TOKEN === "" ? (
                    <div className="text-center">
                      <p className="text-xs text-red-500 font-medium">
                        * 로그인이 필요합니다!
                      </p>
                      <p className="text-white font-medium">로그인 하기</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-white font-medium">게시글 작성하기</p>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

export default PostList;
