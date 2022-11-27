import LoginHeader from "../components/LoginHeader";
import swal from "sweetalert";

import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const userLogout = () => {
    swal("Check!", "메일로 임시 비밀번호를 발급해드렸습니다", "success");
    navigate("/");
  };

  return (
    <>
      <LoginHeader />
      <div className="lg:w-full w-full h-screen align-baseline flex justify-center items-center bg-[rgba(235,235,235,0.34)]">
        <div className="max-w-lg p-2 px-10 m-auto border rounded-xl text-[rgb(83,199,240)] bg-white shadow-lg">
          <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-3 py-2">
            비밀번호 찾기
          </div>
          <div className="relative flex justify-center items-center">
            <img
              src="images/gradation.png"
              alt="gradation"
              className="w-60 mx-7"
            />
            <img
              src="images/notfound_icon_w.png"
              alt="train"
              className="absolute w-16"
            />
          </div>
          <div className="font-semibold text-[rgb(83,199,240)] text-center my-5 ">
            아이디를 입력하세요
          </div>
          <div className="w-fit m-auto text-center">
            <div className="w-full border">
              <input className="p-2 focus:outline-none focus:border focus:border-[rgb(83,199,240)]" />
            </div>
            <button
              className="text-white font-semibold w-fit mt-5 bg-gradient-to-tl from-white to-[rgb(83,199,240)] py-2 mb-4 px-6 rounded-md"
              onClick={() => userLogout(false)}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
