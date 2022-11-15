// import { useState } from "react";
import { Link } from "react-router-dom";

export default function MyPageTab({ index }) {
  // const [index, setIndex] = useState(0);
  const unactiveStyle =
    "rounded-t-lg sm:px-10 px-3 sm:py-2 py-1 sm:text-lg text-white bg-[rgb(83,199,240)] ";
  const activeStyle =
    "rounded-t-lg sm:px-10 px-3 sm:py-2 py-1 sm:text-lg hover:bg-sky-50 focus-[rgb(83,199,240)] hover:text-[rgb(83,199,240)] text-[#D9D9D9]";
  console.log(index);

  return (
    <nav className="border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] text-center">
      <ul className="flex">
        <li>
          <Link to="/mypage">
            <button
              // onClick={() => setIndex(0)}
              className={index === 0 ? unactiveStyle : activeStyle}
            >
              내 역이요
            </button>
          </Link>
        </li>
        <li>
          <button
            // onClick={() => setIndex(1)}
            className={index === 1 ? unactiveStyle : activeStyle}
          >
            내 게시글
          </button>
        </li>
        <li>
          <button
            // onClick={() => setIndex(2)}
            className={index === 2 ? unactiveStyle : activeStyle}
          >
            내 찜 목록
          </button>
        </li>
        <li>
          <Link to="/mypage/mycomment">
            <button
              // onClick={() => setIndex(3)}
              className={index === 3 ? unactiveStyle : activeStyle}
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
