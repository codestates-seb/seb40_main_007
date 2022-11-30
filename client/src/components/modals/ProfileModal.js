// import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { userName, userAvatar, isAdmin } from "../../atoms/loginData";
import { useRecoilValue, useRecoilState } from "recoil";

export default function ProfileModal() {
  const [showModal, setShowModal] = useState(false);
  const name = useRecoilValue(userName);
  const avatar = useRecoilValue(userAvatar);
  const [admin] = useRecoilState(isAdmin);

  return (
    <div className="relative">
      {name === "" ? null : (
        <button
          className="flex items-center"
          onClick={() => setShowModal(true)}
        >
          <img src={avatar} alt="profileImg" className="w-8 h-8 rounded-full" />
          <span className="text-xl text-[rgb(83,199,240)] ml-2 hidden sm:block">
            {name}
          </span>
        </button>
      )}
      {showModal ? (
        <>
          <div className="absolute w-32 top-11 right-1 outline-none focus:outline-none z-20">
            <div className="rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="mb-3">
                {admin ? (
                  <Link to="/admin/report">
                    <div className="mt-5 mb-1 text-base text-[rgb(83,199,240)] text-center">
                      관리페이지
                    </div>
                  </Link>
                ) : null}
                <Link to="/mypage">
                  <div className="mt-5 mb-1 text-base text-[rgb(83,199,240)] text-center">
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
          <button
            className="fixed inset-0"
            type="button"
            onClick={() => setShowModal(false)}
          ></button>
        </>
      ) : null}
    </div>
  );
}
