import { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  editTrainStationState,
  editTitleState,
  editAdressState,
} from "../../atoms/editPageData";
import { trainInfo } from "../../atoms/trainInfo";

export default function EditTrainStationSelect() {
  const trainId = {
    0: "기차역 선택",
    1: "행신역",
    2: "서울역",
    3: "영등포역",
    4: "광명역",
    5: "수원역",
    6: "천안아산역",
    7: "오송역",
    8: "대전역",
    9: "김천구미역",
    10: "서대구역",
    11: "동대구역",
    12: "밀양역",
    13: "구포역",
    14: "부산역",
    15: "울산역",
    16: "신경주역",
    17: "포항역",
  };

  const trainStationInfo = useRecoilValue(trainInfo);
  const [trainStation, setTrainStation] = useRecoilState(editTrainStationState);
  const [showModal, setShowModal] = useState(false);
  const [, setTitleState] = useRecoilState(editTitleState);
  const [, setAdressState] = useRecoilState(editAdressState);
  return (
    <>
      <div className="pt-20 font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 pb-2 mb-5  text-18 text-[rgb(83,199,240)]">
        역 선택
      </div>
      <button
        className="text-sm text-[rgb(83,199,240)] hover:shadow-lg outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="text-2xl flex items-center font-semibold border-[rgb(83,199,240)] w-fit px-3 py-2">
          {trainId[trainStation]}
          <BiCaretDown
            className="inline text-[rgb(83,199,240)] ml-2"
            size={26}
          />
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
                      <button
                        key={el.id}
                        onClick={() => {
                          setTrainStation(el.id);
                          setShowModal(false);
                          setTitleState(trainId[el.id]);
                          setAdressState(trainStationInfo[el.id - 1].adress);
                        }}
                      >
                        <img
                          src={`/images/기차역도장/${el.train}.png`}
                          alt={el.train}
                        />
                        <div className="text-[10px] text-center pt-1 font-semibold">
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
