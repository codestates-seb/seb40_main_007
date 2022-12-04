import { AiOutlineCloseCircle } from "react-icons/ai";
import MyTravelDot from "../mytravel/MyTravelDot";

const MyTravelTimeModal = ({ setTimeModal }) => {
  const isModal = true;
  //   ${window.screen.width > 1024 ? setTimeModal(false) : null}
  return (
    <>
      <div
        className={` xl:hidden flex flex-col align-middle p-1 sm:w-48 w-2/5 right-20 mt-8 sm:mt-0 lg:right-[11rem] sm:top-[13rem] bg-white text-[rgb(83,199,240)] text-sm rounded-2xl border-2 absolute z-20
      `}
      >
        <div className="w-full flex justify-between border-b-2">
          <p className="ml-2 text-sm font-semibold">각 소요 시간</p>
          <AiOutlineCloseCircle
            onClick={() => setTimeModal(false)}
            className="cursor-pointer text-end"
            size="18"
            color="#bab9b2"
          />
        </div>
        <MyTravelDot isModal={isModal}></MyTravelDot>
      </div>
      <button
        className="inset-0 fixed cursor-default z-10"
        onClick={() => setTimeModal(false)}
      ></button>
    </>
  );
};

export default MyTravelTimeModal;
