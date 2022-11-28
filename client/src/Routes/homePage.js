/*eslint-disable*/
import Header from "../components/Header";
import TrainStationCard from "../components/TrainStationCard";
import Footer from "../components/Footer";
import HomeMap from "../components/homePage/HomeMap";
import HomeIntrouce from "../components/homePage/HomeIntroduce";
export default function HomePage() {
  return (
    <>
      <Header />
      <HomeIntrouce />
      <div className="lg:w-full w-full h-screen">
        <div className="w-full bg-white my-7">
          <div className="lg:w-[1400px] m-auto">
            <div className="font-semibold lg:text-xl text-md border-b-2 w-fit border-[rgb(83,199,240)] px-5 py-2 text-[rgb(83,199,240)]">
              경부선
            </div>
            <HomeMap />
          </div>
        </div>
        <div className="lg:w-[1400px] m-auto flex justify-center mb-20 ">
          <TrainStationCard />
        </div>
        <Footer />
      </div>
    </>
  );
}
