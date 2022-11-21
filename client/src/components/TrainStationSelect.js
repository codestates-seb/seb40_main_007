import { useState } from "react";
import { IoMdPin } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useParams, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { trainInfo } from "../atoms/trainInfo";

export default function TrainStationSelect() {
  const trainStationInfo = useRecoilValue(trainInfo);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  // trainStation 정보 id 가 1부터 시작하므로 -1을 해주어야 한다.
  const [trainStation, setTrainStation] = useState(
    trainStationInfo[id - 1].train
  );
  return (
    <>
      <button
        className="text-sm text-[rgb(83,199,240)] hover:shadow-lg outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="text-2xl flex items-center font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-3 py-2">
          {trainStation}
          <IoMdPin className="inline text-[rgb(83,199,240)] ml-2" size={26} />
        </div>
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
                      <Link
                        to={`/main/${el.id}`}
                        onClick={() => {
                          setShowModal(false);
                          setTrainStation(el.train);
                        }}
                        key={el.id}
                      >
                        <div>
                          <img
                            src={`/images/기차역도장/${el.train}.png`}
                            alt={el.train}
                          />
                          <div className="text-[10px] text-center pt-1 font-semibold">
                            {el.train}
                          </div>
                        </div>
                      </Link>
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
