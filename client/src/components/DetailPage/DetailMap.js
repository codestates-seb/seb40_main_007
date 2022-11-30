import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useRecoilValue } from "recoil";
import { detailData } from "../../atoms/detailPageData";
import { useEffect, useState } from "react";
const DetailMap = () => {
  const detailInfo = useRecoilValue(detailData);
  const potition = { lat: detailInfo.latitude, lng: detailInfo.longitude };
  const [style, setStyle] = useState({ width: "500px", height: "400px" });
  const windowResize = () => {
    // 맵 스타일 변경
    if (window.innerWidth >= 1024) {
      setStyle({ width: "500px", height: "400px" });
    } else {
      setStyle({ width: "95%", height: "250px" });
    }
  };
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setStyle({ width: "500px", height: "400px" });
    } else {
      setStyle({ width: "95%", height: "250px" });
    }
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <>
      {detailInfo.latitude !== undefined &&
      detailInfo.longitude !== undefined ? (
        <div className="flex justify-center items-center relative">
          <Map
            level={3}
            center={potition}
            style={style}
            className="border-2 border-[#59AEEC] rounded-xl rounded-tl-none"
          >
            <MapMarker
              position={potition}
              image={{
                src: "/images/marker.png",
                size: { width: 60, height: 70 },
              }}
            />
            {detailInfo?.address === "" ? null : (
              <div className="absolute w-fit top-0.5 lg:left-1.5 left-3 z-10 bg-[rgba(256,256,256,0.7)] lg:px-5 px-2 lg:text-base text-xs py-1 border-l-4 border-[rgb(83,199,240)]">
                <span className="text-[rgb(83,199,240)] font-bold">
                  {detailInfo?.address}
                </span>
              </div>
            )}
          </Map>
        </div>
      ) : null}
    </>
  );
};

export default DetailMap;
