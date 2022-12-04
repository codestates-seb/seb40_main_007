import { useNavigate } from "react-router-dom";

const NotFoundW = () => {
  // 테스트용
  const navigate = useNavigate();

  return (
    <>
      {/* 테스트용 버튼*/}
      <button onClick={() => navigate("/")}>Back</button>
      <div className=" bg-[rgb(83,199,240)] text-white w-[100%] h-[100vh] flex justify-center items-center">
        <img
          className="w-[8.5rem] h-[15rem]"
          alt="notfound_icon_w."
          src="/images/notfound_icon_w.png"
        />
        <span className="p-5 text-[3rem]">찾을 수 없습니다 !</span>
      </div>
    </>
  );
};

export default NotFoundW;
