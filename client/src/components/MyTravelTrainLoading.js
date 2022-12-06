// import { useState } from "react";
import Loading from "./Loading";

const MyTravelTrainLoading = ({ props, runTimeOut, reload, savePlan }) => {
  // 사용하시는 곳에서   const [loading, setLoading] = useState(false); 추가하시고
  //  {loading ? <TrainLoading props={"업로드 중입니다..."} /> : null} 이런식으로 사용하시면 됩니다!
  // const [runTimeOut, setRunTimeOut] = useState(false);
  // setTimeout(() => {
  //   setRunTimeOut(true);
  // }, 10000);

  // const reload = () => {
  //   setRunTimeOut(false);
  //   window.location.reload();
  // };
  return (
    <div className="fixed bottom-0 right-0 flex flex-col justify-center items-center w-full h-full bg-[rgba(0,0,0,0.3)] z-10">
      <Loading />
      {runTimeOut ? (
        <>
          <span className="font-bold text-gray-100 mt-2">
            현재 요청이 너무 많습니다.
          </span>
          <span className="font-bold text-gray-100">
            새로고침 버튼을 눌러주세요.
          </span>
          <button onClick={reload} className="btn text-base">
            새로고침
          </button>
          <button onClick={savePlan} className="btn text-base mt-2">
            재시도
          </button>
        </>
      ) : (
        <span className="font-bold text-gray-100 mt-2">{props}</span>
      )}
    </div>
  );
};

export default MyTravelTrainLoading;
