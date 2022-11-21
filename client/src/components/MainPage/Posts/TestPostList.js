/*eslint-disable*/
import Post from "./Post";
import SortDropdown from "./SortDropdown";
import { useRecoilState, useRecoilValue } from "recoil";
import { postDummyState, dummyDataState } from "../../../atoms/dummyData";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../Loading";

function TestPostList() {
  // 더미 데이터 세팅하는 로직 통신 전까지만 사용
  const [...posts] = useRecoilValue(postDummyState);
  const [startNum, setStartNum] = useState(15);
  const [lastNum, setLastNum] = useState(21);
  const dummy = { items: posts.slice(0, 15), hasMore: true };
  const [state, setState] = useState(dummy);
  const [, setDummyData] = useRecoilState(dummyDataState);
  // 스크롤 바닥에 도달시 동작하는 함수
  const fetchMoreData = () => {
    // 마지막 데이터 불러왔을 경우 종료 함수
    if (state.items.length >= posts.length) {
      setState({
        items: state.items,
        hasMore: false,
      });
      return;
    }

    // 데이터를 추가로 불러오는 함수
    setTimeout(() => {
      setStartNum(startNum + 6);
      setLastNum(lastNum + 6);

      setState({
        items: state.items.concat(posts.slice(startNum, lastNum)),
        hasMore: true,
      });
      setDummyData(state.items.concat(posts.slice(startNum, lastNum)));
      console.log(state.items);
    }, 1500);
  };
  return (
    <>
      <div className="flex justify-end mr-4">
        <SortDropdown />
      </div>
      <div className="mx-auto px-4">
        <InfiniteScroll
          className="scrollbar-hide"
          dataLength={state.items.length}
          next={fetchMoreData}
          hasMore={state.hasMore}
          height={600}
          loader={
            <div className="w-full flex justify-center">
              <Loading />
            </div>
          }
        >
          <div className="p-2 grid grid-cols-3 gap-x-4">
            {state.items.map((post) => (
              <Post key={post.boardId} data={post} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default TestPostList;
