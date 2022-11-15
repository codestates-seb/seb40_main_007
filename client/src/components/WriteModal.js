import { useState } from "react";
import { TiPencil } from "react-icons/ti";
// import { AiOutlineCloseCircle } from "react-icons/ai";

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
          <div className="fixed bottom-20 right-5 z-40">
            <div className="flex flex-col justify-center items-center w-[150px] bg-white rounded-lg">
              <button
                className="text-sm text-[rgb(83,199,240)] py-3"
                onClick={() => {
                  console.log("식당");
                  setShowModal(false);
                }}
              >
                식당 후기 작성
              </button>
              <button
                className="text-sm text-[rgb(83,199,240)] py-3"
                onClick={() => {
                  console.log("볼거리");
                  setShowModal(false);
                }}
              >
                볼거리 후기 작성
              </button>
              <button
                className="text-sm text-[rgb(83,199,240)] py-3"
                onClick={() => {
                  console.log("숙소");
                  setShowModal(false);
                }}
              >
                숙소 후기 작성
              </button>
            </div>
          </div>
          <button
            className="fixed inset-0"
            type="button"
            onClick={() => setShowModal(false)}
          ></button>
        </>
      ) : null}
    </>
  );
};

export default WriteModal;
