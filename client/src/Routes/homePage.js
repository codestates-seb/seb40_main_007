import Header from "../components/Header";
import TrainStationCard from "../components/TrainStationCard";
export default function homePage() {
  return (
    <>
      <Header />

      <div className="lg:w-full w-full h-screen pt-10">
        <div className="w-full h-[750px] bg-[rgb(83,199,240)] flex justify-center items-center font-bold">
          <div className="text-2xl text-white">
            소개글 우리 앱의 모바일 버전 이미지를 넣을 예정
          </div>
        </div>

        <div className="w-full  h-[750px] bg-white flex justify-center items-center font-bold">
          <div className="text-2xl text-[rgb(83,199,240)]">
            소개글 우리 앱의 모바일 버전 이미지를 넣을 예정
          </div>
        </div>
        <div className="w-full h-[750px] bg-gradient-to-tl from-white to-[rgb(83,199,240)] flex justify-center items-center">
          <div className="text-2xl text-white">
            소개글 우리 앱의 모바일 버전 이미지를 넣을 예정
          </div>
        </div>
        <div className="lg:w-full w-full h-screen flex justify-center">
          <TrainStationCard />
        </div>
      </div>
    </>
  );
}
