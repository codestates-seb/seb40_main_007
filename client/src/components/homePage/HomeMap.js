import { Map, MapMarker } from "react-kakao-maps-sdk"; //MarkerClusterer
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { trainInfo } from "../../atoms/trainInfo";

export default function HomeMap() {
  // 1.행신 2.서울 3.영등포
  // 4.광명 5.수원 6.천안아산
  // 7.오송 8.대전 9.김천구미 10서대구  11.동대구
  // 12.밀양 13.구포 14.부산 15.울산 16.신경주 17.포항

  const trainMarkers = useRecoilValue(trainInfo);
  const [isVisible, setIsVisible] = useState(false);
  const [isMarker, setIsMarker] = useState("");
  const [isCenter, setIsCenter] = useState({ lat: 36.6, lng: 127.7 });

  console.log(isMarker);

  const [style, setStyle] = useState({ width: "50%", height: "700px" });
  const windowResize = () => {
    // 맵 스타일 변경
    if (window.innerWidth >= 1024) {
      setStyle({ width: "50%", height: "700px" });
    } else {
      setStyle({ width: "90%", height: "300px" });
    }
  };
  console.log(style);
  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        {isMarker ? (
          <div className="m-auto mt-20 text-center">
            <div className="text-2xl font-semibold text-start ml-10">
              {isMarker.train}
            </div>
            <div className="mt-10">{isMarker.describe}</div>
            <img
              src={`/images/기차역도장/${isMarker.train}.png`}
              alt="stamp"
              className="w-80 h-80 m-auto mt-16"
            />

            <Link to={`/main/${isMarker.id}`}>
              <button className="bg-gray-400 mt-10 p-3 font-bold text-white rounded-xl hover:bg-[rgb(83,199,240)]">
                이동하기
              </button>
            </Link>
          </div>
        ) : (
          <div className="m-auto mt-20 text-center">
            <img
              src={`/images/logo.png`}
              alt="logo"
              className="w-80 h-80 m-auto mt-24"
            />
            <div className="text-center mt-20 text-2xl font-semibold text-[rgb(83,199,240)]">
              지도에서 좌표를 클릭해보세요
            </div>
          </div>
        )}
      </div>
      <Map level={12} center={isCenter} style={style}>
        {trainMarkers.map((trainMarker) => (
          <MapMarker
            key={trainMarker.id}
            position={trainMarker.position}
            // image={{ src: "/images/dot.png", size: { width: 25, height: 25 } }}
            onClick={() => {
              // marker.panTo(marker.getPosition());
              // setIsMarker(trainMarker);
              setIsCenter(trainMarker.position);
            }}
            onMouseOver={() => {
              setIsVisible(true);
              setIsMarker(trainMarker);
            }}
            onMouseOut={() => setIsVisible(false)}
          >
            {isVisible && isMarker.id === trainMarker.id ? (
              <Link to={`/main/${trainMarker.id}`}>
                <div className=" w-40 py-1 font-semibold hover:border-4 bg-gray-500   text-white text-center">
                  {trainMarker.train}
                </div>
              </Link>
            ) : null}
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
