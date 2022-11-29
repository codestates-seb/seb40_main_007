import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessToken } from "../../atoms/loginTest";
import axios from "axios";
import {
  myTravelIdSelect,
  myTravelListData,
  myTravelNameSelect,
} from "../../atoms/mypage/myTravelData";

const MyTravelAddModal = ({ setShowModal }) => {
  const [inputText, setInputText] = useState("");
  const [, setMyTravelList] = useRecoilState(myTravelListData);
  const [, setMyTravelId] = useRecoilState(myTravelIdSelect);
  const [, setMyTravelName] = useRecoilState(myTravelNameSelect);

  const [TOKEN] = useRecoilState(accessToken);

  const addPlan = () => {
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
        setShowModal(false);
        setMyTravelList(data);
        data.length === 1
          ? (setMyTravelId(data[0].plannerId),
            setMyTravelName(data[0].plannerName))
          : null;
      })
      .catch((error) => {
        console.log("Add TravelList Fail :", error);
      });
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#57545469]">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="text-right">
              <button
                className="text-gray-400 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mt-1 mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                <AiOutlineCloseCircle size={18} />
              </button>
            </div>
            <div className="text-center mx-5 flex flex-col items-center">
              <img className="w-9" src="../images/logo.png" alt="logo" />
              <p className="text-lg p-2 text-[rgb(83,199,240)] font-bold">
                새 목록을 추가하세요
              </p>
              <div
                className={`m-2 p-2 w-4/5 rounded-lg border-2 border-[rgb(83,199,240)] flex items-center `}
              >
                <input
                  type={"text"}
                  className="w-full focus:outline-none"
                  onChange={(text) => setInputText(text.target.value)}
                ></input>
              </div>
              {/* 추가필요 : 텍스트에 따른 유효성 검사 필요합니다. */}
              <p className="w-4/5 text-xs text-red-500 font-medium text-left">
                {inputText.length >= 1 ? null : "* 한 글자 이상 입력해주세요 !"}
              </p>
              <div
                className={`${inputText.length >= 1 ? "py-5 mt-4" : "py-5"}`}
              >
                <button
                  onClick={addPlan}
                  className={`btn hover:scale-110 active:scale-100 ${
                    inputText.length >= 1
                      ? ""
                      : "pointer-events-none bg-gray-400"
                  }`}
                >
                  추가
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTravelAddModal;
