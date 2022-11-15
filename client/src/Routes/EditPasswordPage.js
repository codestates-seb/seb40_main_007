import EditPasswordInput from "../components/editpassword/EditPasswordInput";
import { useState } from "react";
import ConfirmPasword from "../components/editpassword/ConfirmPassword";
const EditPassword = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="mb-3 flex justify-start">
        <p className="ml-2 pr-7 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
          내 비밀번호 수정
        </p>
      </div>
      <div className="w-2/5 flex flex-col items-center">
        <EditPasswordInput />
        <div className="pt-20 gap-2 flex flex-col items-center">
          <button className="btn" onClick={() => setShowModal(!showModal)}>
            수정완료
          </button>
        </div>
        {showModal ? <ConfirmPasword setShowModal={setShowModal} /> : null}
      </div>
    </div>
  );
};

export default EditPassword;
