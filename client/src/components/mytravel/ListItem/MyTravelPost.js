import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import PostStarScore from "../../MainPage/Posts/PostStarScore";
import ViewTag from "../../tag/viewTags/ViewTag";
const MyTravelPost = ({
  data,
  index,
  lastIndex,
  setDeleteIndex,
  setSwapIndex,
}) => {
  const dummyTagList = [
    data.tags.detailTag,
    ...data.tags.moodTag,
    data.tags.priceTag,
  ];
  return (
    <div className="mb-4 border-[1px] border-[rgb(83,199,240)] flex flex-row items-center">
      {/* 업,다운 */}
      <div className="w-10 h-full flex flex-col items-center justify-around">
        {/* 최상단, 최하단 버튼 없는 버전 */}
        {/* {index !== 0 ? (
          <button
            onClick={() => setSwapIndex({ state: "up", index })}
            className="hover:scale-125 active:scale-100"
          >
            <MdKeyboardArrowUp size={40} />
          </button>
        ) : null} */}
        {/* {index !== lastIndex ? (
          <button
            onClick={() => setSwapIndex({ state: "down", index })}
            className="hover:scale-125 active:scale-100"
          >
            <MdKeyboardArrowDown size={40} color="rgb(83,199,240)" />
          </button>
        ) : null} */}

        {/* 최상단, 최하단 버튼 회색 버전 */}
        <button
          onClick={() => setSwapIndex({ state: "up", index })}
          className={`hover:scale-125 active:scale-100 
            ${
              index !== 0
                ? "text-[rgb(83,199,240)]"
                : "text-gray-400 pointer-events-none"
            } `}
        >
          <MdKeyboardArrowUp size={40} />
        </button>
        <button
          onClick={() => setSwapIndex({ state: "down", index })}
          className={`hover:scale-125 active:scale-100 
            ${
              index !== lastIndex
                ? "text-[rgb(83,199,240)]"
                : "text-gray-400 pointer-events-none"
            } `}
        >
          <MdKeyboardArrowDown size={40} />
        </button>
      </div>
      {/* 썸네일 */}
      <div className="w-full flex flex-row justify-between items-center py-1">
        <div className="h-full">
          <img
            className="w-20 h-20 rounded-xl"
            alt="post img"
            src={data.thumbnail}
          />
        </div>
        <div className="w-9/12">
          <div className="px-2">
            {/* 타이틀 */}
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <div className="bg-[rgb(83,199,240)] text-[rgba(0,0,0,0.8)] border-[1px] border-black font-medium text-xs rounded-full w-5 h-5 mr-1 flex justify-center items-center">
                  {index + 1}
                </div>
                <h2 className="text-sm mr-2 font-semibold">{data.title}</h2>
                <PostStarScore score={data.star} size={15} />
              </div>
              {/* 삭제버튼 */}
              <div>
                <button
                  onClick={() => setDeleteIndex(index)}
                  className="hover:scale-125 active:scale-100"
                >
                  <RiCloseFill size={25} color="rgb(83,199,240)" />
                </button>
              </div>
            </div>
            {/* 태그 */}
            <div className="w-11/12 ">
              <ViewTag tagList={dummyTagList} color={"blue"}></ViewTag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTravelPost;
