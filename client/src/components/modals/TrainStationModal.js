import { useState } from "react";
import { IoMdPin } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { trainInfo } from "../../atoms/trainInfo";

export default function TrainStationModal() {
  const [showModal, setShowModal] = useState(false);
  const trainStationInfo = useRecoilValue(trainInfo);
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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                  {trainStationInfo.map((el) => {
                    return (
                      <div key={el.id}>
                        <img
                          src={`/images/기차역도장/${el.train}.png`}
                          alt={el.train}
                        />
                        <div className="text-xs text-center pt-1 font-semibold">
                          {el.train}
                        </div>
                      </div>
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
