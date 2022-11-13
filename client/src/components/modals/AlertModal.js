import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

export default function AlertModal(props) {
  props = "사진을 등록해주세요!";
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="text-right">
                  <button
                    className="text-gray-400 mt-1 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <AiOutlineCloseCircle
                      size={18}
                      onClick={() => setShowModal(false)}
                    />
                  </button>
                </div>
                <div className=" mx-10">
                  <img
                    className="m-auto w-14 h-14"
                    src="images/logo.png"
                    alt="logo"
                  />
                  <div className="font-semibold my-3 text-base text-[rgb(83,199,240)]">
                    {props}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}{" "}
    </>
  );
}
