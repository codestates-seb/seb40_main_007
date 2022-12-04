import { useRecoilValue } from "recoil";
import { trainInfo } from "../../../atoms/trainInfo";

const MyStationItem = ({ trainId }) => {
  const trainInfoList = useRecoilValue(trainInfo);
  console.log(trainInfoList[trainId - 1].train, trainId);
  return (
    <div className="">
      <img
        className="m-4 lg:w-20 lg:h-20 w-12 h-12 rounded-md hover:scale-150 transition delay-100 duration-150 ease-in-out" //hover-img
        alt="postImg"
        src={`/images/기차역도장/${trainInfoList[trainId - 1].train}.png`}
      />
    </div>
  );
};

export default MyStationItem;
