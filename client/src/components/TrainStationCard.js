import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { trainInfo } from "../atoms/trainInfo";

export default function TrainStationCard() {
  const trainStationInfo = useRecoilValue(trainInfo);
  return (
    <div className="w-[1400px] pt-1">
      <div className="w-full grid grid-cols-4 gap-1">
        {trainStationInfo.map((el) => {
          return (
            <Link to={`/main/${el.id}`} key={el.id}>
              <div className="relative flex justify-center items-center text-white text-3xl rounded-xl hover:ring hover:ring-[rgb(83,199,240)] hover:text-[rgb(83,199,240)] hover:text-4xl">
                <img
                  src={`images/기차역사진/${el.train}사진.png`}
                  alt={el.train}
                  className="w-full h-full rounded-xl"
                />
                <div className="pt-1 font-semibold absolute">{el.train}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
