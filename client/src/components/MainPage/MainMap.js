import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import MapItem from "../MapItems/MapItem";
import {
  mapImgClickEvent,
  mapImgHoverEvent,
  mapCenterMoveEvent,
  postImgHoverEvent,
} from "../../atoms/mapImage";
import { mainPostData } from "../../atoms/mainPageData";
import { trainInfo } from "../../atoms/trainInfo";

const MainMap = ({ stationId }) => {
  // Main Map Data 관련
  const postList = useRecoilValue(mainPostData);
  const trainStationInfo = useRecoilValue(trainInfo);
  const stationCoordinate = trainStationInfo[stationId - 1].position;

  // Main Map Event 관련 정보
  const [mapImgClickId] = useRecoilState(mapImgClickEvent);
  const [mapImgHoverId, setMapImgHoverId] = useRecoilState(mapImgHoverEvent);
  const [, setPostImgHoverId] = useRecoilState(postImgHoverEvent);
  const [...mapCenter] = useRecoilValue(mapCenterMoveEvent);
  console.log("현재 맵에 표시되는 데이터", postList);

  useEffect(() => {
    setPostImgHoverId(null);
  }, [mapImgClickId]);
  const handelZIndex = (boardId) => {
    if (boardId === mapImgHoverId) {
      return 2;
    } else if (boardId === mapImgClickId) {
      return 1;
    }
    return -1;
  };
  return (
    <div className="w-full flex justify-center">
      <Map // 지도를 표시할 Container
        center={
          mapCenter.length !== 0
            ? { lat: mapCenter[0].lat, lng: mapCenter[0].lng }
            : stationCoordinate
        }
        style={{
          // 지도의 크기
          width: "100%",
          height: "600px",
        }}
        level={5} // 지도의 확대 레벨
      >
        {postList.map((data, index) => {
          const detailData = {
            title: data.title,
            star: data.star,
            tags: data.tags,
          };
          return (
            // 커스텀 오버레이를 표시할 Container
            <CustomOverlayMap
              key={index}
              // 커스텀 오버레이가 표시될 위치입니다
              position={{ lat: data.latitude, lng: data.longitude }}
              // 커스텀 오버레이가에 대한 확장 옵션 x,y 좌표 이동.
              xAnchor={mapImgClickId === data.boardId ? 0.05 : 0.1}
              yAnchor={mapImgClickId === data.boardId ? 1.0 : 0.91}
              // zIndex : z-index
              zIndex={handelZIndex(data.boardId)}
            >
              <div
                onMouseEnter={() => setMapImgHoverId(data.boardId)}
                onMouseLeave={() => setMapImgHoverId(null)}
              >
                <MapItem
                  thumbnail={data.thumbnail}
                  boardId={data.boardId}
                  detailData={detailData}
                  coordinate={{ lat: data.latitude, lng: data.longitude }}
                />
              </div>
            </CustomOverlayMap>
          );
        })}
      </Map>
    </div>
  );
};

export default MainMap;
