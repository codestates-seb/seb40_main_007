//Post.js 에서 import 시키고 있습니다
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiListPlus } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { myTravelListData } from "../../atoms/mypage/myTravelData";
import { useRecoilState } from "recoil";
import axios from "axios";
import { accessToken } from "../../atoms/loginTest";
import swal from "sweetalert";

const MyTravelModal = ({ boardId }) => {
  // 인증 토큰
  const [TOKEN] = useRecoilState(accessToken);

  // 내 여행 목록
  const [myTravelList, setMyTravelList] = useRecoilState(myTravelListData);

  // 모달 보이기
  const [showModal, setShowModal] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");

  // 내 여행 목록 추가
  const addPlan = () => {
    setShowInput(false);
    const URL = `${process.env.REACT_APP_URL}/planners`;
    const data = {
      plannerName: inputText,
    };
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .post(URL, data, config)
      .then((response) => {
        const data = response.data.items;
        console.log("list add 성공", data);
        setMyTravelList(data);
      })
      .catch((error) => {
        console.log("Add TravelList Fail :", error);
      });
  };

  // 내 여행 목록에 게시글 추가
  const addMyTravelPost = (plannerId) => {
    setShowModal(false);
    console.log(boardId, plannerId);
    const URL = `${process.env.REACT_APP_URL}/boardplanners/${boardId}/${plannerId}`;
    // const data = {};
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .post(URL, {}, config)
      .then(() => {
        console.log("Add My Travel Post 성공");
      })
      .catch((error) => {
        console.log("Add My Travel Post Fail :", error.response.status);
        if (error.response.status === 409) {
          swal(
            "추가에 실패하였습니다",
            "해당 목록이 꽉 차있거나 이미 추가한 게시글 입니다."
          );
        }
      });
  };
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
            <div className="w-36 pl-2 top-4 right-1 absolute  shadow-[0px_0px_2px_3px_rgba(0,0,0,0.3)] z-30 p-1 bg-white rounded-lg flex flex-row">
              <div className="h-52 flex flex-col overflow-y-scroll scrollbar-hide overflow-x-hidden">
                <div className="w-full flex justify-end">
                  {/* 닫힘버튼 */}
                  <AiOutlineCloseCircle
                    className="fixed cursor-pointer mt-0.5 text-gray-500 rounded-full active:scale-90"
                    size={17}
                    onClick={() => {
                      setShowModal(false);
                      setShowInput(false);
                    }}
                  />
                </div>
                {/* props로 받아온 여행리스트 버튼들 */}
                {myTravelList?.length !== 0 ? (
                  myTravelList?.map((list, index) => (
                    <button
                      key={index}
                      className={`w-32  text-sm text-[rgb(83,199,240)] py-1 block pl-5 text-start hover:bg-gray-200 active:bg-gray-100 hover:font-semibold 
                      ${index === 0 ? "mt-5" : ""}
                      ${index === myTravelList?.length - 1 ? "mb-1" : ""}`}
                      onClick={() => {
                        addMyTravelPost(list.plannerId);
                      }}
                    >
                      <p className="w-full truncate">{list.plannerName}</p>
                    </button>
                  ))
                ) : (
                  <p
                    className={`w-32 text-sm text-[rgb(83,199,240)] py-1 block pl-5 text-start `}
                  >
                    비어있습니다
                  </p>
                )}
                <div className="border-t-2 "></div>
                {/* 가장 하단의 내 목록 추가 버튼 */}
                {showInput ? (
                  <div className="mt-2 mx-2 mb-2 border-2 border-[rgb(83,199,240)] flex flex-row justify-center items-center ">
                    <input
                      className="pl-2 w-20 h-6 text-xs outline-none "
                      type="text"
                      onChange={(e) => setInputText(e.target.value)}
                    ></input>
                    <button
                      className={`h-full flex flex-row justify-center items-center hover:scale-125 active:scale-90
                      ${
                        inputText.length !== 0
                          ? "text-[rgb(83,199,240)]"
                          : "text-gray-400 pointer-events-none"
                      }
                      `}
                      onClick={addPlan}
                    >
                      <BsPlusLg className={`inline m-1 `} size={12} />
                    </button>
                  </div>
                ) : (
                  // 내목록 추가 누를 시 input 버튼나옴
                  <button
                    className="w-full mt-1 hover:bg-gray-200 active:bg-gray-100 text-sm text-[rgb(83,199,240)] py-2"
                    onClick={() => setShowInput(true)}
                  >
                    <BsPlusLg className="inline ml-3 mr-1" size={12} />
                    <span className="pr-3"> 내 목록 추가</span>
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* 화면 눌렀을 경우 모달 닫힘 버튼 */}
        </>
      ) : null}
    </>
  );
};

export default MyTravelModal;
