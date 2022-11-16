import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative">
      <button className="flex items-center" onClick={() => setShowModal(true)}>
        <img src="/images/profile.png" alt="profile" className="w-8 h-8" />
        <span className="text-xl text-[rgb(83,199,240)] ml-2 hidden sm:block">
          닉네임
        </span>
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
              <Link to="/mypage">
                <div className="mb-1 text-base text-[rgb(83,199,240)] text-center">
                  마이페이지
                </div>
              </Link>
              <Link to="/logout">
                <div className="mt-5 mb-3 text-base text-[rgb(83,199,240)] text-center">
                  로그아웃
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
