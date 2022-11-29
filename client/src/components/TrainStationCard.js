import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { trainInfo } from "../atoms/trainInfo";

export default function TrainStationCard() {
  const trainStationInfo = useRecoilValue(trainInfo);
  return (
    <div className="lg:w-[1400px] pt-1 lg:mx-0 mx-5">
      <div className="grid grid-cols-4 lg:gap-1 gap-[2px]">
        {trainStationInfo.map((el) => {
          return (
            <Link to={`/main/${el.id}`} key={el.id}>
              <div className="h-full relative flex justify-center items-center text-white lg:text-3xl text-sm rounded-xl hover:ring hover:ring-[rgb(83,199,240)] hover:text-[rgb(83,199,240)] lg:hover:text-4xl">
                <img
                  src={`images/기차역사진/${el.train}사진.png`}
                  alt={el.train}
                  className="w-full h-full lg:rounded-xl rounded-md"
                />
                <div className="pt-1 lg:font-semibold absolute">{el.train}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
