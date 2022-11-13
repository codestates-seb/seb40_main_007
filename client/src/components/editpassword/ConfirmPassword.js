import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
const ConfirmPasword = ({ setShowModal }) => {
  const [isOk, setIsOk] = useState(false);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#57545469]">
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
            <div className="text-center mx-5 flex flex-col items-center">
              <img className="w-9" src="images/logo.png" alt="logo" />
              <p className="text-lg p-2 text-[rgb(83,199,240)] font-bold">
                비밀번호를 입력하세요
              </p>
              <input
                className={`m-2 p-2 w-4/5 rounded-lg border-2  focus:outline-none focus:[border-[rgb(83,199,240)] border-4] border-[rgb(83,199,240)] ${
                  isOk ? "animate-waving border-red-500 ani" : null
                }`}
                onClick={() => setIsOk(false)}
              ></input>
              <p className="w-4/5 text-xs text-red-500 font-medium text-left">
                {isOk ? "* 비밀 번호가 틀렸습니다 !" : null}
              </p>
              <div className="py-5">
                <button className="btn" onClick={() => setIsOk(true)}>
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmPasword;
