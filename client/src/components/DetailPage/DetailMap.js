import { useState } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import MapItemDetail from "../MapItems/MapItemDetail";

const DetailMap = () => {
  const trainInfo = {
    id: 14,
    train: "부산역",
    position: { lat: 35.11519430741748, lng: 129.04043150413258 },
    describe:
      "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
    adress: "경기도 고양시 덕양구 소원로 102",
    phone: "000 - 0000",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <Map
        level={5}
        center={trainInfo.position}
        style={{ width: "500px", height: "400px" }}
        onClick={() => setIsOpen(false)}
      >
        <MapMarker
          onClick={() => setIsOpen(true)}
          position={trainInfo.position}
          image={{
            src: "/images/marker.png",
            size: { width: 60, height: 70 },
          }}
        />
        {isOpen && (
          <CustomOverlayMap position={trainInfo.position}>
            <MapItemDetail thumbnail="https://i.ytimg.com/vi/lgfXrQUx4go/maxresdefault.jpg" />
          </CustomOverlayMap>
        )}
      </Map>
    </div>
  );
};

export default DetailMap;
