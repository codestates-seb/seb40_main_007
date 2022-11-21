import EditPasswordInput from "../../components/editpassword/EditPasswordInput";
import { useState } from "react";
import ConfirmPasword from "../../components/editpassword/ConfirmPassword";
import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";

const EditPasswordPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [samePasswrod, setSamePassword] = useState(true);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkPaswword = () => {
    if (newPassword === confirmPassword) {
      setShowModal(true);
      setSamePassword(true);
    } else {
      setShowModal(false);
      setSamePassword(false);
    }
  };
  return (
    <>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내역이요"} />
        <div className="w-full max-w-xl">
          <div className="mb-3 flex justify-start">
            <p className="ml-2 pr-7 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
              내 비밀번호 수정
            </p>
          </div>
          <div className="flex flex-col items-center">
            <EditPasswordInput
              setNewPassword={setNewPassword}
              setConfirmPassword={setConfirmPassword}
            />
            <div className="flex justify-center">
              <div className="mt-2 text-xs text-red-500 font-medium absolute">
                <p>
                  {samePasswrod ? null : "* 비밀 번호가 일치하지 않습니다 !"}
                </p>
              </div>
            </div>
            <div className="pt-20 gap-2 flex flex-col items-center">
              <button className="btn btn-hover" onClick={checkPaswword}>
                수정완료
              </button>
            </div>
            {showModal ? <ConfirmPasword setShowModal={setShowModal} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPasswordPage;
