/*eslint-disable*/
import { Map, MapMarker } from "react-kakao-maps-sdk"; //MarkerClusterer
import { useEffect, useState } from "react";

export default function PostMap() {
  const { kakao } = window;
  const [keyword, setKeyword] = useState("영등포역"); //키워드 검색
  const [markers, setMarkers] = useState([
    {
      // 마커 리스트
      address_name: "서울 영등포구 영등포동 618",
      id: "8001349",
      phone: "1544-7788",
      place_name: "영등포역",
      road_address_name: "서울 영등포구 경인로 846",
    },
  ]);

  const [oneMarker, setOneMarker] = useState({
    lat: 37.51587012479348,
    lng: 126.90777569282984,
  });
  const oneMarkerSelect = (props) => {
    setOneMarker(props);
  };
  const onDragEndHandler = (position) => {
    console.log("position", position);
    setOneMarker({ lat: position.Ma, lng: position.La });
  };

  const [map, setMap] = useState(); // 맵 렌더링
  const [style, setStyle] = useState({ width: "100%", height: "500px" });
  const windowResize = () => {
    // 맵 스타일 변경
    if (window.innerWidth >= 1024) {
      setStyle({ width: "90%", height: "500px" });
    } else {
      setStyle({ width: "90%", height: "300px" });
    }
  };
  const [markerSize, setMarkerSize] = useState({
    width: 60,
    height: 70,
  });
  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  const onKeywordChange = (e) => {
    // 맵 검색
    setKeyword(e.target.value);
  };

  useEffect(() => {
    onKeywordSubmit;
  }, []);
  const onKeywordSubmit = () => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        let markers = [];
        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            place_name: data[i].place_name,
            address_name: data[i].address_name,
            id: data[i].id,
            phone: data[i].phone,
            road_address_name: data[i].road_address_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  };

  return (
    <>
      <div className="relative">
        <div className="border-2 border-[rgb(83,199,240)] rounded-2xl py-1 px-2 bg-[rgba(256,256,256,0.6)] w-fit absolute z-20 top-2 left-2">
          <input
            type="text"
            value={keyword}
            onChange={onKeywordChange}
            className="border-2 text-[rgb(83,199,240)] font-bold px-2 bg-white"
          />
          <button
            type="submit"
            onClick={onKeywordSubmit}
            className="border-2 bg-[rgb(83,199,240)] rounded-lg px-2 text-white"
          >
            검색
          </button>
        </div>
        <Map // 로드뷰를 표시할 Container
          center={{
            lat: 37.51587012479348,
            lng: 126.90777569282984,
          }}
          style={style}
          level={3}
          onCreate={setMap}
          onClick={(_t, mouseEvent) => {
            if (markers.length === 1) {
              oneMarkerSelect({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              });
            }
          }}
        >
          {markers.length === 1 ? (
            <MapMarker
              position={oneMarker}
              image={{
                src: "/images/marker.png", // 마커이미지의 주소입니다
                size: markerSize,
              }}
              draggable={true}
              // onClick={getPosition}
              onDragStart={() => {
                setMarkerSize({
                  width: 110,
                  height: 120,
                });
              }}
              onDragEnd={(marker) => {
                setMarkerSize({
                  width: 60,
                  height: 70,
                });
                onDragEndHandler(marker.getPosition());
              }}
            />
          ) : (
            markers.map((marker) => (
              <MapMarker
                key={`marker-${marker.place_name}`}
                position={marker.position}
                onClick={() => {
                  setOneMarker(marker.position);
                  console.log(marker);
                  setMarkers([marker]);
                }}
                draggable={true}
              >
                <div className="align-middle border-none">
                  {marker.place_name}
                </div>
              </MapMarker>
            ))
          )}

          <div className=" text-white bg-[rgba(0,0,0,0.3)]">
            {oneMarker.lat}/{oneMarker.lng}
          </div>
          <div className="absolute top-16 left-6 z-10 bg-[rgba(256,256,256,0.7)] h-[200px] lg:h-[400px] overflow-scroll p-2">
            {markers.length === 1 ? (
              <div className="border-2 p-2 border-[rgb(83,199,240)] w-full rounded-md mb-1">
                <div className="text-base font-semibold text-[rgb(73,177,214)]">
                  <img
                    src="/images/bluelogo.png"
                    alt="marker"
                    className="w-5 h-5 inline mr-1"
                  />
                  {markers[0].place_name}
                </div>
                <div className="text-xs ml-5">
                  {markers[0].road_address_name}
                </div>
                <div className="text-xs ml-5">{markers[0].address_name}</div>
                <div className="text-xs ml-5">{markers[0].phone}</div>
              </div>
            ) : (
              markers.map((marker) => (
                <div
                  className="border-2 p-2 border-[rgb(83,199,240)] w-full rounded-md mb-1"
                  onClick={() => {
                    setOneMarker(marker.position);
                    setMarkers([marker]);
                  }}
                >
                  <div className="text-base font-semibold text-[rgb(73,177,214)]">
                    <img
                      src="/images/bluelogo.png"
                      alt="marker"
                      className="w-5 h-5 inline mr-1"
                    />
                    {marker.place_name}
                  </div>
                  <div className="text-xs ml-5">{marker.road_address_name}</div>
                  <div className="text-xs ml-5">{marker.address_name}</div>
                  <div className="text-xs ml-5">{marker.phone}</div>
                </div>
              ))
            )}
          </div>
        </Map>
      </div>
      <div className="text-sm font-semibold text-gray-400 mt-5 mb-1 flex justify-between items-center">
        <div className="text-sm text-gray-500  mb-1">주소가 이곳이 맞나요?</div>
        <div>
          <img
            src="/images/marker.png"
            alt="marker"
            className="w-7 h-8 inline mr-1"
          />
          마커를 움직여 보다 정확한 위치로 옮겨보세요!
        </div>
      </div>
      <div className="text-2xl font-semibold text-[rgb(83,199,240)] flex items-center">
        <img
          src="/images/bluelogo.png"
          alt="marker"
          className="w-10 h-10 inline mr-1"
        />
        {markers[0]?.place_name}({markers[0]?.address_name})
      </div>
    </>
  );
}
{
  /* // address_name:"서울 영등포구 영등포동 618"
    // category_group_code:""
    // category_group_name:""
    // category_name:"교통,수송 > 기차,철도 > 기차역 > KTX정차역"
    // distance:""
    // id:"8001349"
    // phone:"1544-7788"
    // place_name:"영등포역"
    // place_url:"http://place.map.kakao.com/8001349"
    // road_address_name:"서울 영등포구 경인로 846"
    // x:"126.90787602747"
    // y:"37.5156836953862" */
}
