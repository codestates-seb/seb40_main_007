import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const ConfirmPasword = ({ setShowModal }) => {
  const [isOk, setIsOk] = useState(false);
  const [isHide, setisHide] = useState(true);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#57545469]">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="text-right">
              <button
                className="text-gray-400 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mt-1 mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                <AiOutlineCloseCircle size={18} />
              </button>
            </div>
            <div className="text-center mx-5 flex flex-col items-center">
              <img className="w-9" src="../images/logo.png" alt="logo" />
              <p className="text-lg p-2 text-[rgb(83,199,240)] font-bold">
                비밀번호를 입력하세요
              </p>
              <div
                className={`m-2 p-2 w-4/5 rounded-lg border-2 border-[rgb(83,199,240)] flex items-center ${
                  isOk ? "animate-waving border-red-500 ani" : null
                }`}
              >
                <input
                  type={`${isHide ? "password" : "text"}`}
                  className="w-full focus:outline-none"
                  onClick={() => setIsOk(false)}
                ></input>
                <button onClick={() => setisHide(!isHide)}>
                  {isHide ? (
                    <BsEyeSlashFill
                      size={18}
                      color="rgba(156, 163, 175, 0.5)"
                    ></BsEyeSlashFill>
                  ) : (
                    <BsEyeFill
                      size={18}
                      color="rgba(156, 163, 175, 0.5)"
                    ></BsEyeFill>
                  )}
                </button>
              </div>
              <p className="w-4/5 text-xs text-red-500 font-medium text-left">
                {isOk ? "* 비밀 번호가 틀렸습니다 !" : null}
              </p>
              <div className="py-5">
                <button className="btn btn-hover" onClick={() => setIsOk(true)}>
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
