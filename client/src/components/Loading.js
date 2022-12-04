function Loading() {
  return (
    <>
      {/* 1 */}
      <div className="w-20 h-20 overflow-hidden rounded-full  border-[rgb(83,199,240)] flex flex-col justify-center items-center">
        <div>
          <div className="flex flex-row">
            <img
              className="w-20 h-10 animate-wind1 z-10"
              src="/images/loading/wind.png"
              alt="loading"
            />
          </div>
          <img
            className="w-20 h-10 animate-moving z-10"
            src="/images/loading/train3.png"
            alt="loading"
          />
        </div>
        <div className="border-2 w-20 z-20 -mt-5 mb-3 border-gray-500"></div>
        <img
          className="w-20 h-20 -z-10 -mt-[4.5rem]"
          src="/images/loading/grassland.png"
          alt="loading"
        />
      </div>
      {/*
      <div className="w-full h-20 animate-goTrain ">
        <img
          className="w-20 h-20"
          src="/images/loading/train.png"
          alt="loading"
        />
      </div>
      <div className="w-full h-2 -m-5 p-4 border-t-2 border-black"></div>

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
  <div className="w-36 h-2 p-4"></div>*/}
    </>
  );
}

export default Loading;
