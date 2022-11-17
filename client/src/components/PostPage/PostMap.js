import { Map, MapMarker } from "react-kakao-maps-sdk"; //MarkerClusterer
import { useEffect, useState } from "react";

const PostMap = () => {
  const [style, setStyle] = useState({ width: "100%", height: "600px" });
  const windowResize = () => {
    if (window.innerWidth > 1024) {
      setStyle({ width: "90%", height: "600px" });
    } else {
      setStyle({ width: "90%", height: "300px" });
    }
  };
  console.log(Map);

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  const [position, setPosition] = useState({
    lat: 37.51587012479348,
    lng: 126.90777569282984,
  });
  console.log(position);
  return (
    <>
      <input placeholder="입력해주세요"></input>
      <button>클릭</button>
      <div className="text-lg font-bold">
        {position && (
          <p>
            {"클릭한 위치의 위도는 " +
              position.lat +
              ", 경도는 " +
              position.lng +
              " 이다!!!"}
          </p>
        )}
      </div>
      <div className="flex justify-center p-2 mt-14">
        {/* <Map
          center={{ lat: 37.51587012479348, lng: 126.90777569282984 }}
          style={style}
        >
          <MapMarker
            position={{ lat: 37.51587012479348, lng: 126.90777569282984 }}
            draggable={true}
          >
            <div className="font-bold">영등포역</div>
          </MapMarker> */}
        {/* <MarkerClusterer averageCenter={true} minLevel={10}>
          {clusterPositionsData.positions.map((pos) => (
            <MapMarker key={`${pos.lat}-${pos.lng}`} position={pos} />
          ))}
        </MarkerClusterer> */}
        {/* </Map> */}
        <Map // 지도를 표시할 Container
          center={{ lat: 37.51587012479348, lng: 126.90777569282984 }}
          style={style}
          level={3} // 지도의 확대 레벨
          onClick={(_t, mouseEvent) =>
            setPosition({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            })
          }
        >
          {position && <MapMarker position={position} />}
        </Map>
      </div>{" "}
    </>
  );
};

export default PostMap;
