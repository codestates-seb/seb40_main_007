function Loading() {
  return (
    <>
      {/* 1 */}
      <div className="w-20 h-20  rounded-full border-2 overflow-hidden flex justify-center align-middle">
        <img
          className="animate-moving"
          src="/images/loading/train.png"
          alt="loading"
        />
      </div>
      {/* 2 */}
      <div className="w-full h-20 animate-goTrain ">
        <img
          className="w-20 h-20"
          src="/images/loading/train.png"
          alt="loading"
        />
      </div>
      <div className="w-full h-2 -m-5 p-4 border-t-2 border-black"></div>

      {/* 3 */}
      <div className="flex justify-center align-bottom ">
        <div className="w-[140px] h-14 absolute bg-white overflow-hidden border-b-4 border-gray-500">
          <img
            className="max-w-screen-2xl h-full animate-bgMove static"
            src="/images/loading/기차배경.png"
            alt="background"
          />
        </div>
        <img
          className="w-auto h-14 mt-1 animate-smallBounce absolute"
          src="/images/loading/기차.png"
          alt="loading"
        />
        <div className="w-[140px] mt-5 absolute border-b-[1px] animate-bigBounce border-blue-900 opacity-30"></div>
      </div>
      <div className="w-36 h-2 p-4"></div>
    </>
  );
}

export default Loading;
