/*eslint-disable*/
import EditPasswordInput from "../../components/editpassword/EditPasswordInput";
import { useState } from "react";
import ConfirmPasword from "../../components/editpassword/ConfirmPassword";
import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import swal from "sweetalert";
const EditPasswordPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [samePassword, setSamePassword] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkPassword = () => {
    console.log(newPassword);
    if (checkVerify(newPassword)) {
      if (newPassword === confirmPassword) {
        setShowModal(true);
        setSamePassword(true);
      } else {
        setShowModal(false);
        setSamePassword(false);
      }
    } else {
      swal("비밀번호는 8~16자로 영문, 숫자, 특수기호를 조합해서 사용하세요.");
    }
  };

  const checkVerify = (newPassword) => {
    const isValidPassword =
      /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/;
    return isValidPassword.test(newPassword); //유효성검사
  };

  console.log(newPassword, confirmPassword);

  return (
    <>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내역이요"} />
        <div className="w-full max-w-xl">
          <div className="mb-3 flex justify-start">
            <p className="lg:text-base text-sm ml-2 lg:pr-7 px-2 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
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
                  {samePassword ? null : "* 비밀 번호가 일치하지 않습니다 !"}
                </p>
              </div>
            </div>
            <div className="pt-20 gap-2 flex flex-col items-center">
              <button
                className="btn btn-hover"
                onClick={() => {
                  checkPassword();
                }}
              >
                수정완료
              </button>
            </div>
            {showModal ? (
              <ConfirmPasword
                setShowModal={setShowModal}
                confirmPassword={confirmPassword}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPasswordPage;
