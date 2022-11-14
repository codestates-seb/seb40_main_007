import { Map } from "react-kakao-maps-sdk";

const DetailMap = () => {
  return (
    <div className="flex justify-center items-center">
      <Map
        center={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
        style={{ width: "400px", height: "400px" }}
      />
    </div>
  );
};

export default DetailMap;
