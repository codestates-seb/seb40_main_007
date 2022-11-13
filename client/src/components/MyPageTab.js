/*eslint-disable*/
import { useState } from "react";
export default function MyPageTab() {
  const [index, setIndex] = useState(0);
  console.log(index);
  //            onClick={() => setIndex(1)}
  return (
    <>
      <div className="w-fit text-center">
        <div className="border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)] text-lg">
          <button
            onClick={() => setIndex(0)}
            className={
              index === 0
                ? "rounded-t-lg px-8 py-2 text-white bg-[rgb(83,199,240)]"
                : "rounded-t-lg px-8 py-2 hover:bg-sky-50 focus-[rgb(83,199,240)] hover:text-[rgb(83,199,240)] text-[#D9D9D9]"
            }
          >
            내 역이요
          </button>
          <button
            onClick={() => setIndex(1)}
            className={
              index === 1
                ? "rounded-t-lg px-8 py-2 text-white bg-[rgb(83,199,240)]"
                : "rounded-t-lg px-8 py-2 hover:bg-sky-50 focus-[rgb(83,199,240)] hover:text-[rgb(83,199,240)] text-[#D9D9D9]"
            }
          >
            내 게시글
          </button>
          <button
            onClick={() => setIndex(2)}
            className={
              index === 2
                ? "rounded-t-lg px-8 py-2 text-white bg-[rgb(83,199,240)]"
                : "rounded-t-lg px-8 py-2 hover:bg-sky-50 focus-[rgb(83,199,240)] hover:text-[rgb(83,199,240)] text-[#D9D9D9]"
            }
          >
            내 찜 목록
          </button>
          <button
            onClick={() => setIndex(3)}
            className={
              index === 3
                ? "rounded-t-lg px-8 py-2 text-white bg-[rgb(83,199,240)]"
                : "rounded-t-lg px-8 py-2 hover:bg-sky-50 focus-[rgb(83,199,240)] hover:text-[rgb(83,199,240)] text-[#D9D9D9]"
            }
          >
            내 댓글
          </button>
        </div>
      </div>
      {/* <Routes>
        <Route path="/" element={<tabPAge1 />} />
        <Route path="/users" element={<tabPAge2 />} />
        <Route path="/articles" element={<tabPAge3 />} />
        <Route path="/articles" element={<tabPAge4 />} />
      </Routes> */}
    </>
  );
}
