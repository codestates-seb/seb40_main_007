/* eslint-disabled */
import { MdSort } from "react-icons/md";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { mainSortEvent, selectCategoryEvent } from "../../../atoms/mainFilter";
import { useParams } from "react-router-dom";
const SortDropdown = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [mainSort, setMainSort] = useRecoilState(mainSortEvent);
  const selectCategory = useRecoilValue(selectCategoryEvent);
  useEffect(() => {
    setShowModal(false);
  }, [selectCategory, id]);

  const liStyle =
    "w-full  border-2 border-[rgb(83,199,240)] -ml-[2px] text-sm text-[rgb(83,199,240)] flex justify-center align-middle";
  return (
    <>
      <div className={`w-full pl-7 relative flex font-medium `}>
        <button
          className={`z-20 active:scale-90 text-[rgb(83,199,240)] flex flex-row justify-center items-center space-x-1 border-2 border-[rgb(83,199,240)] p-1 mb-1 ${
            showModal
              ? "bg-[rgb(83,199,240)] text-white  mr-1 rounded-tl-lg rounded-bl-lg"
              : "rounded-lg"
          }
          `}
          onClick={() => setShowModal(!showModal)}
        >
          <MdSort size={20} />
          <span className="text-sm">필터</span>
        </button>

        {showModal ? (
          <div className={`z-10 mb-1`}>
            <ul
              className={`h-full rounded-md flex flex-row justify-center align-middle
              `}
            >
              <li
                className={`${liStyle}
            ${
              showModal
                ? "animate-sr1 active:bg-[rgba(83,199,240,.7)]"
                : "bg-white"
            }`}
              >
                <button
                  type="button"
                  className={`w-16  active:scale-90 ${
                    mainSort === "최신순"
                      ? "bg-[rgb(83,199,240)] text-white w-full pointer-events-none"
                      : "bg-white"
                  }`}
                  onClick={() => {
                    setMainSort("최신순");
                    setShowModal(false);
                  }}
                >
                  최신순
                </button>
              </li>
              <li
                className={`${liStyle}
                ${
                  showModal
                    ? "animate-sr2 active:bg-[rgba(83,199,240,.7)] "
                    : "bg-white"
                }`}
              >
                <button
                  type="button"
                  className={`w-16 active:scale-90 ${
                    mainSort === "거리순"
                      ? "bg-[rgb(83,199,240)] pointer-events-none text-white w-full  "
                      : "bg-white"
                  }`}
                  onClick={() => {
                    setMainSort("거리순");
                    setShowModal(false);
                  }}
                >
                  거리순
                </button>
              </li>
              <li
                className={`${liStyle}
            ${
              showModal
                ? "animate-sr3 active:bg-[rgba(83,199,240,.7)]"
                : "bg-white"
            }`}
              >
                <button
                  type="button"
                  className={`w-16 active:scale-90 ${
                    mainSort === "추천순"
                      ? "bg-[rgb(83,199,240)] pointer-events-none text-white w-full "
                      : "bg-white"
                  }`}
                  onClick={() => {
                    setMainSort("추천순");
                    setShowModal(false);
                  }}
                >
                  추천순
                </button>
              </li>
            </ul>
            {/* <button
              className="inset-0 fixed cursor-default"
              onClick={() => setShowModal(false)}
            ></button> */}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SortDropdown;
