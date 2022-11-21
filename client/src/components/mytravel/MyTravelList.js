import MyTravelHeader from "./ListItem/MyTravelHeader";
import MyTravelPost from "./ListItem/MyTravelPost";
import { VscDebugRestart } from "react-icons/vsc";
import { AiOutlineSave } from "react-icons/ai";
import { useEffect, useState } from "react";
const MyTravelList = ({ data, initData, setData }) => {
  const [deleteIndex, setDeleteIndex] = useState();
  const [swapIndex, setSwapIndex] = useState();

  // 리스트 아래위로 변경 로직
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
    setData(data.filter((_, index) => deleteIndex !== index));
    setDeleteIndex();
  }, [deleteIndex]);
  useEffect(() => {
    swapIndex ? handleSwap(swapIndex.state) : null;
  }, [swapIndex]);
  return (
    <div className="w-full h-64 sm:h-auto flex flex-col">
      <MyTravelHeader />
      <div className="w-4/6 flex justify-between items-center mb-0.5">
        <p className="text-xs text-[#8A8A8A]">
          방문을 원하는 순서대로 옮겨보세요!
        </p>
        <p className="mr-4 text-sm text-[rgb(83,199,240)]">{data.length} /10</p>
      </div>
      <div className="w-4/6 h-[510px] overflow-y-scroll">
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
  );
};
export default MyTravelList;
