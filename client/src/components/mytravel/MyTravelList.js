import MyTravelHeader from "./ListItem/MyTravelHeader";
import MyTravelPost from "./ListItem/MyTravelPost";
import { VscDebugRestart } from "react-icons/vsc";
import { AiOutlineSave } from "react-icons/ai";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useEffect, useState } from "react";
// import MyTravelDot from "../mytravel/MyTravelDot";
const MyTravelList = ({ data, initData, setData }) => {
  const [deleteIndex, setDeleteIndex] = useState();
  const [swapIndex, setSwapIndex] = useState();

  // 뒤로가기,앞으로가기 로직
  const [stackBack, setStackBack] = useState([]);
  const [stackFront, setStackFront] = useState([]);
  const [stackCnt, setStackCnt] = useState(0);
  useEffect(() => {
    stackCnt !== 0 ? setStackBack([...stackBack, data]) : setStackBack([]);
  }, [stackCnt]);

  // 뒤로가기 스택 저장
  const handleBackStack = () => {
    const [...backStack] = stackBack;
    const popData = backStack.pop();
    setStackFront([...stackFront, data]);
    setStackBack(backStack);
    setData(popData);
  };

  // 앞으로가기 스택 저장
  const handleFrontStack = () => {
    const [...frontStack] = stackFront;
    const popData = frontStack.pop();
    setStackBack([...stackBack, data]);
    setStackFront(frontStack);
    setData(popData);
  };

  const handelStackInit = () => {
    setStackFront([]);
    setStackBack([]);
    setData(initData);
  };
  const handelInitFrontStack = () => {
    setStackFront([]);
  };
  const handleStackCnt = () => {
    setStackCnt(stackCnt + 1);
  };

  // 리스트 아래위로 swap 로직
  const handleSwap = (listBtnState) => {
    const [...copyData] = data;

    let temp;
    if (listBtnState === "up") {
      temp = copyData[swapIndex.index];
      copyData[swapIndex.index] = copyData[swapIndex.index - 1];
      copyData[swapIndex.index - 1] = temp;
    }

    if (listBtnState === "down") {
      temp = copyData[swapIndex.index];
      copyData[swapIndex.index] = copyData[swapIndex.index + 1];
      copyData[swapIndex.index + 1] = temp;
    }
    setData(copyData);
  };
  useEffect(() => {
    swapIndex ? handleSwap(swapIndex.state) : null;
  }, [swapIndex]);

  // 삭제 로직
  useEffect(() => {
    setData(data.filter((_, index) => deleteIndex !== index));
    setDeleteIndex();
  }, [deleteIndex]);

  return (
    <div className="w-full h-64 sm:h-auto flex flex-col">
      <MyTravelHeader />
      <div className="w-4/6 flex justify-between items-center mb-0.5">
        <p className="text-xs text-[#8A8A8A]">
          방문을 원하는 순서대로 옮겨보세요!
        </p>
      </div>
      <div className="w-4/6 h-6 pl-2 mt-2  text-[rgb(83,199,240)] flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <button
            className={`rounded-full hover:bg-gray-200 active:bg-gray-300 ${
              stackBack.length === 0 ? "text-gray-400 pointer-events-none" : ""
            }`}
            onClick={handleBackStack}
          >
            <BsArrowLeftShort size={24} />
          </button>
          <button
            className={`rounded-full hover:bg-gray-200 active:bg-gray-300 ${
              stackFront.length === 0 ? "text-gray-400 pointer-events-none" : ""
            }`}
            onClick={handleFrontStack}
          >
            <BsArrowRightShort size={24} />
          </button>
          <button
            className="ml-1 rounded-full w-6 hover:bg-gray-200 active:bg-gray-300 flex justify-center items-center"
            onClick={handelStackInit}
          >
            <VscDebugRestart size={16} />
          </button>
        </div>
        <p className="mr-2 text-sm text-[rgb(83,199,240)]">{data.length} /10</p>
      </div>
      <div className="relative">
        {/* <div className="top-0 right-[150px]">
          <MyTravelDot props={["5분", "6분", "7분", "8분", "99분"]} />
        </div> */}
        <div>
          <div className="w-4/6 h-[480px] pt-1 pl-1 overflow-y-scroll">
            {data.length !== 0 ? (
              data.map((item, index) => (
                <MyTravelPost
                  key={index}
                  data={item}
                  index={index}
                  lastIndex={data.length - 1}
                  // 테스트 데이터 이동
                  setDeleteIndex={setDeleteIndex}
                  setSwapIndex={setSwapIndex}
                  setData={setData}
                  handleStackCnt={handleStackCnt}
                  handelInitFrontStack={handelInitFrontStack}
                />
              ))
            ) : (
              <div className="text-xl text-[#8A8A8A] h-full flex justify-center items-center">
                여행 목록이 비었습니다.
              </div>
            )}
          </div>
          <div className="w-4/6 flex justify-center">
            <button
              onClick={() => setData(initData)}
              className="btn m-2 text-sm bg-gray-400 hover:scale-105 active:scale-100"
            >
              <div className="flex flex-row w-full justify-center items-center">
                <VscDebugRestart size={18} />
                되돌리기
              </div>
            </button>
            <button className="btn hover:scale-105 active:scale-100 m-2 text-sm">
              <div className="flex flex-row w-full justify-center items-center">
                <AiOutlineSave size={18} />
                저장하기
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyTravelList;
