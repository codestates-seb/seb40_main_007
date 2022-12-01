import { useState } from "react";
import { IoMdPin } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { trainInfo } from "../../atoms/trainInfo";
import { makeActive, makeHover } from "../../utils/tailwindFunc";

export default function TrainStationModal({ setStation }) {
  const [showModal, setShowModal] = useState(false);
  const trainStationInfo = useRecoilValue(trainInfo);
  const hoverStr = "scale-110 rounded-lg";
  const activeStr = "scale-95 rounded-lg";
  const buttonHover = makeHover(hoverStr);
  const buttonActive = makeActive(activeStr);
  return (
    <>
      <button
        className="ease-linear transition-all duration-150 p-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <IoMdPin className="inline ml-1 text-[rgb(83,199,240)]" size={32} />
      </button>
      {showModal ? (
        <>
          <div className="px-2 sm:px-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="text-right">
                  <button
                    className="text-gray-400 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <AiOutlineCloseCircle size={18} />
                  </button>
                </div>
                <div className="px-3 pb-3 relative grid grid-cols-5 gap-4">
                  <button
                    className={`${buttonHover} ${buttonActive} text-xs sm:text-sm`}
                    onClick={() => {
                      setStation(0);
                      setShowModal(false);
                    }}
                  >
                    전체 보기
                  </button>
                  {trainStationInfo.map((el) => {
                    return (
                      <button
                        className={`${buttonHover} ${buttonActive} `}
                        key={el.id}
                        onClick={() => {
                          setStation(el.id);
                          setShowModal(false);
                        }}
                      >
                        <img
                          src={`/images/기차역도장/${el.train}.png`}
                          alt={el.train}
                        />
                        <div className="text-xs text-center pt-1 font-semibold">
                          {el.train}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black "></div>
        </>
      ) : null}
    </>
  );
}
