import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import MyCommentList from "../../components/mycomment/MyCommentList";
import MyCommentPagination from "../../components/mycomment/MyCommentPagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { accessToken } from "../../atoms/loginData";
import { useRecoilState } from "recoil";

const MyCommentPage = () => {
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState();
  const [data, setData] = useState([]);

  const [TOKEN] = useRecoilState(accessToken);

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
          {data.length !== 0 && pageInfo ? (
            <>
              <div className="sm:h-full sm:mt-0 h-[460px] overflow-scroll scrollbar-hide -mt-3">
                <MyCommentList data={data} />
              </div>
              <MyCommentPagination
                postsCnt={pageInfo?.totalPages}
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
