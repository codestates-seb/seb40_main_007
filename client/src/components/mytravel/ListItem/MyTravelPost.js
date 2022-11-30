import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { useRecoilState, useRecoilValue } from "recoil";
import { traveMapCenterEvent } from "../../../atoms/mypage/myTravelData";
import { tagsInfoList } from "../../../atoms/tagsInfo";
import PostStarScore from "../../MainPage/Posts/PostStarScore";
import ViewTag from "../../tag/viewTags/ViewTag";
const MyTravelPost = ({
  data,
  index,
  lastIndex,
  setDeleteIndex,
  setSwapIndex,
  handleStackCnt,
  handelInitFrontStack,
  moveIndex,
  setMoveIndex,
}) => {
  const [, setTraveMapCenter] = useRecoilState(traveMapCenterEvent);
  const tagsInfo = useRecoilValue(tagsInfoList);
  // 게시물 한칸 위로 이동
  const handleUpBtn = () => {
    setSwapIndex({ state: "up", index });
    handleStackCnt();
    handelInitFrontStack();
    setMoveIndex({ moveUp: index - 1, moveDown: index });
  };

  // 게시물 한칸 아래로 이동
  const handleDownBtn = () => {
    setSwapIndex({ state: "down", index });
    handleStackCnt();
    handelInitFrontStack();
    setMoveIndex({ moveUp: index, moveDown: index + 1 });
  };

  // 게시물 삭제
  const handleDeletBtn = () => {
    setDeleteIndex(index);
    handleStackCnt();
    handelInitFrontStack();
  };
  // 테그 숫자 -> 문자로 변환
  const tagList = [
    data.tags.detailTag,
    ...data.tags.moodTag,
    data.tags.priceTag,
  ].map((el) => tagsInfo[el]);

  console.log("moveIndex", moveIndex);
  return (
    <>
      <div
        className={`mb-4 flex flex-row items-center rounded-xl shadow-[0px_0px_2px_1px_rgba(0,0,0,0.3)]
      ${moveIndex?.moveUp === index ? "animate-moveUp" : ""}
      ${moveIndex?.moveDown === index ? "animate-moveDown" : ""}

    `}
      >
        {/* 업,다운 */}
        <div className="w-10 h-full flex flex-col items-center justify-around">
          {/* 최상단, 최하단 버튼 회색 버전 */}
          <button
            onClick={handleUpBtn}
            className={`hover:scale-125 active:scale-100 
          ${index}
            ${
              index !== 0
                ? "text-[rgb(83,199,240)]"
                : "text-gray-400 pointer-events-none"
            }`}
          >
            <MdKeyboardArrowUp size={40} />
          </button>
          <button
            onClick={handleDownBtn}
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
              className="w-20 h-20 border-2 border-[#59AEEC] rounded-xl"
              alt="post img"
              src={data?.thumbnail}
            />
          </div>
          <div className="w-9/12">
            <div className="px-2">
              {/* 타이틀 */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  {/* 지도에서 해당 위치로 이동 */}
                  <button
                    className="bg-[rgb(83,199,240)] active:bg-[rgba(83,199,240,.7)] text-white font-medium text-xs rounded-full w-5 h-5 mr-1 flex justify-center items-center"
                    onClick={() =>
                      setTraveMapCenter({
                        lat: data?.latitude,
                        lng: data?.longitude,
                      })
                    }
                  >
                    {index + 1}
                  </button>
                  <h2 className="w-28 text-sm mr-2 font-medium truncate">
                    {data?.title}
                  </h2>
                  <PostStarScore score={data?.star} size={15} />
                </div>
                <div className="text-end">
                  {/* 삭제버튼 */}
                  <button
                    onClick={handleDeletBtn}
                    className="hover:scale-125 active:scale-100"
                  >
                    <RiCloseFill size={25} color="rgb(83,199,240)" />
                  </button>
                </div>
              </div>
              {/* 태그 */}
              <div className="w-11/12 h-9">
                <ViewTag tagList={tagList} color={"blue"}></ViewTag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTravelPost;
