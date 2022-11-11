import { useNavigate } from "react-router-dom";

const NotFoundSb = () => {
  // 테스트용
  const navigate = useNavigate();

  return (
    <>
      {/* 테스트용 버튼*/}
      <button onClick={() => navigate("/")}>Back</button>
      <div className="flex-col bg-white text-[rgb(83,199,240)] w-[100%] h-[100vh] flex justify-center items-center">
        <img
          className="w-[10rem] h-[10rem]"
          alt="notfound_icon_sb"
          src="images/notfound_icon_sb.png"
        />
        <span className="p-5 text-[3rem]">찾을 수 없습니다 !</span>
      </div>
    </>
  );
};

export default NotFoundSb;
