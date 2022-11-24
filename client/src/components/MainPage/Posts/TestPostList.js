/*eslint-disable*/
import Post from "./Post";
import SortDropdown from "./SortDropdown";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRecoilState, useRecoilValue } from "recoil";
import { postDummyState, dummyDataState } from "../../../atoms/dummyData";
import { mainPageInfo, mainPostData } from "../../../atoms/mainPageData";
import Loading from "../../Loading";

function TestPostList() {
  // 더미 데이터 세팅하는 로직 통신 전까지만 사용
  const [...posts] = useRecoilValue(postDummyState);
  const [startNum, setStartNum] = useState(15);
  const [lastNum, setLastNum] = useState(21);
  const postList = useRecoilValue(mainPostData);
  const pageInfo = useRecoilValue(mainPageInfo);

  const initList = { items: postList.slice(0, 12), hasMore: true };
  const [state, setState] = useState({ items: postList, hasMore: true });
  const [, setDummyData] = useRecoilState(dummyDataState);

  // Main Map Data 관련
  console.log("PostList", postList);
  console.log("InitList", initList);

  // 스크롤 바닥에 도달시 동작하는 함수
  const fetchMoreData = () => {
    //   // 마지막 데이터 불러왔을 경우 종료 함수
    if (state.items.length >= pageInfo.totalElements) {
      setState({
        items: state.items,
        hasMore: false,
      });
      return;
    }

    //   // 데이터를 추가로 불러오는 함수
    //   setTimeout(() => {
    //     setStartNum(startNum + 6);
    //     setLastNum(lastNum + 6);

    //     setState({
    //       items: state.items.concat(posts.slice(startNum, lastNum)),
    //       hasMore: true,
    //     });
    //     setDummyData(state.items.concat(posts.slice(startNum, lastNum)));
    //     console.log(state.items);
    //   }, 1500);

    // 통신해서 불러오는 방법으로 변경해야함
    // axios({
    //   method: "get",
    //   url: `${process.env.REACT_APP_URL}/${id}/1/default/?page=3&size=6`,
    //   headers: TOKEN
    //     ? {
    //         Authorization: TOKEN,
    //       }
    //     : {},
    // })
    //   .then(function (response) {
    //     //handle success
    //     console.log("메인 페이지 게시글", response.data.items);
    //     setPostList(response.data.items);
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response);
    //   });
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
          dataLength={state.items.length}
          next={fetchMoreData}
          // 저장된 데이터의 총 길이를 알면 그걸로 false 조건 줄 수 있음.
          hasMore={state.items.length < pageInfo.size ? false : state.hasMore}
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
        {/* {state.items.length >= 12 ? (
          <InfiniteScroll
            className="scrollbar-hide"
            // dataLength : 현재데이터의 길이
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

// function TestPostList() {
//   // 더미 데이터 세팅하는 로직 통신 전까지만 사용
//   const [...posts] = useRecoilValue(postDummyState);
//   const [startNum, setStartNum] = useState(15);
//   const [lastNum, setLastNum] = useState(21);
//   const dummy = { items: posts.slice(0, 15), hasMore: true };
//   const [state, setState] = useState(dummy);
//   const [, setDummyData] = useRecoilState(dummyDataState);

//   // Main Map Data 관련
//   const postList = useRecoilValue(mainPostData);
//   console.log("PostList", postList);

//   // 스크롤 바닥에 도달시 동작하는 함수
//   const fetchMoreData = () => {
//     // 마지막 데이터 불러왔을 경우 종료 함수
//     if (state.items.length >= posts.length) {
//       setState({
//         items: state.items,
//         hasMore: false,
//       });
//       return;
//     }

//     // 데이터를 추가로 불러오는 함수
//     setTimeout(() => {
//       setStartNum(startNum + 6);
//       setLastNum(lastNum + 6);

//       setState({
//         items: state.items.concat(posts.slice(startNum, lastNum)),
//         hasMore: true,
//       });
//       setDummyData(state.items.concat(posts.slice(startNum, lastNum)));
//       console.log(state.items);
//     }, 1500);
//   };
//   return (
//     <>
//       <div className="flex justify-end mr-4">
//         <SortDropdown />
//       </div>
//       <div className="mx-auto px-4">
//         <InfiniteScroll
//           className="scrollbar-hide"
//           dataLength={state.items.length}
//           next={fetchMoreData}
//           hasMore={state.hasMore}
//           height={600}
//           loader={
//             <div className="w-full flex justify-center">
//               <Loading />
//             </div>
//           }
//         >
//           <div className="p-2 grid grid-cols-3 gap-x-4">
//             {state.items.map((post) => (
//               <Post key={post.boardId} data={post} />
//             ))}
//           </div>
//         </InfiniteScroll>
//       </div>
//     </>
//   );
// }

export default TestPostList;
