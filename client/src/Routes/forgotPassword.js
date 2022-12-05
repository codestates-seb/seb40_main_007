import LoginHeader from "../components/LoginHeader";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import swal from "sweetalert";
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);
  const handleClick = () => {
    axios
      .post(`${process.env.REACT_APP_URL}/members/find-password`, {
        address: inputValue,
      })
      .then(() => {
        // -- 이 200일 경우
        swal(
          "Check Email!",
          "메일로 임시 비밀번호를 발급해드렸습니다",
          "success"
        );
        navigate("/");
      })
      .catch(function (error) {
        if (error.response.status === 404) {
          swal("Can't Found!", "올바르지 않은 이메일 입니다", "error");
        } else console.log(error);
      });
  };

  return (
    <>
      <LoginHeader />
      <div className="lg:w-full w-full h-screen align-baseline flex justify-center items-center bg-[rgba(235,235,235,0.34)]">
        <div className="max-w-md p-2 lg:px-10 m-auto rounded-xl text-[rgb(83,199,240)] bg-white shadow-lg">
          <div className="font-semibold border-b-2  w-fit lg:ml-0 ml-2 lg:px-4 px-2 py-2 lg:text-base text-sm">
            비밀번호 찾기
          </div>
          <div className="relative flex justify-center items-center">
            <img
              src="/images/logo.png"
              alt="gradation"
              className="lg:w-40 w-20 lg:mx-14 lg:my-7 my-5"
            />
          </div>
          <div className="font-semibold text-[rgb(83,199,240)] text-center my-5 lg:mx-0 mx-14">
            이메일을 입력하세요
          </div>
          <div className="m-auto text-center">
            <div className="w-full border rounded-lg">
              <input
                value={inputValue}
                onChange={(e) => handleChange(e)}
                className="text-center p-2 w-full focus:outline-none focus:border focus:border-[rgb(83,199,240)] rounded-lg lg:text-base text-sm"
              />
            </div>
            <button
              className="text-white font-semibold w-fit mt-5 lg:hover:bg-gray-400 bg-[rgb(83,199,240)] py-2 mb-4 px-6 rounded-md"
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
