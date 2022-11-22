import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import MyCommentList from "../../components/mycomment/MyCommentList";
// import TestInfinitiScroll from "../../components/TestInfinitiScroll";
import MyCommentPagination from "../../components/mycomment/MyCommentPagination";
import { useState } from "react";

const obj = {
  title: "돼지 국밥",
  imgUrl:
    "https://d12zq4w4guyljn.cloudfront.net/20220215014519053_photo_79460f6e0b30.jpg",
  content:
    "부추 국밥입니다. 근데 이제 돼지를 곁들인 부추 국밥입니다. 근데 이제 돼지를 곁들인부추 국밥입니다.  부추 국밥입니다. 근데 이제 돼지를 곁들인부추 국밥입니다. 부추 국밥입니다. 근데 이제 돼지를 곁들인부추 국밥입니다. 부추 국밥입니다. 근데 이제 돼지를 곁들인부추 국밥입니다. ",
};
const dummy = Array(95).fill(obj);

const MyCommentPage = () => {
  const [page, setPage] = useState(1);

  //나중에 사용할 URL 형식
  // let url = `${process.env.REACT_APP_URL}/questions?page=${page}&size=${15}`;
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내댓글"} />
        <div className="w-full max-w-2xl">
          {/* <TestInfinitiScroll /> */}
          <MyCommentList
            data={dummy.slice((page - 1) * 10, page * 10)}
            page={page}
          />
          <MyCommentPagination
            postsCnt={dummy.length}
            page={page}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MyCommentPage;
