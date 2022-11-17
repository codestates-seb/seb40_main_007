/*eslint-disable*/
import { Map, MapMarker } from "react-kakao-maps-sdk"; //MarkerClusterer
import { useEffect, useState } from "react";

export default function PostTestMap() {
  const { kakao } = window;
  const [keyword, setKeyword] = useState("영등포역"); //키워드 검색
  const [markers, setMarkers] = useState([
    {
      address_name: "서울 영등포구 영등포동 618",
      id: "8001349",
      phone: "1544-7788",
      place_name: "영등포역",
      road_address_name: "서울 영등포구 경인로 846",
    },
  ]); // 마커 리스트

  // 마커가 하나의 좌표
  const [oneMarker, setOneMarker] = useState({
    lat: 37.51587012479348,
    lng: 126.90777569282984,
  });
  // 맵 렌더링
  const [map, setMap] = useState();

  ////MapStyle//////
  const [style, setStyle] = useState({ width: "100%", height: "500px" });
  const windowResize = () => {
    if (window.innerWidth > 1024) {
      setStyle({ width: "90%", height: "500px" });
    } else {
      setStyle({ width: "90%", height: "300px" });
    }
  };
  const [markerSize, setMarkerSize] = useState({
    width: 60,
    height: 70,
  });
  console.log(markerSize);

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  //////////
  console.log(oneMarker);
  const onKeywordChange = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
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

  const oneMarkerSelect = (props) => {
    console.log(props);
    setOneMarker(props);
  };
  return (
    <>
      <input
        type="text"
        value={keyword}
        onChange={onKeywordChange}
        className="border-2"
      />
      <button type="submit" onClick={onKeywordSubmit} className="border-2">
        찾기
      </button>
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
            onDragEnd={() => {
              setMarkerSize({
                width: 60,
                height: 70,
              });
              // let tmp = marker.getPosition();
              // setPosition(tmp);
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
              <div style={{ color: "#000" }}>{marker.place_name}</div>
            </MapMarker>
          ))
        )}
        {/* // address_name:"서울 영등포구 영등포동 618"
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
    // y:"37.5156836953862" */}
        <div>
          위도는{oneMarker.lat}이고 경도는{oneMarker.lng}
        </div>
        <div className="">
          {markers.length === 1 ? (
            <div className="border-4 p-2 border-blue-400 w-fit">
              <div>{markers[0].place_name}</div>
              <div>{markers[0].road_address_name}</div>
              <div>{markers[0].address_name}</div>
            </div>
          ) : (
            markers.map((marker) => (
              <div
                className="border-4 p-2 border-blue-400 w-fit"
                onClick={() => {
                  setOneMarker(marker.position);
                  setMarkers([marker]);
                }}
              >
                <div>{marker.place_name}</div>
                <div>{marker.road_address_name}</div>
                <div>{marker.address_name}</div>
              </div>
            ))
          )}
        </div>
      </Map>
    </>
  );
}
