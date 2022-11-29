import { useState } from "react";
import { RiAlarmWarningLine } from "react-icons/ri";
//RiAlarmWarningFill
import { GrFlag } from "react-icons/gr";

const Complain = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="justify-center items-center flex w-full relative">
      <button className="" onClick={() => setShowModal(true)}>
        <GrFlag className="text-[#898989]" size={"24"} />
      </button>
      {showModal ? (
        <>
          <div className="absolute top-10 right-0 z-50 w-[200px] border-4 bg-white rounded-lg">
            <form className="p-5">
              <div className="pt-1 font-semibold border-b border-gray-400 mb-3">
                <RiAlarmWarningLine
                  size={"24"}
                  className="inline text-red-500 mb-2 mr-1"
                />
                게시글 신고
              </div>
              <div className="py-1">
                <lable key={1}>
                  <input value={1} type="radio" name="complain" />
                  잘못된 정보
                </lable>
              </div>
              <div className="py-1">
                <lable key={2}>
                  <input value={2} type="radio" name="complain" />
                  오해의 소지가 있는 콘텐츠
                </lable>
              </div>
              <div className="py-1">
                <lable key={3}>
                  <input value={3} type="radio" name="complain" />
                  악의적인 콘텐츠
                </lable>
              </div>
              <div className="py-1">
                <lable key={4}>
                  <input value={4} type="radio" name="complain" />
                  도배성 게시글
                </lable>
              </div>
              <div className="py-1">
                <lable key={5}>
                  <input value={5} type="radio" name="complain" />
                  권리침해
                </lable>
              </div>
              <div className="text-center">
                <button
                  type="submit"
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
