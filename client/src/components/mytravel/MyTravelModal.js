//Post.js 에서 import 시키고 있습니다
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiListPlus } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MyTravelModal = (props) => {
  // 여행리스트 배열
  props = ["기본목록", "부산여행", "영등포 정복"];
  // 모달 보이기
  const [showModal, setShowModal] = useState(false);
  const [showMyAdd, setShowMyAdd] = useState(false);
  return (
    <>
      {/* 플러스 버튼 */}
      <button
        className="flex justify-center items-center w-fit rounded-3xl"
        onClick={() => setShowModal(true)}
      >
        <BiListPlus size={30} className="text-gray-500" />
      </button>
      {showModal ? (
        <>
          <div className="w-fit relative bg-rgba(0,0,0,0.3)">
            {/* showMyAdd은 안의 내용물 자체를 바꿉니다 */}
            {showMyAdd ? (
              <div className="fixed shadow-lg bg-red-500 z-30 rounded-lg">
                {/* 닫힘버튼 */}
                <div className="flex justify-end">
                  <AiOutlineCloseCircle
                    onClick={() => {
                      setShowMyAdd(false);
                      setShowModal(false);
                    }}
                  />
                </div>
                <img
                  className="w-9 m-auto"
                  src="../images/logo.png"
                  alt="logo"
                />
                <p className="text-lg p-2 text-[rgb(83,199,240)] font-bold">
                  새 목록을 추가하세요
                </p>
                <div className="p-2 w-4/5 rounded-lg border-2 border-[rgb(83,199,240)] m-auto">
                  <input className="w-full focus:outline-none"></input>
                </div>
                <div className="py-5 text-center">
                  <button
                    className="btn btn-hover"
                    onClick={() => {
                      setShowMyAdd(false);
                      setShowModal(false);
                    }}
                  >
                    추가
                  </button>
                </div>
              </div>
            ) : (
              <div className="fixed top-50 left-50 z-10 p-1 shadow-lg bg-white rounded-lg">
                <div className="flex justify-end">
                  {/* 닫힘버튼 */}
                  <AiOutlineCloseCircle
                    onClick={() => {
                      setShowMyAdd(false);
                      setShowModal(false);
                    }}
                  />
                </div>
                {/* props로 받아온 여행리스트 버튼들 */}
                {props.map((el) => (
                  <button
                    key={el}
                    className="text-sm text-[rgb(83,199,240)] py-2 block ml-5"
                    onClick={() => {
                      setShowModal(false);
                      setShowMyAdd(false);
                    }}
                  >
                    {el}
                  </button>
                ))}

                {/* 가장 하단의 내 목록 추가 버튼 */}
                <button
                  className="text-sm text-[rgb(83,199,240)] py-2"
                  onClick={() => setShowMyAdd(true)}
                >
                  <BsPlusLg className="inline ml-3 mr-1" size={10} />
                  <span className="pr-3"> 내목록 추가</span>
                </button>
              </div>
            )}
          </div>
          {/* 화면 눌렀을 경우 모달 닫힘 버튼 */}
        </>
      ) : null}
    </>
  );
};

export default MyTravelModal;
