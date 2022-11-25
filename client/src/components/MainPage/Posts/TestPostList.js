import { useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";

import InfiniteScroll from "react-infinite-scroll-component";
import {
  mainPageInfo,
  mainPostData,
  selectCategoryEvent,
} from "../../../atoms/mainPageData";
import Loading from "../../Loading";
import { accessToken } from "../../../atoms/loginTest";
import Post from "./Post";
import SortDropdown from "./SortDropdown";
import { Link } from "react-router-dom";

function TestPostList({ stationId }) {
  const [TOKEN] = useRecoilState(accessToken);
  const [postList, setPostList] = useRecoilState(mainPostData);
  const [hasMore, setHasMore] = useState(true);

  const pageInfo = useRecoilValue(mainPageInfo);

  const selectCategory = useRecoilValue(selectCategoryEvent);
  const [pageCnt, setPageCnt] = useState(2);

  // Main Map Data 관련
  console.log("PostList", postList, pageInfo);

  // 스크롤 바닥에 도달시 동작하는 함수
  const fetchMoreData = () => {
    console.log("여긴 어디 왜 안돼나");
    //   // 마지막 데이터 불러왔을 경우 종료 함수
    if (postList.length >= pageInfo.totalElements) {
      setPostList(postList);
      setHasMore(false);
      return;
    }

    // 데이터를 추가로 불러오는 함수
    const config = {
      headers: { Authorization: TOKEN },
    };
    if (TOKEN === "") {
      axios
        .get(
          `${process.env.REACT_APP_URL}/${stationId}/${selectCategory}/default/?page=${pageCnt}&size=12`
        )
        .then(function (response) {
          //handle success
          console.log("인피니티 스크롤 페이지", response);
          setPostList(postList.concat(response.data.items));
          setHasMore(true);
          setPageCnt(pageCnt + 1);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    } else {
      axios
        .get(
          `${process.env.REACT_APP_URL}/${stationId}/${selectCategory}/default/?page=${pageCnt}&size=12`,
          config
        )
        .then(function (response) {
          //handle success
          console.log("인피니티 스크롤 페이지", response);
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
      {postList.length !== 0 ? (
        <div className="mx-auto px-4">
          <InfiniteScroll
            className="scrollbar-hide"
            // dataLength : 현재데이터의 길이
            dataLength={postList.length}
            next={fetchMoreData}
            // 저장된 데이터의 총 길이를 알면 그걸로 false 조건 줄 수 있음.
            hasMore={
              postList.length >= pageInfo.totalElements ? false : hasMore
            }
            height={600}
            loader={
              <div className="w-full flex justify-center">
                <Loading />
              </div>
            }
          >
            <div className="p-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4">
              {postList.map((post) => (
                <Post key={post.boardId} data={post} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      ) : (
        <div className="w-full sm:w-[560px] mb-12 mt-10 sm:mt-20 text-gray-400 text-lg flex flex-col justify-center items-center ">
          <div className="p-5 rounded-2xl font-medium flex flex-col justify-center items-center border-2">
            <h1>게시글이 비었습니다.</h1>
            <p className="text-sm ">게시글을 작성해보세요!</p>

            <Link to={TOKEN === "" ? "/login" : `/post/${stationId}`}>
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
        </div>
      )}
    </>
  );
}

export default TestPostList;
