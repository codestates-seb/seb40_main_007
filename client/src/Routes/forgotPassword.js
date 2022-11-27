import LoginHeader from "../components/LoginHeader";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    axios
      .post(`${process.env.REACT_APP_URL} /members/find-password`, {
        email: inputValue,
      })
      .then(() => {
        // -- 이 200일 경우
        swal("Check!", "메일로 임시 비밀번호를 발급해드렸습니다", "success");
        navigate("/");
      })
      .catch(function (error) {
        swal("Can't Found!", "올바르지 않은 이메일 입니다", "warning");
        console.log(error);
      });
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
          <div className="w-5/6 m-auto text-center">
            <div className="w-full border rounded-lg">
              <input
                value={inputValue}
                onChange={(e) => handleChange(e)}
                className="text-center p-2 w-full focus:outline-none focus:border focus:border-[rgb(83,199,240)] rounded-lg"
              />
            </div>
            <button
              className="text-white font-semibold w-fit mt-5 bg-gradient-to-tl from-white to-[rgb(83,199,240)] py-2 mb-4 px-6 rounded-md"
              onClick={() => handleClick()}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
