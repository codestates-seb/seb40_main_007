//Post.js 에서 import 시키고 있습니다
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiListPlus } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const TestMyTravelModal = (props) => {
  // 여행리스트 배열
  props = ["기본목록", "부산여행", "영등포 정복"];
  // 모달 보이기
  const [showModal, setShowModal] = useState(false);
  const [showMyAdd, setShowMyAdd] = useState(false);
  const [showInput, setShowInput] = useState(false);
  // 손봐야함 뭔가 엄청뜨는데..?
  // console.log(showInput);
  return (
    <>
      {/* 플러스 버튼 */}
      <button
        className="flex justify-center items-center w-fit rounded-3xl"
        onClick={() => setShowModal(true)}
      >
        <BiListPlus size={30} className="text-gray-500 active:scale-90" />
      </button>
      {showModal ? (
        <>
          <div className="w-fit ">
            {/* showMyModal은 안의 내용물 자체를 바꿉니다 */}
            {showMyAdd ? (
              <div className="fixed top-50 left-45 shadow-lg bg-white z-10 rounded-lg">
                {/* 닫힘버튼 */}
                <div className="cursor-pointer text-gray-500 rounded-full active:scale-90">
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
              <div className="w-36 pl-2 top-4 right-2 absolute shadow-lg shadow-black z-30 p-1 bg-white rounded-lg flex flex-row">
                <div className="flex flex-col">
                  <div className="w-full flex justify-end">
                    {/* 닫힘버튼 */}
                    <AiOutlineCloseCircle
                      className="cursor-pointer mt-0.5 text-gray-500 rounded-full active:scale-90"
                      size={17}
                      onClick={() => {
                        setShowMyAdd(false);
                        setShowModal(false);
                        setShowInput(false);
                      }}
                    />
                  </div>
                  {/* props로 받아온 여행리스트 버튼들 */}
                  {props.map((el, index) => (
                    <button
                      key={index}
                      className={`w-32 text-sm text-[rgb(83,199,240)] py-1 block pl-5 text-start hover:bg-gray-300 active:bg-gray-200 hover:font-semibold ${
                        index === props.length - 1 ? "mb-1" : ""
                      }`}
                      onClick={() => {
                        setShowModal(false);
                        setShowMyAdd(false);
                      }}
                    >
                      {el}
                    </button>
                  ))}
                  <div className="border-t-2 "></div>
                  {/* 가장 하단의 내 목록 추가 버튼 */}
                  {showInput ? (
                    <div className="mt-2 mx-2 mb-2 border-2 border-[rgb(83,199,240)] flex flex-row justify-center items-center ">
                      <input
                        className="pl-2 w-20 h-6 text-xs outline-none "
                        type="text"
                        onChange={(e) => console.log(e.target.value)}
                      ></input>
                      <button
                        className="h-full flex flex-row justify-center items-center hover:bg-gray-300 active:bg-gray-200"
                        onClick={() => setShowInput(false)}
                      >
                        <BsPlusLg
                          className="inline m-1"
                          color="rgb(83,199,240)"
                          size={12}
                        />
                      </button>
                    </div>
                  ) : (
                    // 내목록 추가 누를 시 input 버튼나옴
                    <button
                      className="w-full mt-1 hover:bg-gray-300 active:bg-gray-200 text-sm   text-[rgb(83,199,240)] py-2"
                      onClick={() => setShowInput(true)}
                    >
                      <BsPlusLg className="inline ml-3 mr-1" size={12} />
                      <span className="pr-3"> 내목록 추가</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* 화면 눌렀을 경우 모달 닫힘 버튼 */}
        </>
      ) : null}
    </>
  );
};

export default TestMyTravelModal;
