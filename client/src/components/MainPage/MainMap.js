import { Map } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

const MainMap = () => {
  const [style, setStyle] = useState({ width: "100%", height: "600px" });
  const windowResize = () => {
    if (window.innerWidth > 1024) {
      setStyle({ width: "100%", height: "600px" });
    } else {
      setStyle({ width: "100%", height: "300px" });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setStyle({ width: "100%", height: "600px" });
    } else {
      setStyle({ width: "100%", height: "300px" });
    }
  }, []);

  return (
    <div className="flex justify-center p-2 mt-12">
      <Map
        center={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
        style={style}
      ></Map>
    </div>
  );
};

export default MainMap;
