/*eslint-disable*/
import { Map, MapMarker } from "react-kakao-maps-sdk"; //MarkerClusterer
import { useEffect, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";

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

  // 맵 검색
  const onKeywordChange = (e) => {
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

  const [title, setTitle] = useState("영등포역");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <div className="relative">
        <div className="border-2 border-[rgb(83,199,240)] rounded-2xl py-1 px-2 bg-[rgba(256,256,256,0.6)] w-fit absolute z-10 top-2 left-2">
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
        <Map // 맵 표시할 Container
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
          {/* 마커들의 정보, 마커가 1개일 경우와 여러개일 경우로 나뉜다 */}
          {markers.length === 1 ? (
            <MapMarker
              position={oneMarker}
              image={{
                src: "/images/marker.png",
                size: markerSize,
              }}
              draggable={true}
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
                  setTitle(`${marker.place_name}(${marker.road_address_name})`);
                }}
                draggable={true}
              ></MapMarker>
            ))
          )}
          {/* 지도 위에 띄우는 마커 정보 */}
          <div className=" text-white bg-[rgba(0,0,0,0.2)] text-right">
            Lat:{oneMarker.lat}/ Lng:{oneMarker.lng}
          </div>
          <div className="absolute top-16 left-6 z-10 bg-[rgba(256,256,256,0.7)] w-1/4 h-[200px] lg:h-[400px] overflow-scroll p-2">
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
                    setTitle(
                      `${marker.place_name}(${marker.road_address_name})`
                    );
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

      <div className="text-sm font-semibold text-gray-400 mt-5 mb-1 text-right">
        <div>
          <img
            src="/images/marker.png"
            alt="marker"
            className="w-7 h-8 inline mr-1"
          />
          마커를 움직여 보다 정확한 위치를 알려주세요!
        </div>
      </div>

      {/* 장소명 */}
      <div className="mb-2 font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 text-18 text-[rgb(83,199,240)] mt-10">
        장소명
      </div>
      <div className="text-sm text-gray-500  mt-5">
        이곳이 아니라면 다시 검색해주세요!
      </div>
      <div className="mt-1 w-full text-2xl font-semibold text-[rgb(83,199,240)] flex items-center relative">
        <img
          src="/images/bluelogo.png"
          alt="marker"
          className="w-10 h-10 inline mr-1"
        />
        {/* 장소명 상세 작성 */}
        <input
          className="w-full p-2 z-10 bg-[rgba(0,0,0,0)]"
          value={title}
          onChange={handleTitleChange}
        />
        <div className="z-0 absolute right-3 top-0">
          <div className="text-gray-400 text-sm inline">상세작성</div>{" "}
          <BsFillPencilFill className="inline" />
        </div>
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
