import Header from "../components/Header";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function InitialPage() {
  const googleLoginHandler = () => {
    const GOOGLE_LOGIN_URL = `${process.env.REACT_APP_URL}/oauth2/authorization/google`;
    window.location.href = GOOGLE_LOGIN_URL;
  };
  const kakaoLoginHandler = () => {
    const KAKAO_LOGIN_URL = `${process.env.REACT_APP_URL}/oauth2/authorization/kakao`;
    window.location.href = KAKAO_LOGIN_URL;
  };
  const naverLoginHandler = () => {
    const NAVER_LOGIN_URL = `${process.env.REACT_APP_URL}/oauth2/authorization/naver`;
    window.location.href = NAVER_LOGIN_URL;
  };
  return (
    <>
      <Header />
      <div className="lg:w-full w-full h-screen align-baseline flex justify-center items-center bg-gradient-to-tl from-white to-[rgb(83,199,240)]">
        <div className="max-w-md p-2 px-10 m-auto">
          <div className="relative flex justify-center items-center">
            <img src="images/gradation.png" alt="gradation" className="w-60" />
            <img
              src="images/notfound_icon_w.png"
              alt="train"
              className="absolute w-16"
            />
          </div>
          <div className="text-center my-3">
            <button onClick={googleLoginHandler}>
              <FcGoogle className="w-8 h-8 inline m-1" />
            </button>
            <button onClick={kakaoLoginHandler}>
              <img
                src="images/kakao.png"
                alt="kakao"
                className="w-8 h-8 inline rounded-md"
              />
            </button>
            <button onClick={naverLoginHandler}>
              <img
                src="images/naver.png"
                alt="naver"
                className="w-8 h-8 inline rounded-md m-1"
              />
            </button>
          </div>
          <Link to="/login">
            <div className="text-white font-semibold text-center m-auto  bg-[rgba(83,199,240,0.7)] py-2 mb-3 mt-5 rounded-md hover:ring hover:ring-sky-300">
              Login
            </div>
          </Link>
          <Link to="/signup">
            <div className="text-white font-semibold m-auto text-center bg-[rgba(83,199,240,0.7)] py-2 mb-2 rounded-md hover:ring hover:ring-sky-300">
              SignUp
            </div>
          </Link>
          <Link to="/forgotPassword">
            <div className="text-center text-sm text-[rgb(49,124,151)] border-b border-[rgb(49,124,151)] w-fit m-auto pt-4">
              forgot password?
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
