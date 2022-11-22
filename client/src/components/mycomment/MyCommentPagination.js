/*eslint-disable*/
import { BsThreeDots } from "react-icons/bs";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const MyCommentPagination = ({ postsCnt, page, handlePageChange }) => {
  const numPage = Math.ceil(postsCnt / 10); // API로 전체 게시물 갯수 받아오면 이걸로 수정
  let exceptNum = 3;
  if (numPage === 7 && page === 4) {
    exceptNum = 2;
  }
  const moveBtn =
    "w-7 h-7 text-black flex justify-center items-center text-white rounded-full";

  return (
    <nav
      className={`
      flex flex-row justify-center items-center w-full text-base p-2 
      ${numPage <= 1 ? "hidden" : ""} `}
    >
      {/* prev 버튼 1페이지에 안보임*/}
      {/* <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className={`${moveBtn} ${page === 1 ? "hidden" : ""}`}
      >
        이전
      </button> */}
      {/* prev 버튼 항상보이는 버전*/}
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className={`${moveBtn} mr-3 
        ${
          page === 1
            ? "text-gray-300"
            : "active:bg-[rgba(83,199,240,.5)] active:border-2 active:border-white hover:bg-[rgba(83,199,240,.5)]"
        }
       
        `}
      >
        <MdOutlineArrowBackIos />
      </button>
      {Array(numPage)
        .fill()
        .map((_, i) => (
          <nav key={i + 1} className="py-2 flex items-center">
            {/* tail : 페이지 ... 버튼 나타나는 구간 설정 */}
            {i === numPage - 1 && numPage !== 6 && numPage !== 5 ? (
              <span
                className={`mx-2  ${
                  page >= numPage - exceptNum ? "hidden" : ""
                }`}
              >
                <BsThreeDots />
              </span>
            ) : null}
            <button
              className="w-8 h-8 p-1 rounded-full flex justify-center items-center  active:bg-[rgba(83,199,240,.5)] active:border-2 active:border-white"
              onClick={() => handlePageChange(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
              {/* front : 페이지 ... 버튼 나타나는 구간 설정 */}
            </button>
            {i === 0 && numPage !== 6 && numPage !== 5 ? (
              <span className={`mx-2 ${page <= 4 ? "hidden" : ""}`}>
                <BsThreeDots />
              </span>
            ) : null}
          </nav>
        ))
        .filter((_, i) => {
          // 페이지에 따라 보여지는 나머지 페이지수
          if (page === 1) {
            if (
              i + 1 === page ||
              i + 1 === page + 1 ||
              i + 1 === page + 2 ||
              i + 1 === page + 3 ||
              i + 1 === page + 4 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else if (page === 2) {
            if (
              i + 1 === page ||
              i + 1 === page - 1 ||
              i + 1 === page + 1 ||
              i + 1 === page + 2 ||
              i + 1 === page + 3 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else if (page === 4) {
            if (
              i + 1 === page ||
              i + 1 === page - 1 ||
              i + 1 === page - 2 ||
              i + 1 === page - 3 ||
              i + 1 === page + 1 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else if (page === numPage - 1) {
            if (
              i + 1 === 1 ||
              i + 1 === page ||
              i + 1 === page - 1 ||
              i + 1 === page - 2 ||
              i + 1 === page - 3 ||
              i + 1 === page + 1 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else if (page === numPage - 2) {
            if (
              i + 1 === 1 ||
              i + 1 === page ||
              i + 1 === page - 1 ||
              i + 1 === page - 2 ||
              i + 1 === page + 1 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else if (page === numPage - 3) {
            if (
              i + 1 === 1 ||
              i + 1 === page ||
              i + 1 === page - 1 ||
              i + 1 === page + 2 ||
              i + 1 === page + 1 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else if (page === numPage) {
            if (
              i + 1 === 1 ||
              i + 1 === page ||
              i + 1 === page - 1 ||
              i + 1 === page - 2 ||
              i + 1 === page - 3 ||
              i + 1 === page - 4 ||
              i + 1 === numPage
            ) {
              return true;
            }
          } else {
            if (
              i + 1 === 1 ||
              i + 1 === numPage ||
              i + 1 === page - 2 ||
              i + 1 === page - 1 ||
              i + 1 === page ||
              i + 1 === page + 1 ||
              i + 1 === page + 2
            ) {
              return true;
            }
          }

          return;
        })}

      {/* 다음 버튼 마지막 페이지에서 안보이는 버전*/}
      {/* <button
        onClick={() => handlePageChange(page + 1)}
        className={`${moveBtn} ${page === numPage ? "hidden" : ""}`}
        disabled={page === numPage}
      >
        다음
      </button> */}
      {/* 다음 버튼 항상 보이는 버전*/}
      <button
        onClick={() => handlePageChange(page + 1)}
        className={`${moveBtn} ml-3 ${
          page === numPage
            ? "text-gray-300"
            : "active:bg-[rgba(83,199,240,.5)] active:border-2 active:border-white hover:bg-[rgba(83,199,240,.5)]"
        }`}
        disabled={page === numPage}
      >
        <MdOutlineArrowForwardIos />
      </button>
    </nav>
  );
};

export default MyCommentPagination;
