import TrainStationModal from "../TrainStationModal";

const MainHeader = () => {
  return (
    <div className="flex flex-row items-center mt-5 lg:mt-20">
      <h1 className="text-xl px-2">부산역</h1>
      <TrainStationModal />
    </div>
  );
};

export default MainHeader;
