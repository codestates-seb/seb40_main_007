import { Map, CustomOverlayMap, Polyline } from "react-kakao-maps-sdk";
// import TravelMapItem from "./MapItem/TravelMapItem";

const MyTravelMap = ({ data }) => {
  const coordinate = data.map((el) => ({
    lat: el.latitude,
    lng: el.longitude,
  }));
  console.log(coordinate);
  return (
    <div className=" w-full h-60  sm:h-[600px] flex justify-center">
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          //   lat: 35.1151146795779,
          //   lng: 129.0414138363353,
          lat: coordinate[0].lat,
          lng: coordinate[0].lng,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100%",
        }}
        level={5} // 지도의 확대 레벨
      >
        <Polyline
          path={[coordinate]}
          strokeWeight={3} // 선의 두께 입니다
          strokeColor={"rgb(83,199,240)"} // 선의 색깔입니다
          strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={"line"} // 선의 스타일입니다
        />
        {data.map((data, index) => (
          // 커스텀 오버레이를 표시할 Container
          <CustomOverlayMap
            key={index}
            // 커스텀 오버레이가 표시될 위치입니다
            position={{ lat: data.latitude, lng: data.longitude }}
            // 커스텀 오버레이가에 대한 확장 옵션 x,y 좌표 이동.
            // xAnchor={0.3}
            // yAnchor={0.91}
            xAnchor={0.5}
            yAnchor={1}
            zIndex={-index}
          >
            {/* <div>
              <TravelMapItem
                thumbnail={data.thumbnail}
                boardId={data.boardId}
                coordinate={{ lat: data.latitude, lng: data.longitude }}
              />
            </div> */}
            <div className="bg-[rgb(83,199,240)] rounded-full border-2 border-black w-7 h-auto text-center">
              {index + 1}
            </div>
          </CustomOverlayMap>
        ))}
      </Map>
    </div>
  );
};

export default MyTravelMap;
