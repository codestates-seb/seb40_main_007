/*eslint-disable*/
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import {
  postTrainStationState,
  postAdressState,
  postTitleState,
  postpostionState,
} from "../../atoms/postInfo";
import { useParams } from "react-router-dom";

export default function PostMap() {
  // useParams로 초기값 적용 후 상태 변경 될 때마다 Recoil 값 갱신 후 사용
  const { kakao } = window;
  const { id } = useParams();
  // 기차역 list
  const trainStationInfo = [
    { id: 0 },
    {
      id: 1,
      train: "행신역",
      position: { lat: 37.612133259092005, lng: 126.83424521252282 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다.",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 2,
      train: "서울역",
      position: { lat: 37.55592978778571, lng: 126.97210824616438 },
      describe:
        "서울역(Seoul station은 서울특별시 용산구와 중구에 위치한 철도역이다.",
      adress: "서울특별시 용산구 한강대로 405",
      phone: "000 - 0000",
    },
    {
      id: 3,
      train: "영등포역",
      position: { lat: 37.51564687008552, lng: 126.90744793931377 },
      describe:
        "영등포역(Yeongdeungpo station)은 서울특별시 영등포구 영등포본동에 있는 경부선의 철도역이자 수도권 전철 1호선의 전철역이다",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 4,
      train: "광명역",
      position: { lat: 37.416664546209894, lng: 126.88492056682958 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 5,
      train: "수원역",
      position: { lat: 37.26564253711089, lng: 127.00007046138899 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 6,
      train: "천안아산역",
      position: { lat: 37.416664546209894, lng: 126.88492056682958 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 7,
      train: "오송역",
      position: { lat: 36.62009444926888, lng: 127.3275725873306 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 8,
      train: "대전역",
      position: { lat: 36.331515660740514, lng: 127.43274734876098 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 9,
      train: "김천구미역",
      position: { lat: 36.11350772356422, lng: 128.1808380410188 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 10,
      train: "서대구역",
      position: { lat: 35.88149725008915, lng: 128.53991636668655 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 11,
      train: "동대구역",
      position: { lat: 35.87923403176077, lng: 128.62831608587155 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 12,
      train: "밀양역",
      position: { lat: 35.4744653487994, lng: 128.77138264933427 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 13,
      train: "구포역",
      position: { lat: 35.20553573180837, lng: 128.9972344310166 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 14,
      train: "부산역",
      position: { lat: 35.11519430741748, lng: 129.04043150413258 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 15,
      train: "울산역",
      position: { lat: 35.55143883893413, lng: 129.13859938669552 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 16,
      train: "신경주역",
      position: { lat: 35.79829560393723, lng: 129.13978970633767 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 17,
      train: "포항역",
      position: { lat: 36.071737996704506, lng: 129.34223174717678 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
  ];

  // 기차역 id, 위도경도, 주소값, 제목명 Recoil, 기차역이름
  const [trainStation, setTrainStation] = useRecoilState(postTrainStationState);
  const [, setPositionState] = useRecoilState(postpostionState);
  const [, setAdressState] = useRecoilState(postAdressState);
  const [titleState, setTitleState] = useRecoilState(postTitleState);
  const [trainName, setTrainName] = useState(trainStationInfo[id].train);
  //키워드, 맵과 마커중심 (기차역 상태가 변경될 때마다 검색창 키워드가 변경된다)
  const [keyword, setKeyword] = useState(trainStationInfo[id].train);
  const [center, setCenter] = useState(trainStationInfo[id].position);
  // 초기값 Recoil에 저장, 키워드 검색 렌더링
  useEffect(() => {
    setTrainStation(id); // 기차역id
    setPositionState(trainStationInfo[id].position); //위도경도
    setAdressState(trainStationInfo[id].adress); // 주소값
    setTitleState(trainStationInfo[id].train); // 제목명
    setTrainName(trainStationInfo[id].train); // 기차역이름
    setKeyword(trainStationInfo[id].train);
    setCenter(trainStationInfo[id].position);
    onKeywordSubmit(); //초기화면 렌더링
  }, [trainStation]);

  // console.log("id",trainStation, "postion",  positionState, adressState, "title", titleState);

  //마커 상태 변경
  const [markers, setMarkers] = useState(
    [
      {
        // 초기 마커 배열값
        id: trainStationInfo[id].id,
        phone: trainStationInfo[id].phone,
        place_name: trainStationInfo[id].train,
        adress: trainStationInfo[id].adress,
      },
    ],
    []
  );
  const [oneMarker, setOneMarker] = useState(trainStationInfo[id].position);
  const oneMarkerSelect = (props) => {
    setOneMarker(props.position);
    setPositionState(props.position); //위도경도 초기화
    setAdressState(props.adress); // 주소 초기화
  };
  const onDragEndHandler = (position) => {
    setOneMarker({ lat: position.Ma, lng: position.La });
    setPositionState({ lat: position.Ma, lng: position.La }); //위도경도 초기화
  };

  const [map, setMap] = useState(); // 맵 키워드에 따라 렌더링
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

  //키워드 input
  const onKeywordChange = (e) => {
    setKeyword(e.target.value);
  };
  // 맵 검색
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
            id: data[i].id,
            phone: data[i].phone,
            adress: data[i].road_address_name,
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
  // title 변경(세부정보)
  const handleTitleChange = (e) => {
    setTitleState(e.target.value); // 제목명
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
          center={center}
          style={style}
          level={3}
          onCreate={setMap}
          onClick={(_t, mouseEvent) => {
            if (markers.length === 1) {
              setOneMarker({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              });
              setPositionState({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              });
              setPositionState({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              }); //위도경도
              setAdressState(markers.adress); // 주소값
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
                  oneMarkerSelect(marker);
                  setMarkers([marker]);
                  setTitleState(`${marker.place_name}(${marker.adress})`);
                }}
                draggable={true}
              ></MapMarker>
            ))
          )}

          {/* 지도 위에 띄우는 마커 정보들 */}
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
                <div className="text-xs ml-5">{markers[0].adress}</div>
                <div className="text-xs ml-5">{markers[0].phone}</div>
              </div>
            ) : (
              markers.map((marker) => (
                <div
                  className="border-2 p-2 border-[rgb(83,199,240)] w-full rounded-md mb-1"
                  onClick={() => {
                    setMarkers([marker]);
                    setPositionState(marker.position); //위도경도
                    setAdressState(marker.adress); // 주소값
                    setTitleState(`${marker.place_name}(${marker.adress})`);
                  }}
                  key={`marker-${marker.place_name}`}
                >
                  <div className="text-base font-semibold text-[rgb(73,177,214)]">
                    <img
                      src="/images/bluelogo.png"
                      alt="marker"
                      className="w-5 h-5 inline mr-1"
                    />
                    {marker.place_name}
                  </div>
                  <div className="text-xs ml-5">{marker.adress}</div>
                  <div className="text-xs ml-5">{marker.phone}</div>
                </div>
              ))
            )}
          </div>
        </Map>
      </div>

      <div className="text-xs font-semibold text-gray-400 mt-5 mb-1 text-right">
        <div>
          <img
            src="/images/marker.png"
            alt="marker"
            className="w-7 h-8 inline mr-1"
          />
          마커로 보다 정확한 위치를 표시해 보세요!
        </div>
      </div>

      {/* 장소명 */}
      <div className="mb-2 font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 text-18 text-[rgb(83,199,240)] mt-10">
        장소명
      </div>
      <div className="text-xs text-gray-500  mt-5">
        근방의 기차역이 {trainName} 맞나요? 아니라면 "역 선택"을 다시해 주세요
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
          value={titleState}
          onChange={handleTitleChange}
        />
        <div className="z-0 absolute right-3 top-0">
          <div className="text-gray-400 text-sm inline font-light">
            장소 상세작성
          </div>
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
