const MyPostTab = ({ setIndex, index }) => {
  const normalStyle =
    "w-[50%] h-full flex justify-center text-[rgb(83,199,240)] items-center border-[1px] border-[rgb(83,199,240)]";
  const activeStyle = "text-white bg-[rgb(83,199,240)]";

  return (
    <>
      <div className="w-4/5 h-10 flex flex-row">
        <button
          className={`${normalStyle} rounded-tl-2xl rounded-bl-2xl ${
            index === "게시글" ? activeStyle : ""
          }`}
          onClick={() => setIndex("게시글")}
        >
          게시글
        </button>
        <button
          className={`${normalStyle} rounded-tr-2xl rounded-br-2xl ${
            index === "지도" ? activeStyle : ""
          }`}
          onClick={() => setIndex("지도")}
        >
          지도
        </button>
      </div>
    </>
  );
};

export default MyPostTab;
