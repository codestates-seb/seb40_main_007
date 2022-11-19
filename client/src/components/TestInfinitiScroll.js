import Item from "./mycomment/MyCommentItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import Loading from "./Loading";
const obj = {
  title: "돼지 국밥",
  imgUrl:
    "https://d12zq4w4guyljn.cloudfront.net/20220215014519053_photo_79460f6e0b30.jpg",
  content:
    "부추 국밥입니다. 근데 이제 돼지를 곁들인 부추 국밥입니다. 근데 이제 돼지를 곁들인부추 국밥입니다.  부추 국밥입니다. 근데 이제 돼지를 곁들인부추 국밥입니다. 부추 국밥입니다. 근데 이제 돼지를 곁들인부추 국밥입니다. 부추 국밥입니다. 근데 이제 돼지를 곁들인부추 국밥입니다. ",
};
const TestInfinitiScroll = () => {
  const dummy = { items: Array(20).fill(obj), hasMore: true };
  const [state, setState] = useState(dummy);

  // 스크롤 바닥에 도달시 동작하는 함수
  const fetchMoreData = () => {
    // 마지막 데이터 불러왔을 경우 종료 함수
    if (state.items.length >= 100) {
      setState({
        items: state.items,
        hasMore: false,
      });
      return;
    }

    // 데이터를 추가로 불러오는 함수
    setTimeout(() => {
      setState({
        items: state.items.concat(dummy.items),
        hasMore: true,
      });
    }, 500);
  };

  /*
    무한 스크롤 기능정리
    next : 바닥 도달시 다음 페이지 호출 함수
    hasMore : 다음 내용 불러올지 결정함. true: 불러온다, false: 무한스크롤 정지
    loader : 바닥 도달시 로딩 기능         
  */
  return (
    <div className="pt-5 flex justify-center">
      <InfiniteScroll
        dataLength={state.items.length}
        next={fetchMoreData}
        hasMore={state.hasMore}
        loader={
          <div className="w-full flex justify-center">
            <Loading />
          </div>
        }
        endMessage={<div>끝</div>}
      >
        <div className="grid grid-cols-1 max-w-max m-3 gap-2 sm:grid-cols-2 sm:gap-5">
          {state.items.map((el, idx) => (
            <div className="border-2" key={idx}>
              <Item imgUrl={el.imgUrl} title={el.title} content={el.content} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default TestInfinitiScroll;
