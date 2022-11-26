const MyPostTab = ({ setTabValue, tabValue }) => {
  const normalStyle =
    "w-[50%] h-full flex justify-center text-[rgb(83,199,240)] items-center border-[1px] border-[rgb(83,199,240)]";
  const activeStyle = "text-white bg-[rgb(83,199,240)]";

  return (
    <>
      <div className="w-4/5 h-10 flex flex-row">
        <button
          className={`${normalStyle} rounded-tl-2xl rounded-bl-2xl ${
            tabValue === "작성한게시글" ? activeStyle : ""
          }`}
          onClick={() => setTabValue("작성한게시글")}
        >
          작성한 게시글
        </button>
        <button
          className={`${normalStyle} rounded-tr-2xl rounded-br-2xl ${
            tabValue === "내찜목록" ? activeStyle : ""
          }`}
          onClick={() => setTabValue("내찜목록")}
        >
          내 찜 목록
        </button>
      </div>
    </>
  );
};

export default MyPostTab;
