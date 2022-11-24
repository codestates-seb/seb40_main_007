import PostStarScore from "./PostStarScore";
import Heart from "../../Heart";
import {
  mapImgClickEvent,
  mapImgHoverEvent,
  mapCenterMoveEvent,
  postImgHoverEvent,
} from "../../../atoms/mapImage";
import { useRecoilState } from "recoil";
import timeFunc from "../../../utils/timeFunc";
// TravelPlus모달 추가
// import MyTravelModal from "../../mytravel/MyTravelModal";
import TestMyTravelModal from "../../mytravel/TestMyTravelModal";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Post({ data }) {
  const [, setMapImgHoverId] = useRecoilState(mapImgHoverEvent);
  const [mapImgClickId, setMapImgClickId] = useRecoilState(mapImgClickEvent);
  const [, setMapCenter] = useRecoilState(mapCenterMoveEvent);
  const [postHoverId] = useRecoilState(postImgHoverEvent);

  const [onLink, setOnLink] = useState(false);

  const handleMapClick = () => {
    setMapImgClickId(data.boardId);
    setMapCenter([{ lat: data.latitude, lng: data.longitude }]);
  };
  useEffect(() => {
    mapImgClickId === data.boardId ? setOnLink(true) : setOnLink(false);
  }, [mapImgClickId]);
  return (
    <div
      className={`w-40 group mb-4 ${
        postHoverId === data.boardId
          ? "shadow-all shadow-[rgb(83,199,240)]"
          : null
      }`}
    >
      <div className="rounded-md  relative">
        <div className="absolute right-0 bg-[rgba(256,256,256,0.5)] flex p-[1px] m-1 rounded-lg z-10">
          {/* 모달 형태 수정해야함. */}
          {/* <MyTravelModal />  */}
          <TestMyTravelModal></TestMyTravelModal>
          <Heart />
        </div>
        <button onClick={handleMapClick}>
          {onLink ? (
            // 테스트용 링크
            <Link to={`/detail/${data.boardId}`}>
              <img
                src={data.thumbnail}
                alt="alt"
                className={`w-40 h-40 object-fit static `}
                onMouseEnter={() => setMapImgHoverId(data.boardId)}
                onMouseLeave={() => setMapImgHoverId(null)}
              />
            </Link>
          ) : (
            <img
              src={data.thumbnail}
              alt="alt"
              className={`w-40 h-40 object-fit static hover:opacity-60`}
              onMouseEnter={() => setMapImgHoverId(data.boardId)}
              onMouseLeave={() => setMapImgHoverId(null)}
            />
          )}
        </button>
        <PostStarScore score={data.star} />
      </div>
      <div className="w-40">
        <div className="flex flex-row align-middle justify-between">
          <h3 className="text-sm font-bold">{data.title}</h3>
          <p className="text-xs text-gray-500 flex items-center mr-1">
            {timeFunc(data.timeFromStation)}
          </p>
        </div>
        <p className="text-xs text-gray-700">{data.review}</p>
      </div>
    </div>
  );
}

export default Post;
