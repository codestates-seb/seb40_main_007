import { useState } from "react";
import { RiAlarmWarningLine } from "react-icons/ri";
import axios from "axios";
import { GrFlag } from "react-icons/gr";
import { accessToken } from "../../atoms/loginData";
import { useRecoilValue } from "recoil";
import swal from "sweetalert";

const Complain = ({ boardId }) => {
  const TOKEN = useRecoilValue(accessToken);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(1);

  const report = () => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .post(
        `${process.env.REACT_APP_URL}/boards/${boardId}/report/${value}`,
        {},
        config
      )
      .then((response) => {
        console.log(response);
        setValue(1);
      })
      .catch((error) => {
        if (error.response.status) {
          setShowModal(false);
          swal("Can't Report", "이미 신고한 게시글 입니다", "warning");
        }
      });
  };

  return (
    <div className="justify-center items-center flex w-full relative">
      <button onClick={() => setShowModal(true)}>
        <GrFlag className="text-[#898989]" size={"24"} />
      </button>
      {showModal ? (
        <>
          <div className="absolute top-10 right-0 z-50 w-[250px] border-4 bg-white rounded-lg">
            <form
              className="p-5"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <div className="pt-1 font-semibold border-b border-gray-400 mb-3">
                <RiAlarmWarningLine
                  size={"24"}
                  className="inline text-red-500 mb-2 mr-1"
                />
                게시글 신고
              </div>
              <div className="py-1">
                <input
                  value={1}
                  type="radio"
                  name="complain"
                  defaultChecked={value}
                />
                잘못된 정보
              </div>
              <div className="py-1">
                <input value={2} type="radio" name="complain" />
                오해의 소지가 있는 콘텐츠
              </div>
              <div className="py-1">
                <input value={3} type="radio" name="complain" />
                악의적인 콘텐츠
              </div>
              <div className="py-1">
                <input value={4} type="radio" name="complain" />
                도배성 게시글
              </div>
              <div className="py-1">
                <input value={5} type="radio" name="complain" />
                권리침해
              </div>
              <div className="text-center">
                <button
                  onClick={report}
                  type="button"
                  className="bg-gray-500  text-white border py-1 px-4 rounded-lg mt-2"
                >
                  제출
                </button>
              </div>
            </form>
          </div>

          <button
            className="fixed inset-0 opacity-30 z-40 bg-black"
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
          ></button>
        </>
      ) : null}
    </div>
  );
};

export default Complain;
