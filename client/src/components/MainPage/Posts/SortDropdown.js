/* eslint-disabled */
import { MdSort } from "react-icons/md";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { mainSortAtom } from "../../../atoms/sort";

const SortDropdown = () => {
  const [showModal, setShowModal] = useState(false);
  const [mainSort, setMainSort] = useRecoilState(mainSortAtom);

  console.log(mainSort);

  return (
    <>
      <div className="relative">
        <button
          className="text-[rgb(83,199,240)] flex flex-row justify-center items-center space-x-1 border-2 border-[rgb(83,199,240)] p-1 focus:bg-[rgb(83,199,240)] focus:text-white group mb-1 rounded-xl"
          onClick={() => setShowModal(!showModal)}
        >
          <MdSort size={20}></MdSort>
          <span className="text-xs text-[rgb(83,199,240)] group-focus:text-white">
            정렬
          </span>
        </button>
        {showModal ? (
          <div>
            <ul className="absolute z-50 bg-white rounded-md w-16 m-1 p-1 border-2">
              <li className="text-sm text-[rgb(83,199,240)] text-center p-1">
                <button
                  type="button"
                  onClick={() => {
                    setMainSort("최신순");
                    setShowModal(false);
                  }}
                >
                  최신순
                </button>
              </li>
              <li className="text-sm text-[rgb(83,199,240)] text-center p-1">
                <button
                  type="button"
                  onClick={() => {
                    setMainSort("거리순");
                    setShowModal(false);
                  }}
                >
                  거리순
                </button>
              </li>
              <li className="text-sm text-[rgb(83,199,240)] text-center p-1">
                <button
                  type="button"
                  onClick={() => {
                    setMainSort("추천순");
                    setShowModal(false);
                  }}
                >
                  추천순
                </button>
              </li>
            </ul>
            <button
              className="inset-0 fixed"
              onClick={() => setShowModal(false)}
            ></button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SortDropdown;
