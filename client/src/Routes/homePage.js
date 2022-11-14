import Header from "../components/Header";
import TrainStationCard from "../components/TrainStationCard";

export default function homePage() {
  return (
    <>
      <Header />
      <div className="lg:w-full w-full h-screen pt-10">
        <div className="w-full flex justify-center items-center font-bold">
          <img src="images/역이요소개/역이요_소개_1.png" alt="역이요_소개_1" />
        </div>

        <div className="w-full my-5 bg-white flex justify-center items-center font-bold">
          <div className="flex justify-center items-center">
            <img
              src="images/역이요소개/역이요_소개_2.png"
              alt="역이요_소개_2"
              className="z-10"
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <img src="images/역이요소개/역이요_소개_3.png" alt="역이요_소개_3" />
        </div>

        <div className="w-full bg-white my-7">
          <div className="max-w-5xl m-auto">
            <div className="font-semibold text-xl border-b-2 w-fit border-[rgb(83,199,240)] px-5 py-2 text-[rgb(83,199,240)]">
              경부선
            </div>
            <div className="flex justify-end">
              <div className="relative">
                <img
                  src="images/역이요노선/역이요_지도.png"
                  alt="지도"
                  className=""
                />
                <img
                  src="images/역이요노선/역이요_노선.png"
                  alt="노선"
                  className="z-10 absolute top-[156px] right-6 w-3/5"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-full w-full h-screen flex justify-center">
          <TrainStationCard />
        </div>
      </div>
    </>
  );
}
