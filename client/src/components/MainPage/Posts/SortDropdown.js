/* eslint-disabled */
import { MdSort } from "react-icons/md";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { mainSortEvent } from "../../../atoms/mainFilter";

const SortDropdown = () => {
  const [showModal, setShowModal] = useState(false);
  const [mainSort, setMainSort] = useRecoilState(mainSortEvent);

  return (
    <>
      <div className={`relative mr-4`}>
        <button
          className={`text-[rgb(83,199,240)] flex flex-row justify-center items-center space-x-1 border-2 border-[rgb(83,199,240)] p-1 mb-1 rounded-xl ${
            showModal ? "bg-[rgb(83,199,240)] text-white" : ""
          }
          `}
          onClick={() => setShowModal(!showModal)}
        >
          <MdSort size={20}></MdSort>
          <span className="text-sm ">정렬</span>
        </button>
        {showModal ? (
          <div className="fixed z-50">
            <ul className=" bg-white rounded-md w-16  border-2">
              <li className="w-full border-b-2 border-white  text-sm text-[rgb(83,199,240)] text-center">
                <button
                  type="button"
                  className={`pt-1 ${
                    mainSort === "최신순"
                      ? "bg-slate-200 border-b-2 w-full "
                      : ""
                  }`}
                  onClick={() => {
                    setMainSort("최신순");
                    setShowModal(false);
                  }}
                >
                  최신순
                </button>
              </li>
              <li className="w-full border-b-2 border-white text-sm text-[rgb(83,199,240)] text-center">
                <button
                  type="button"
                  className={`py-0.5  ${
                    mainSort === "거리순"
                      ? "bg-slate-200 border-y-2 w-full"
                      : ""
                  }`}
                  onClick={() => {
                    setMainSort("거리순");
                    setShowModal(false);
                  }}
                >
                  거리순
                </button>
              </li>
              <li className="w-full text-sm  text-[rgb(83,199,240)] text-center">
                <button
                  type="button"
                  className={`pb-1  ${
                    mainSort === "추천순"
                      ? "bg-slate-200 border-t-2 w-full"
                      : ""
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
