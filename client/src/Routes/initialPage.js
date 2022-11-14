import Header from "../components/Header";
import { FcGoogle } from "react-icons/fc";

export default function InitialPage() {
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
            <FcGoogle className="w-8 h-8 inline m-1" />
            <img
              src="images/kakao.png"
              alt="kakao"
              className="w-8 h-8 inline rounded-md"
            />
            <img
              src="images/naver.png"
              alt="naver"
              className="w-8 h-8 inline rounded-md m-1"
            />
          </div>
          <div className="text-white font-semibold text-center m-auto bg-gradient-to-tl from-white to-[rgb(83,199,240)] py-2 mb-3 rounded-md hover:ring hover:ring-sky-300">
            Login
          </div>
          <div className="text-white font-semibold m-auto text-center  bg-gradient-to-tl from-white to-[rgb(83,199,240)] py-2 mb-2 rounded-md hover:ring hover:ring-sky-300">
            SignUp
          </div>
        </div>
      </div>
    </>
  );
}
