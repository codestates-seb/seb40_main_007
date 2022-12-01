import MyTravelHeader from "./ListItem/MyTravelHeader";
import MyTravelPost from "./ListItem/MyTravelPost";
import { VscDebugRestart } from "react-icons/vsc";
import { AiOutlineSave } from "react-icons/ai";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useEffect, useState } from "react";
import { accessToken } from "../../atoms/loginData";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  myTravelData,
  myTravelIdSelect,
  timeBetweenBoardsData,
  wholeTimeData,
} from "../../atoms/mypage/myTravelData";
import axios from "axios";
import Loading from "../Loading";
import MyTravelDot from "../mytravel/MyTravelDot";
import { MdTimer } from "react-icons/md";
const MyTravelList = ({ data, initData, setData }) => {
  // window.scrollTo(0,0);
  const [TOKEN] = useRecoilState(accessToken);
  const myTravelId = useRecoilValue(myTravelIdSelect);
  const [myTravel, setMyTravel] = useRecoilState(myTravelData);
  const [, setTimeBetweenBoards] = useRecoilState(timeBetweenBoardsData);
  const [, setWholeTime] = useRecoilState(wholeTimeData);

  const [deleteIndex, setDeleteIndex] = useState();
  const [swapIndex, setSwapIndex] = useState();

  // 뒤로가기,앞으로가기 - 스택관련 로직
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

  // 스택 완전 초기화
  // const handelStackInit = () => {
  //   setStackFront([]);
  //   setStackBack([]);
  //   setData(initData);
  // };
  const handelInitFrontStack = () => {
    setStackFront([]);
  };
  const handleStackCnt = () => {
    setStackCnt(stackCnt + 1);
  };

  // 리스트 swap 애니메이션
  const [moveIndex, setMoveIndex] = useState();
  useEffect(() => {
    setTimeout(() => {
      setMoveIndex();
    }, 200);
  }, [data]);

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
    data && data.length !== 0
      ? setData(data?.filter((_, index) => deleteIndex !== index))
      : null;
    setDeleteIndex();
  }, [deleteIndex]);
  const isChangeCheck = (init, change) => {
    // 데이터의 순서가 바뀌거나 변화가 있는지 체크
    if (init.length === change.length) {
      for (let i = 0; i < init.length; i++) {
        if (init[i] !== change[i]) {
          return true;
        }
      }
    } else {
      return true;
    }
    return false;
  };

  // 플랜 변경 요청
  const savePlan = () => {
    setStackFront([]);
    setStackBack([]);
    const changeDataIdList = data?.map((el) => el.boardId);
    const initDataIdList = initData?.map((el) => el.boardId);
    const isChange = isChangeCheck(initDataIdList, changeDataIdList);

    const URL = `${process.env.REACT_APP_URL}/boardplanners/${myTravelId}`;

    const config = {
      headers: { Authorization: TOKEN },
    };
    const changeData = {
      priorities: changeDataIdList,
    };

    isChange
      ? axios
          .patch(URL, changeData, config)
          .then((response) => {
            console.log("Change My Travel Success :", response);
            setMyTravel(response.data);
            setTimeBetweenBoards(response.data.timeBetweenBoards);
            setWholeTime(response.data.wholeTime);
          })
          .catch((error) => {
            console.log("Change My Travel Fail :", error);
          })
      : console.log("데이터가 바뀌지 않았습니다.");
  };

  return myTravel ? (
    <div className="w-full h-64 sm:h-auto flex flex-col p-2 lg:p-0 lg:pr-14 ">
      <MyTravelHeader />
      <div className="lg:w-4/6 w-full flex justify-between items-center mb-0.5">
        <p className="text-xs text-[#8A8A8A]">
          방문을 원하는 순서대로 옮겨보세요!
        </p>
      </div>
      <div className="lg:w-4/6 w-full h-6 pl-1 mt-2  text-[rgb(83,199,240)] flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <button
            className={`rounded-full hover:bg-gray-200 active:bg-gray-300 ${
              stackBack?.length === 0 ? "text-gray-400 pointer-events-none" : ""
            }`}
            onClick={handleBackStack}
          >
            <BsArrowLeftShort size={24} />
          </button>
          <button
            className={`rounded-full hover:bg-gray-200 active:bg-gray-300 ${
              stackFront?.length === 0
                ? "text-gray-400 pointer-events-none"
                : ""
            }`}
            onClick={handleFrontStack}
          >
            <BsArrowRightShort size={24} />
          </button>
        </div>
        {data ? (
          <p className="lg:-mr-6 mr-1 text-base font-semibold text-[rgb(83,199,240)]">
            {data?.length} /10
          </p>
        ) : null}
      </div>
      <div className="relative flex">
        <div className="lg:w-9/12 w-full">
          <div className="sm:h-[480px] h-[340px] pt-2 pl-4 pr-1 overflow-y-scroll rounded-md border-t-2 border-[#59AEEC]">
            {data && data?.length !== 0 ? (
              data?.map((item, index) => (
                <MyTravelPost
                  key={index}
                  data={item}
                  index={index}
                  lastIndex={data?.length - 1}
                  // 테스트 데이터 이동
                  setDeleteIndex={setDeleteIndex}
                  setSwapIndex={setSwapIndex}
                  setData={setData}
                  handleStackCnt={handleStackCnt}
                  handelInitFrontStack={handelInitFrontStack}
                  moveIndex={moveIndex}
                  setMoveIndex={setMoveIndex}
                />
              ))
            ) : data && data?.length === 0 ? (
              <div className="text-xl text-[#8A8A8A] h-full flex justify-center items-center">
                여행 목록이 비었습니다.
              </div>
            ) : (
              <div className="text-xl text-[#8A8A8A] h-full flex justify-center items-center">
                <Loading></Loading>
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setData(initData)}
              className="btn m-2 text-sm bg-gray-400 hover:scale-105 active:scale-100"
            >
              <div className="flex flex-row w-full justify-center items-center">
                <VscDebugRestart size={18} />
                초기화
              </div>
            </button>
            <button
              className="btn hover:scale-105 active:scale-100 m-2 text-sm"
              onClick={savePlan}
            >
              <div className="flex flex-row w-full justify-center items-center">
                <AiOutlineSave size={18} />
                저장하기
              </div>
            </button>
          </div>
        </div>
        {data && data?.length > 1 ? (
          <div className="top-0 w-1/5 hidden xl:flex lg:flex-col lg:justify-center lg:items-center">
            <MyTravelDot />
          </div>
        ) : (
          <div className="top-0 w-1/5 hidden xl:flex lg:flex-col lg:justify-start lg:items-center">
            <div className="text-[rgba(83,199,240)] flex flex-col items-center text-center">
              <MdTimer size={32} />
              <p className="text-sm pt-2">추가하신 여행지가 너무 적습니다.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="w-full h-64 sm:h-auto  border-2 rounded-xl"></div>
  );
};
export default MyTravelList;
