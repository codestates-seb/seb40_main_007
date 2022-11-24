import { useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";

import InfiniteScroll from "react-infinite-scroll-component";
import { mainPageInfo, mainPostData } from "../../../atoms/mainPageData";
import Loading from "../../Loading";
import { accessToken } from "../../../atoms/loginTest";
import Post from "./Post";
import SortDropdown from "./SortDropdown";

function TestPostList({ stationId }) {
  const [TOKEN] = useRecoilState(accessToken);
  const [postList, setPostList] = useRecoilState(mainPostData);
  const [hasMore, setHasMore] = useState(true);

  const pageInfo = useRecoilValue(mainPageInfo);
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
    axios
      .get(
        `${process.env.REACT_APP_URL}/${stationId}/1/default/?page=${pageCnt}&size=12`,
        {
          config,
        }
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
  };
  return (
    <>
      <div className="flex justify-end mr-4">
        <SortDropdown />
      </div>
      <div className="mx-auto px-4">
        <InfiniteScroll
          className="scrollbar-hide"
          // dataLength : 현재데이터의 길이
          dataLength={postList.length}
          next={fetchMoreData}
          // 저장된 데이터의 총 길이를 알면 그걸로 false 조건 줄 수 있음.
          hasMore={hasMore}
          height={600}
          loader={
            <div className="w-full flex justify-center">
              <Loading />
            </div>
          }
        >
          <div className="p-2 grid grid-cols-3 gap-x-4">
            {postList.map((post) => (
              <Post key={post.boardId} data={post} />
            ))}
          </div>
        </InfiniteScroll>
        {/* {pageStack.items.length >= 12 ? (
          <InfiniteScroll
            className="scrollbar-hide"
            // dataLength : 현재데이터의 길이
            dataLength={pageStack.items.length}
            next={fetchMoreData}
            hasMore={pageStack.hasMore}
            height={600}
            loader={
              <div className="w-full flex justify-center">
                <Loading />
              </div>
            }
          >
            <div className="p-2 grid grid-cols-3 gap-x-4">
              {postList.map((post) => (
                <Post key={post.boardId} data={post} />
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          <div className="p-2 grid grid-cols-3 gap-x-4">
            {postList.map((post) => (
              <Post key={post.boardId} data={post} />
            ))}
          </div>
        )} */}
      </div>
    </>
  );
}

export default TestPostList;
