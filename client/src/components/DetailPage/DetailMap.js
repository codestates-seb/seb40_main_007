import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useRecoilValue } from "recoil";
import { detailData } from "../../atoms/detailPageData";

const DetailMap = () => {
  const detailInfo = useRecoilValue(detailData);
  const potition = { lat: detailInfo.latitude, lng: detailInfo.longitude };
  return (
    <>
      {detailInfo.latitude !== undefined &&
      detailInfo.longitude !== undefined ? (
        <div className="flex justify-center items-center relative">
          <Map
            level={3}
            center={potition}
            style={{ width: "500px", height: "400px" }}
          >
            <MapMarker
              position={potition}
              image={{
                src: "/images/marker.png",
                size: { width: 60, height: 70 },
              }}
            />
            <div className="absolute w-1/2 top-10 left-1 z-10 bg-[rgba(256,256,256,0.7)] px-5 py-1 border-l-4 border-[rgb(83,199,240)]">
              <span className="text-[rgb(83,199,240)] font-bold">
                {detailInfo?.address}
              </span>
            </div>
          </Map>
        </div>
      ) : null}
    </>
  );
};

export default DetailMap;
