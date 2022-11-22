/*eslint-disable*/

const TestInfinitiScroll = ({ postsCnt, page, handlePageChange }) => {
  const numPage = Math.ceil(postsCnt / 10); // API로 전체 게시물 갯수 받아오면 이걸로 수정
  let exceptNum = 3;
  if (numPage === 7 && page === 4) {
    exceptNum = 2;
  }
  return (
    <nav
      className={`
      flex flex-row justify-center w-full gap-3 text-base p-2 
      ${numPage <= 1 ? "hidden" : ""} `}
    >
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className={`bg-white border-[1px] border-[rgb(83,199,240)] ${
          page === 1 ? "hidden" : ""
        }`}
      >
        Prev
      </button>
      {Array(numPage)
        .fill()
        .map((_, i) => (
          <nav key={i + 1} className="py-2">
            {/* tail : 페이지 ... 버튼 나타나는 구간 설정 */}
            {i === numPage - 1 && numPage !== 6 && numPage !== 5 ? (
              <span
                className={` ${page >= numPage - exceptNum ? "hidden" : ""}`}
              >
                ...
              </span>
            ) : null}
            <button
              onClick={() => handlePageChange(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
              {/* front : 페이지 ... 버튼 나타나는 구간 설정 */}
            </button>
            {i === 0 && numPage !== 6 && numPage !== 5 ? (
              <span className={`${page <= 4 ? "hidden" : ""}`}>...</span>
            ) : null}
          </nav>
        ))
        .filter((_, i) => {
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
      <button
        onClick={() => handlePageChange(page + 1)}
        className={`${page === numPage ? "hidden" : ""}`}
        disabled={page === numPage}
      >
        Next
      </button>
    </nav>
  );
};

export default TestInfinitiScroll;
