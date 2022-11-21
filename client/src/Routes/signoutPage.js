import LoginHeader from "../components/LoginHeader";
import ConfirmPasword from "../components/editpassword/ConfirmPassword";
import { useState } from "react";

export default function SignoutPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <LoginHeader />
      <div className="lg:w-full w-full h-screen align-baseline flex justify-center items-center">
        <div className="max-w-md p-2 px-10 m-auto border border-[rgba(83,198,240,0.4)] rounded-xl text-[rgb(83,199,240)]">
          <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2">
            Logout
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
          <div className="font-semibold text-[rgb(83,199,240)] text-center my-10 ">
            탈퇴 하시겠습니까?
          </div>

          <div className="w-fit m-auto">
            <button
              className="text-white font-semibold w-fit  bg-gradient-to-tl from-white to-[rgb(83,199,240)] py-2 mb-4 px-6 rounded-md"
              onClick={() => setShowModal(true)}
            >
              탈퇴
            </button>
            {showModal ? <ConfirmPasword setShowModal={setShowModal} /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
