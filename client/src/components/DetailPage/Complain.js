import { useState } from "react";
import { RiAlarmWarningLine } from "react-icons/ri";
//RiAlarmWarningFill
import { GrFlag } from "react-icons/gr";

const Complain = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="justify-center items-center flex w-full border">
      <button className="" onClick={() => setShowModal(true)}>
        <GrFlag className="text-gray-500" size={"24"} />
      </button>
      {showModal ? (
        <>
          <div className=" overflow-x-hidden overflow-y-auto top-32 right-72 fixed z-50 outline-none focus:outline-none ">
            <div className="flex flex-col justify-center items-center bg-white rounded-lg">
              <form className="p-5">
                <RiAlarmWarningLine
                  size={"28"}
                  color={"gray"}
                  className="inline"
                />
                <span className="pt-1">게시글 신고</span>
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
                    테러조장
                  </lable>
                </div>
                <div className="py-1">
                  <lable key={5}>
                    <input value={5} type="radio" name="complain" />
                    권리침해
                  </lable>
                </div>
                <div className="py-1">
                  <input
                    placeholder="사유룰 압력해주세요"
                    type="text"
                    name="describe"
                    className="border"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="">
                    제출
                  </button>
                </div>
              </form>
            </div>
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
