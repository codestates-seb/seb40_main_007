import { Map, MapMarker } from "react-kakao-maps-sdk";

const MainMapTest = () => {
  return (
    <div className="w-full h-full flex justify-center p-2 mt-14">
      {/* <Map
        center={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
        style={{ width: "100%", height: "100%" }}
      ></Map> */}
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
    </div>
  );
};

export default MainMapTest;
