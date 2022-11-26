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
import { myPostData } from "../../atoms/mypage/myPostData";
import { trainInfo } from "../../atoms/trainInfo";

const MyPostMap = ({ station }) => {
  // MyPost Map Data 관련
  const myPost = useRecoilValue(myPostData);
  const trainStationInfo = useRecoilValue(trainInfo);

  // MyPost Map Event 관련 정보
  const [mapImgClickId] = useRecoilState(mapImgClickEvent);
  const [mapImgHoverId, setMapImgHoverId] = useRecoilState(mapImgHoverEvent);
  const [, setPostImgHoverId] = useRecoilState(postImgHoverEvent);
  const [mapCenter, setMapCenter] = useRecoilState(mapCenterMoveEvent);

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
  return mapCenter.length !== 0 ? (
    <div className="w-full h-60 sm:h-[600px] flex justify-center">
      <Map // 지도를 표시할 Container
        // center={{ lat: 36.44705047088056, lng: 127.96763837805022 }}
        center={{ lat: mapCenter[0].lat, lng: mapCenter[0].lng }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100%",
        }}
        level={station === 0 ? 13 : 5} // 지도의 확대 레벨
        onCenterChanged={(map) =>
          setMapCenter([
            { lat: map.getCenter().getLat(), lng: map.getCenter().getLng() },
          ])
        }
      >
        <div className="p-1 absolute max-w-2xl bg-white border-[rgb(83,199,240)] border-x-2 border-b-2 z-10">
          {/* trainStation 정보 id 가 1부터 시작하므로 -1 */}
          {station === 0 ? "경부선 전체" : trainStationInfo[station - 1].train}
        </div>
        {myPost.map((data, index) => {
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
  ) : (
    <div className="w-full flex justify-center"></div>
  );
};

export default MyPostMap;
