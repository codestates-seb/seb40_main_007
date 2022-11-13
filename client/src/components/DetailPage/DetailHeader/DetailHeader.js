import DetailStarScore from "./DetailStarScore";
import { TiPencil } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";

const DetailHeader = () => {
  return (
    <div className="flex flex-col mt-5 lg:mt-20">
      <div className="mb-5 flex flex-row justify-between">
        <span className="text-lg text-[rgb(83,199,240)] border-b-2 border-b-[rgb(83,199,240)] px-3 py-1">
          부산역
        </span>
        <div className="flex flex-row space-x-1 place-items-end">
          <button className="w-[30px] h-[30px] bg-white border-2 border-[rgb(83,199,240)] rounded-3xl p-0.5 flex justify-center items-center">
            <TiPencil size={"30"} color={"#52C7F1"} />
          </button>
          <button className="w-[30px] h-[30px] bg-[rgb(83,199,240)] rounded-3xl p-0.5 flex justify-center items-center">
            <FaRegTrashAlt size={"20"} color={"#fff"} />
          </button>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex space-x-2">
          <span className="text-2xl font-bold">돼지 국밥</span>
          <DetailStarScore />
          <span className="flex justify-center items-end text-xs text-gray-500">
            2 시간 전
          </span>
        </div>
      </div>
      <div className="flex space-x-2 mt-2">
        <span className="text-xs text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-xl py-0.5 px-2">
          한식
        </span>
        <span className="text-xs text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-xl py-0.5 px-2">
          한식
        </span>
        <span className="text-xs text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-xl py-0.5 px-2">
          한식
        </span>
        <span className="text-xs text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-xl py-0.5 px-2">
          한식
        </span>
        <span className="text-xs text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-xl py-0.5 px-2">
          한식
        </span>
        {/* {tags.map((el) => {
          return (
            <span className="text-xs text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-lg py-0.5 px-2">
              {el}
            </span>
          );
        })} */}
      </div>
      <div className="flex flex-row items-center space-x-2">
        <div className="w-6 h-6 my-2">
          <img src="/images/profile.png" alt="사진" />
        </div>
        <span className="text-sm">게시글 작성자</span>
      </div>
    </div>
  );
};

export default DetailHeader;
