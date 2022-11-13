import { Map } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const MainMap = () => {
  const [style, setStyle] = useState({ width: "100%", height: "530px" });
  const windowResize = debounce(() => {
    if (window.innerWidth > 1024) {
      setStyle({ width: "100%", height: "530px" });
    } else {
      setStyle({ width: "100%", height: "300px" });
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <div className="flex justify-center p-2">
      <Map
        center={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
        style={style}
      ></Map>
    </div>
  );
};

export default MainMap;
