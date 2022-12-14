import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk"; //MarkerClusterer
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

  const [style, setStyle] = useState({ width: "50%", height: "700px" });
  const windowResize = () => {
    // 맵 스타일 변경
    if (window.innerWidth >= 1024) {
      setStyle({ width: "50%", height: "700px" });
    } else {
      setStyle({ width: "90%", height: "300px" });
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setStyle({ width: "50%", height: "700px" });
    } else {
      setStyle({ width: "90%", height: "300px" });
    }
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <div className="lg:flex lg:justify-between">
      <div className="lg:w-1/2 w-2/3 lg:m-0 lg:mt-0 m-auto mt-5">
        {isMarker ? (
          <div className="m-auto lg:mt-20 text-center">
            <div className="lg:text-2xl font-semibold text-start lg:ml-10 mb-2">
              {isMarker.train}
            </div>
            <div className="lg:mt-10">{isMarker.describe}</div>
            <img
              src={`/images/기차역도장/${isMarker.train}.png`}
              alt="stamp"
              className="lg:w-80 lg:h-80 m-auto lg:mt-16 mt-5 w-32 h-32"
            />

            <Link to={`/main/${isMarker.id}`}>
              <button className="lg:text-base text-sm bg-gray-400 lg:mt-10 mt-5 lg:p-3 lg:mb-0 mb-5 p-2 font-bold text-white rounded-xl hover:bg-[rgb(83,199,240)]">
                이동하기
              </button>
            </Link>
          </div>
        ) : (
          <div className="m-auto mt-20 text-center">
            <img
              src={`/images/logo.png`}
              alt="logo"
              className="lg:w-80 lg:h-80 m-auto mt-16 w-32 h-32"
            />
            <div className="text-center lg:my-0 lg:mt-20 my-10 lg:text-2xl text-md font-semibold text-[rgb(83,199,240)]">
              지도에서 좌표를 클릭해보세요
            </div>
          </div>
        )}
      </div>
      <Map
        level={13}
        center={isCenter}
        style={style}
        className="lg:m-0 m-auto border-2 border-[#59AEEC] rounded-xl"
      >
        <Polyline
          path={[
            [
              { lat: 37.612133259092005, lng: 126.83424521252282 },
              { lat: 37.55592978778571, lng: 126.97210824616438 },
              { lat: 37.51564687008552, lng: 126.90744793931377 },
              { lat: 37.416664546209894, lng: 126.88492056682958 },
              { lat: 37.26564253711089, lng: 127.00007046138899 },
              { lat: 36.79420674636496, lng: 127.1045366477671 },
              { lat: 36.62009444926888, lng: 127.3275725873306 },
              { lat: 36.331515660740514, lng: 127.43274734876098 },
              { lat: 36.11350772356422, lng: 128.1808380410188 },
              { lat: 35.88149725008915, lng: 128.53991636668655 },
              { lat: 35.79829560393723, lng: 129.13978970633767 },
              //동대구
              { lat: 35.87923403176077, lng: 128.62831608587155 },
              { lat: 35.4744653487994, lng: 128.77138264933427 },
              { lat: 35.20553573180837, lng: 128.9972344310166 },
              { lat: 35.11519430741748, lng: 129.04043150413258 },
              { lat: 35.55143883893413, lng: 129.13859938669552 },
              { lat: 35.79829560393723, lng: 129.13978970633767 },
              { lat: 36.071737996704506, lng: 129.34223174717678 },
            ],
          ]}
          strokeWeight={6} // 선의 두께 입니다
          strokeColor={"#6385a0 "} // 선의 색깔입니다
          strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        />
        {trainMarkers.map((trainMarker) => (
          <MapMarker
            key={trainMarker.id}
            position={trainMarker.position}
            onClick={() => {
              setIsVisible(true);
              setIsMarker(trainMarker);
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
                <div className=" w-40 py-1 font-semibold hover:border-4 bg-gray-500 text-white text-center">
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
