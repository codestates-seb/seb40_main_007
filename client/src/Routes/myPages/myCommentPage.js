import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import MyCommentList from "../../components/mycomment/MyCommentList";
import MyCommentPagination from "../../components/mycomment/MyCommentPagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { accessToken } from "../../atoms/loginData";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

const MyCommentPage = () => {
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState();
  const [data, setData] = useState([]);
  const [isVoid, setIsVoid] = useState(false);

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
        response.data.items.length !== 0 ? setIsVoid(false) : setIsVoid(true);
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
          ) : isVoid ? (
            <div className="w-full flex justify-center">
              <div className="w-fit p-5 rounded-2xl font-semibold flex flex-col justify-center items-center border-2 text-[rgb(83,199,240)]">
                <img className="w-10" src="../images/logo.png" alt="logo" />
                <h1>작성한 댓글이 없습니다.</h1>
                <p className="text-sm">게시글을 보고 댓글을 작성해보세요!</p>
                <Link to={`/main/1`}>
                  <div className="bg-[rgb(83,199,240)] hover:bg-[rgba(83,199,240,0.8)] active:scale-90 mt-4 p-2 rounded-2xl w-[170px] flex flex-col justify-center items-center">
                    <div className="text-center">
                      <p className="text-white font-medium">게시글 보러가기</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MyCommentPage;
