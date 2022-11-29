import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import MyCommentList from "../../components/mycomment/MyCommentList";
// import TestInfinitiScroll from "../../components/TestInfinitiScroll";
import MyCommentPagination from "../../components/mycomment/MyCommentPagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { accessToken } from "../../atoms/loginTest";
import { useRecoilState } from "recoil";

const MyCommentPage = () => {
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState();
  const [data, setData] = useState([]);

  const [TOKEN] = useRecoilState(accessToken);
  console.log(pageInfo, data);

  //나중에 사용할 URL 형식
  useEffect(() => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    // const URL = `${process.env.REACT_APP_URL}//members/my-page/comments`;
    const URL = `${process.env.REACT_APP_URL}/members/my-page/comments?page=${page}&size=10`;
    axios
      .get(URL, config)
      .then((response) => {
        setData(response.data.items);
        setPageInfo(response.data.pageInfo);
      })
      .catch((error) => {
        console.log("mycomment error:", error);
      });
  }, [page]);
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내댓글"} />
        <div className="w-full max-w-2xl">
          {/* <MyCommentList
            data={dummy.slice((page - 1) * 10, page * 10)}
            page={page}
          />
          <MyCommentPagination
            postsCnt={dummy.length}
            page={page}
            handlePageChange={handlePageChange}
          /> */}
          {data.length !== 0 && pageInfo ? (
            <>
              <MyCommentList data={data} page={page} />
              <MyCommentPagination
                postsCnt={pageInfo.totalPages}
                page={page}
                handlePageChange={handlePageChange}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MyCommentPage;
