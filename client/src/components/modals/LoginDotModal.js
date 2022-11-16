import { BiDotsVertical } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

export default function LoginDotModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative">
      <button className="flex items-center" onClick={() => setShowModal(true)}>
        <BiDotsVertical />
      </button>
      {showModal ? (
        <div className="absolute w-44 right-0 outline-none focus:outline-none">
          <div className="rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
            <div className="mx-10 mb-3">
              <div className="my-3 text-base text-[rgb(83,199,240)] text-center">
                로그인
              </div>
              <div className="mt-5 mb-3 text-base text-[rgb(83,199,240)] text-center">
                회원가입
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
