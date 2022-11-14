const MyInfo = ({ nickName }) => {
  return (
    <div className="w-full p-2 mb-4 flex flex-row items-center justify-evenly">
      {/* nickName */}
      <div className="w-2/6 pl-8 flex flex-col align-middle ">
        <p className="text-sm text-gray-400">반가워요 !</p>
        <p className="-mt-1 text-lg text-[rgb(83,199,240)]">{nickName}</p>
      </div>

      {/* 프로필 이미지 */}
      <img
        className="w-28 h-28 rounded-full p-0 m-0 static"
        alt="ProfileImg"
        src="../images/profile.png"
      />

      {/* 게시글,댓글,추천 */}
      <div className="w-2/6 flex justify-between text-xs text-[rgb(83,199,240)]">
        <div className="flex flex-col items-center">
          <p>2</p>
          <p>게시글</p>
        </div>
        <div className="flex flex-col items-center">
          <p>10</p>
          <p>댓글</p>
        </div>
        <div className="flex flex-col items-center">
          <p>1200000</p>
          <p>추천</p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
