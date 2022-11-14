import { MdSort } from "react-icons/md";
import { useState } from "react";

const SortDropdown = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="relative">
        <button
          className="flex flex-row justify-center items-center space-x-1"
          onClick={() => handleButtonClick()}
        >
          <MdSort size={20}></MdSort>
          <span className="text-sm text-gray-700">정렬</span>
        </button>
        {showModal ? (
          <div>
            <ul className="absolute z-50 bg-white rounded-md w-16 m-1 p-1">
              <li className="text-sm text-[rgb(83,199,240)] text-center">
                최신순
              </li>
              <li className="text-sm text-[rgb(83,199,240)] text-center">
                거리순
              </li>
              <li className="text-sm text-[rgb(83,199,240)] text-center">
                추천순
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SortDropdown;
