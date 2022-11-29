// import { IoMdPin } from "react-icons/io";
// import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";
import { FaWalking } from "react-icons/fa";
import { MdOutlineTrain, MdTimer } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { timeBetweenBoardsData } from "../../atoms/mypage/myTravelData";
import { timeFunc } from "../../utils/timeFunc";
export default function MyTravelDot() {
  const timeBetweenBoards = useRecoilValue(timeBetweenBoardsData);
  console.log("시간 계산", timeBetweenBoards);

  const myTravelList = timeBetweenBoards;
  const listLength = timeBetweenBoards.length;
  return (
    <>
      <div className="text-[rgba(83,199,240)]">
        <MdTimer size={32} />
      </div>
      {timeBetweenBoards && (
        <div>
          {listLength !== 0 ? (
            // 1번째 동그라미 경우
            <div className="mt-2 h-[544px] flex flex-col items-center text-gray-400">
              <div className="w-10 h-10 bg-[rgba(83,199,240,0.5)] rounded-full mb-3 flex justify-center items-center text-white">
                1
              </div>
              {myTravelList.map((el, idx) => {
                return (
                  <div key={idx} className="relative">
                    <div
                      className={
                        // 맨마지막 인덱스의 동그라미인 경우
                        idx === listLength - 1
                          ? "w-10 h-10 bg-[rgba(83,199,240,0.5)] rounded-full my-3 flex justify-center items-center text-white"
                          : "w-5 h-5 bg-[rgba(83,199,240,0.5)] rounded-full my-3 flex justify-center items-center text-white text-xs"
                      }
                    >
                      {idx + 2}
                    </div>
                    <div
                      // 맨마지막 인덱스의 소요시간 텍스트 경우
                      className={`
                      flex flex-row gap-1 items-center
                        ${
                          idx === listLength - 1
                            ? "absolute text-sm w-32 top-[-12px] left-8 text-gray-400"
                            : "absolute text-sm w-32 top-[-12px] left-6 text-gray-400"
                        }
                      `}
                    >
                      {el.type === "car" ? <AiOutlineCar size={24} /> : ""}
                      {el.type === "walk" ? <FaWalking size={24} /> : ""}
                      {el.type === "train" ? <MdOutlineTrain size={26} /> : ""}
                      {el.type !== "train" ? timeFunc(el.time) : "기차 이용"}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
