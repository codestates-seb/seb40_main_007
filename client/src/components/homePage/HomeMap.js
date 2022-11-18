import { Map, MapMarker } from "react-kakao-maps-sdk"; //MarkerClusterer
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function HomeMap() {
  // 1.행신 2.서울 3.영등포
  // 4.광명 5.수원 6.천안아산
  // 7.오송 8.대전 9.김천구미 10서대구  11.동대구
  // 12.밀양 13.구포 14.부산 15.울산 16.신경주 17.포항

  const trainMarkers = [
    {
      id: 1,
      train: "행신역",
      position: { lat: 37.612133259092005, lng: 126.83424521252282 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 2,
      train: "서울역",
      position: { lat: 37.55592978778571, lng: 126.97210824616438 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 3,
      train: "영등포역",
      position: { lat: 37.51564687008552, lng: 126.90744793931377 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 4,
      train: "광명역",
      position: { lat: 37.416664546209894, lng: 126.88492056682958 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 5,
      train: "수원역",
      position: { lat: 37.26564253711089, lng: 127.00007046138899 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 6,
      train: "천안아산역",
      position: { lat: 37.416664546209894, lng: 126.88492056682958 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 7,
      train: "오송역",
      position: { lat: 36.62009444926888, lng: 127.3275725873306 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 8,
      train: "대전역",
      position: { lat: 36.331515660740514, lng: 127.43274734876098 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 9,
      train: "김천구미역",
      position: { lat: 36.11350772356422, lng: 128.1808380410188 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 10,
      train: "서대구역",
      position: { lat: 35.88149725008915, lng: 128.53991636668655 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 11,
      train: "동대구역",
      position: { lat: 35.87923403176077, lng: 128.62831608587155 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 12,
      train: "밀양역",
      position: { lat: 35.4744653487994, lng: 128.77138264933427 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 13,
      train: "구포역",
      position: { lat: 35.20553573180837, lng: 128.9972344310166 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 14,
      train: "부산역",
      position: { lat: 35.11519430741748, lng: 129.04043150413258 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 15,
      train: "울산역",
      position: { lat: 35.55143883893413, lng: 129.13859938669552 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 16,
      train: "신경주",
      position: { lat: 35.79829560393723, lng: 129.13978970633767 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
    {
      id: 17,
      train: "포항역",
      position: { lat: 35.79829560393723, lng: 129.13978970633767 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const [isMarker, setIsMarker] = useState("");

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

            <Link to={`/main/${isMarker.train}`}>
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
      <Map level={12} center={{ lat: 36.6, lng: 127.7 }} style={style}>
        {trainMarkers.map((trainMarker) => (
          <MapMarker
            key={trainMarker.id}
            position={trainMarker.position}
            // image={{ src: "/images/dot.png", size: { width: 25, height: 25 } }}
            onClick={(marker) => {
              marker.panTo(marker.getPosition());
              setIsMarker(trainMarker);
            }}
            onMouseOver={() => {
              setIsVisible(true);
              setIsMarker(trainMarker);
            }}
            onMouseOut={() => setIsVisible(false)}
          >
            {isVisible && isMarker.id === trainMarker.id ? (
              <Link to={`/main/${trainMarker.train}`}>
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
