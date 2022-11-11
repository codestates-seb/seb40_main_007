import { Map } from "react-kakao-maps-sdk";

const MainMap = () => {
  return (
    <div className="flex justify-center m-2 p-2">
      <Map
        center={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
        style={{ width: "550px", height: "300px" }}
      ></Map>
    </div>
  );
};

export default MainMap;
