import { useEffect, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { postTrainStationState } from "../../atoms/postInfo";
import { trainInfo } from "../../atoms/trainInfo";

export default function PostTrainStationSelect() {
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
  const { id } = useParams();
  useEffect(() => {
    setTrainStation(id);
  }, []);

  const trainStationInfo = useRecoilValue(trainInfo);
  const [, setTrainStation] = useRecoilState(postTrainStationState);
  const [trainName, setTrainName] = useState(trainId[id]);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="pt-20 font-semibold border-b-2 border-[rgb(83,199,240)] w-fit lg:px-5 px-3 pb-2 mb-5 lg:text-base text-sm text-[rgb(83,199,240)]">
        역 선택
      </div>
      <button
        className="text-sm text-[rgb(83,199,240)] hover:shadow-lg outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="lg:text-2xl text-base flex items-center font-semibold border-[rgb(83,199,240)] w-fit px-3 lg:py-2">
          {trainName}
          <BiCaretDown
            className="inline text-[rgb(83,199,240)] lg:ml-2"
            size={26}
          />
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto lg:my-6 mx-auto lg:max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col lg:w-full bg-white outline-none focus:outline-none">
                <div className="text-right">
                  <button
                    className="text-gray-400 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <AiOutlineCloseCircle size={18} />
                  </button>
                </div>
                <div className="lg:px-3 lg:pb-3 px-1 pb-1 relative grid grid-cols-5 lg:gap-4 gap-1">
                  {trainStationInfo.map((el) => {
                    return (
                      <Link
                        to={`/post/${el.id}`}
                        onClick={() => {
                          setTrainStation(el.id);
                          setTrainName(trainId[el.id]);
                          setShowModal(false);
                        }}
                        key={el.id}
                      >
                        <div>
                          <img
                            src={`/images/기차역도장/${el.train}.png`}
                            alt={el.train}
                            className="lg:w-full w-10"
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
