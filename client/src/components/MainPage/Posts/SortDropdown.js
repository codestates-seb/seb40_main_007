/* eslint-disabled */
import { MdSort } from "react-icons/md";
import { useRecoilState } from "recoil";
import { mainSortEvent } from "../../../atoms/mainFilter";
const SortDropdown = () => {
  const [mainSort, setMainSort] = useRecoilState(mainSortEvent);

  const liStyle =
    "w-full  border-2 border-[rgb(83,199,240)] -ml-[2px] text-sm text-[rgb(83,199,240)] flex justify-center align-middle";
  return (
    <>
      <div className={`w-full pl-7 relative flex font-medium `}>
        <div className="flex flex-row justify-center items-center space-x-1 border-2 border-[rgb(83,199,240)] p-0.5 mb-1 bg-[rgb(83,199,240)] text-white  mr-1 rounded-tl-lg rounded-bl-lg">
          <MdSort size={20} />
          <span className="text-sm">필터</span>
        </div>
        <div className={`z-10 mb-1`}>
          <ul
            className={`h-full rounded-md flex flex-row justify-center align-middle`}
          >
            <li className={`${liStyle} active:bg-[rgba(83,199,240,.7)]`}>
              <button
                type="button"
                className={`w-16 active:scale-90 ${
                  mainSort === "최신순"
                    ? "bg-[rgb(83,199,240)] text-white w-full pointer-events-none"
                    : "bg-white"
                }`}
                onClick={() => {
                  setMainSort("최신순");
                }}
              >
                최신순
              </button>
            </li>
            <li className={`${liStyle} active:bg-[rgba(83,199,240,.7)] `}>
              <button
                type="button"
                className={`w-16 active:scale-90 ${
                  mainSort === "거리순"
                    ? "bg-[rgb(83,199,240)] pointer-events-none text-white w-full  "
                    : "bg-white"
                }`}
                onClick={() => {
                  setMainSort("거리순");
                }}
              >
                거리순
              </button>
            </li>
            <li className={`${liStyle} active:bg-[rgba(83,199,240,.7)]`}>
              <button
                type="button"
                className={`w-16 active:scale-90 ${
                  mainSort === "추천순"
                    ? "bg-[rgb(83,199,240)] pointer-events-none text-white w-full "
                    : "bg-white"
                }`}
                onClick={() => {
                  setMainSort("추천순");
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
      </div>
    </>
  );
};

export default SortDropdown;
