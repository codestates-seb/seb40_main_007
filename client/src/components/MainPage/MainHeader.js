import TrainStationModal from "../TrainStationModal";

const MainHeader = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <TrainStationModal />
      <h1 className="text-xl m-2 p-2">부산역</h1>
      <p className="text-sm text-gray-500">
        부산역은 정말 좋은 곳이에요. 최고입니다. 놀러오세요!
      </p>
    </div>
  );
};

export default MainHeader;
