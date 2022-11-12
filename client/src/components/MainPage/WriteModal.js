import { useState } from "react";
import { TiPencil } from "react-icons/ti";
import { AiOutlineCloseCircle } from "react-icons/ai";

const WriteModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="flex justify-center items-center w-[50px] h-[50px] bg-[rgb(83,199,240)] rounded-3xl fixed bottom-5 right-5"
        onClick={() => setShowModal(true)}
      >
        <TiPencil size={"40"} color={"#fff"} />
      </button>
      {showModal ? (
        <>
          <div className="fixed bottom-20 right-5 z-50">
            <div className="flex flex-col justify-center items-center w-[150px] bg-white rounded-lg">
              <button className="text-sm text-[rgb(83,199,240)] py-3 ">
                식당 후기 작성
              </button>
              <button className="text-sm text-[rgb(83,199,240)] py-3">
                볼거리 후기 작성
              </button>
              <button className="text-sm text-[rgb(83,199,240)] py-3">
                숙소 후기 작성
              </button>
              <button
                className="text-gray-400 absolute top-1 right-1"
                type="button"
                onClick={() => setShowModal(false)}
              >
                <AiOutlineCloseCircle size={18} />
              </button>
            </div>
          </div>
          <div className="bg-black fixed opacity-25 z-40 inset-0"></div>
        </>
      ) : null}
    </>
  );
};

export default WriteModal;
