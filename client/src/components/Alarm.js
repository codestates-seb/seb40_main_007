/*eslint-disable*/
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessToken } from "../atoms/loginData";
import { FaRegBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Alarm() {
  const [showModal, setShowModal] = useState(false);
  const [TOKEN] = useRecoilState(accessToken);
  const [alarmInfo, setAlarmInfo] = useState("");
  const navigate = useNavigate();
  const { detailId } = useParams();

  useEffect(() => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .get(`${process.env.REACT_APP_URL}/members/notice`, config)
      .then((response) => {
        console.log("확인");
        setAlarmInfo(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [detailId]);

  function handleCheck(boardId, senderId) {
    console.log("senderId", boardId, senderId);
    const config = {
      headers: { Authorization: TOKEN, Notice: "Comment" },
    };
    axios
      .delete(
        `${process.env.REACT_APP_URL}/members/notice/${boardId}/${senderId}`,
        config
      )
      .then((response) => {
        navigate(`/detail/${boardId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="w-fit flex relative">
      {alarmInfo.length > 0 ? (
        <button className="mr-1 relative" onClick={() => setShowModal(true)}>
          {/* flex justify-center items-center w-[50px] h-[50px] bg-[rgb(83,199,240)] rounded-3xl fixed bottom-5 right-5 */}
          <FaRegBell size={"28"} className="text-[rgb(83,199,240)] pt-0.5" />
          <span className="mr-1 w-[10px] h-[10px] bg-red-500 rounded-full absolute top-0 -right-0.5"></span>
        </button>
      ) : (
        <button className="mr-1" onClick={() => setShowModal(true)}>
          {/* flex justify-center items-center w-[50px] h-[50px] bg-[rgb(83,199,240)] rounded-3xl fixed bottom-5 right-5 */}
          <FaRegBell size={"28"} className="text-[rgb(83,199,240)] pt-0.5" />
        </button>
      )}

      {showModal ? (
        // alarmInfo.map((el)=>(
        <>
          <div className="absolute top-10 -right-2 z-20 shadow-lg border rounded-xl">
            <div className="flex flex-col justify-center items-center w-[160px] lg:w-[240px] bg-white rounded-lg">
              {alarmInfo.length > 0 ? (
                alarmInfo.map((el, idx) => (
                  <button
                    key={idx}
                    className="text-xs lg:text-base text-[rgb(83,199,240)] py-2 flex"
                    onClick={() => {
                      setShowModal(false);
                      handleCheck(el.boardId, el.senderId);
                    }}
                  >
                    <p className="font-bold lg:w-[100px] w-[60px] truncate ...">
                      {el.senderName}
                    </p>
                    <p>님의 댓글입니다</p>
                  </button>
                ))
              ) : (
                <button
                  className="text-sm text-[rgb(83,199,240)] py-2"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  알림이 없습니다
                </button>
              )}
            </div>
          </div>

          {/* )) */}
          <button
            className="fixed inset-0"
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
          ></button>
        </>
      ) : null}
    </div>
  );
}
