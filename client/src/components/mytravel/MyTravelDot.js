// import { IoMdPin } from "react-icons/io";
// import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { MdTimer } from "react-icons/md";

export default function MyTravelDot(props) {
  const [showModal, setShowModal] = useState(false);
  const myTravelList = props.props;
  const listLength = myTravelList.length;
  console.log(myTravelList);
  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="text-[rgba(83,199,240)] w-10"
      >
        <MdTimer size={32} />
      </button>
      {showModal ? (
        <div>
          {listLength !== 0 ? (
            // 1번째 동그라미 경우
            <div className="mt-[46px] h-[544px] flex flex-col items-center text-gray-400">
              <div className="w-10 h-10 bg-[rgba(83,199,240,0.5)] rounded-full mb-3 flex justify-center items-center text-white">
                1
              </div>
              {myTravelList.map((el, idx) => {
                return (
                  <div key={el} className="relative">
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
                      className={
                        // 맨마지막 인덱스의 소요시간 텍스트 경우
                        idx === listLength - 1
                          ? "absolute text-sm w-20 top-[-12px] left-9 text-gray-400"
                          : "absolute text-sm w-20 top-[-12px] left-6 text-gray-400"
                      }
                    >
                      {el}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
          <button
            className="fixed inset-0"
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
          ></button>
        </div>
      ) : null}
    </>
  );
}
