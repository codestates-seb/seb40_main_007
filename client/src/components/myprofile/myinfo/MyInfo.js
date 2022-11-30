const MyInfo = ({ nickName, userAvatar, totalBoard, totalComment, score }) => {
  return (
    <div className="w-full p-2 mb-4 flex flex-row items-center justify-evenly">
      {/* nickName */}
      <div className="lg:w-2/6 w-1/3 lg:pl-8 flex flex-col align-middle ">
        <p className="lg:text-sm text-xs text-gray-400">반가워요 !</p>
        <p className="-mt-1 lg:text-lg text-sm text-[rgb(83,199,240)]">
          {nickName}
        </p>
      </div>

      {/* 프로필 이미지 */}
      <img
        className="lg:w-28 lg:h-28 w-20 h-20 rounded-full p-0 m-0 static"
        alt="ProfileImg"
        src={userAvatar}
      />

      {/* 게시글,댓글,추천 */}
      <div className="lg:w-2/6 w-1/2 flex justify-between text-xs text-[rgb(83,199,240)]">
        <div className="flex flex-col items-center">
          <p>{totalBoard}</p>
          <p>게시글</p>
        </div>
        <div className="flex flex-col items-center">
          <p>{totalComment}</p>
          <p>댓글</p>
        </div>
        <div className="flex flex-col items-center">
          <p>{score}</p>
          <p>추천</p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
