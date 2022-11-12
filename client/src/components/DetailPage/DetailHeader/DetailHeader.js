import DetailStarScore from "./DetailStarScore";

const DetailHeader = () => {
  return (
    <div>
      <div className="flex space-x-2">
        <h1 className="text-2xl font-bold">돼지 국밥</h1>
        <DetailStarScore />
        <span className="flex justify-center items-end text-xs text-gray-500">
          2 시간 전
        </span>
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
    </div>
  );
};

export default DetailHeader;
