import { useState } from "react";
import InfoEditMenu from "./InfoEditMenu";

const InfoEditBtn = () => {
  const [onModal, setOnModal] = useState(false);
  const handleOnModal = () => {
    setOnModal(!onModal);
  };
  return (
    <>
      <button onClick={handleOnModal} className="btn btn-hover text-xs lg:mr-2">
        정보 수정
      </button>
      {onModal ? <InfoEditMenu offModal={handleOnModal} /> : null}
    </>
  );
};

export default InfoEditBtn;
