// import { useState } from "react";
import { Link } from "react-router-dom";

export default function MyPageTab({ index }) {
  // const [index, setIndex] = useState(0);
  const unactiveStyle =
    "rounded-t-lg sm:px-10 px-3 sm:py-2 py-1 sm:text-lg text-sm text-white bg-[rgb(83,199,240)] ";
  const activeStyle =
    "rounded-t-lg sm:px-10 px-3 sm:py-2 py-1 sm:text-lg text-sm hover:bg-sky-50 focus-[rgb(83,199,240)] hover:text-[rgb(83,199,240)] text-[#D9D9D9]";

  return (
    <nav className="w-fit border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] text-lg text-center">
      <ul className="flex max-w-5xl">
        <li>
          <Link to="/mypage">
            <button
              // onClick={() => setIndex(0)}
              className={index === "내역이요" ? unactiveStyle : activeStyle}
            >
              내 역이요
            </button>
          </Link>
        </li>
        <li>
          <Link to="/mypage/mypost">
            <button
              // onClick={() => setIndex(1)}
              className={index === "내게시글" ? unactiveStyle : activeStyle}
            >
              내 게시글
            </button>
          </Link>
        </li>
        <li>
          <Link to="/mypage/mytravel">
            <button
              // onClick={() => setIndex(2)}
              className={index === "내여행계획" ? unactiveStyle : activeStyle}
            >
              내 여행 계획
            </button>
          </Link>
        </li>
        <li>
          <Link to="/mypage/mycomment">
            <button
              // onClick={() => setIndex(3)}
              className={index === "내댓글" ? unactiveStyle : activeStyle}
            >
              내 댓글
            </button>
          </Link>
        </li>
      </ul>
      {/* <Routes>
        <Route path="/" element={<tabPAge1 />} />
        <Route path="/users" element={<tabPAge2 />} />
        <Route path="/articles" element={<tabPAge3 />} />
        <Route path="/articles" element={<tabPAge4 />} />
      </Routes> */}
    </nav>
  );
}
