import { BsList, BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import ListModal from "../../modals/MyTravelListModal";
import MyTravelAddModal from "../../modals/MyTravelAddModal";
import { wholeTimeData } from "../../../atoms/mypage/myTravelData";
import { useRecoilValue } from "recoil";
import { timeFunc } from "../../../utils/timeFunc";
import { MdTimer } from "react-icons/md";
import MyTravelTimeModal from "../../modals/MyTravelTimeModal";
const MyTravelHeader = () => {
  const [onListModal, setOnListModal] = useState(false);
  const [onTimeModal, setTimeModal] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const wholeTime = useRecoilValue(wholeTimeData);
  // 시간 계산 다시해야함

  return (
    <div className="w-full">
      <div className=" w-full  flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <h2 className="pt-1.5 text-base font-semibold text-[rgb(83,199,240)]">
            총 소요 시간 : {wholeTime ? timeFunc(wholeTime) : null}
          </h2>
        </div>
        <div className="w-40 flex lg:justify-center justify-end lg:mr-5">
          <button
            onClick={() => (setTimeModal(true), setOnListModal(false))}
            className="xl:hidden hover:scale-110 hover:bg-gray-200 active:bg-slate-100 active:scale-90 rounded-full p-1 text-[rgba(83,199,240)]"
          >
            <MdTimer size={28} />
          </button>
          {onTimeModal ? (
            <MyTravelTimeModal setTimeModal={setTimeModal} />
          ) : null}
          <button
            onClick={() => (setShowModal(true), setOnListModal(false))}
            className="flex flex-row items-center"
          >
            <BsPlusLg
              className="hover:scale-110 hover:bg-gray-200 active:bg-slate-100 active:scale-90 rounded-full p-1"
              color={"rgb(83, 199, 240)"}
              size={30}
            />
          </button>
          {showModal ? <MyTravelAddModal setShowModal={setShowModal} /> : null}
          <button
            onClick={() => (setOnListModal(true), setTimeModal(false))}
            className="flex flex-row items-center"
          >
            <BsList
              className="hover:scale-110 hover:bg-gray-200 active:bg-slate-100 active:scale-90 rounded-full p-1"
              color={"rgb(83, 199, 240)"}
              size={34}
            />
          </button>
          {onListModal ? <ListModal setOnListModal={setOnListModal} /> : null}
        </div>
      </div>
    </div>
  );
};

export default MyTravelHeader;
