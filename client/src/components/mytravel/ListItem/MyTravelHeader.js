import { BsList, BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import ListModal from "../../modals/MyTravelListModal";
import MyTravelAddModal from "../../modals/MyTravelAddModal";
const MyTravelHeader = () => {
  const [onListModal, setOnListModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full">
      <div className="w-4/5 flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <h2 className="pt-1.5 text-base font-semibold text-[rgb(83,199,240)]">
            총 소요 시간 2시간
          </h2>
        </div>
        <div className="w-40 flex justify-end">
          <button
            onClick={() => (setShowModal(true), setOnListModal(false))}
            className="flex flex-row items-center"
          >
            <BsPlusLg
              className="hover:scale-110 mr-2"
              color={"rgb(83, 199, 240)"}
              size={22}
            />
          </button>
          {showModal ? <MyTravelAddModal setShowModal={setShowModal} /> : null}
          <button
            onClick={() => setOnListModal(true)}
            className="flex flex-row items-center"
          >
            <BsList
              className="hover:scale-110"
              color={"rgb(83, 199, 240)"}
              size={30}
            />
          </button>
          {onListModal ? <ListModal setOnListModal={setOnListModal} /> : null}
        </div>
      </div>
    </div>
  );
};

export default MyTravelHeader;
