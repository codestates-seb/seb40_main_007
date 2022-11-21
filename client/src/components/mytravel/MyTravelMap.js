import { useEffect, useState } from "react";
import { Map, CustomOverlayMap, Polyline } from "react-kakao-maps-sdk";
// import TravelMapItem from "./MapItem/TravelMapItem";

const MyTravelMap = ({ data }) => {
  const [initCoordinate, setInitCoordinate] = useState({
    lat: 36.58834236643186,
    lng: 128.0072011230013,
  });
  const [initLevel, setInitLevel] = useState(14);

  const coordinate = data.map((el) => ({
    lat: el.latitude,
    lng: el.longitude,
  }));

  useEffect(() => {
    data.length > 0
      ? setInitCoordinate(
          {
            lat: data[0].latitude,
            lng: data[0].longitude,
          },
          setInitLevel(6)
        )
      : (setInitCoordinate({ lat: 36.58834236643186, lng: 128.0072011230013 }),
        setInitLevel(14));
  }, [data]);

  return (
    <div className="w-full h-60 sm:h-[600px] flex flex-col justify-center">
      <div className="flex flex-row items-center mb-4">
        <img className="w-10 h-10 mr-2" alt="logo" src="/images/logo.png"></img>
        {/* 내 여행 계획 목록 제목 */}
        <h2 className="text-lg font-semibold text-[rgb(83,199,240)]">
          부산역 여행
        </h2>
      </div>
      <Map // 지도를 표시할 Container
        center={initCoordinate}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100%",
        }}
        level={initLevel} // 지도의 확대 레벨
      >
        <Polyline
          path={[coordinate]}
          strokeWeight={3} // 선의 두께 입니다
          strokeColor={"rgb(83,199,240)"} // 선의 색깔입니다
          strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={"line"} // 선의 스타일입니다
        />
        {data.length !== 0
          ? data.map((data, index) => (
              // 커스텀 오버레이를 표시할 Container
              <CustomOverlayMap
                key={index}
                // 커스텀 오버레이가 표시될 위치입니다
                position={{ lat: data.latitude, lng: data.longitude }}
                // 커스텀 오버레이가에 대한 확장 옵션 x,y 좌표 이동.
                xAnchor={0.5}
                yAnchor={0.5}
                zIndex={-index}
              >
                <div className="bg-[rgb(83,199,240)] rounded-full border-2 border-black w-7 h-auto text-center">
                  {index + 1}
                </div>
              </CustomOverlayMap>
            ))
          : null}
      </Map>
    </div>
  );
};

export default MyTravelMap;
