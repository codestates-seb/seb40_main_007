import { BsList } from "react-icons/bs";

const MyTravelHeader = () => {
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <img className="w-8 h-8 mr-2" alt="logo" src="/images/logo.png"></img>
          <h2 className="text-lg text-[rgb(83,199,240)]">부산역 여행</h2>
        </div>
        <div>
          <button className="flex flex-row items-center">
            <BsList color={"rgb(83, 199, 240)"} size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MyTravelHeader;