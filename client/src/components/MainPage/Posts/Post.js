import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import PostStarScore from "./PostStarScore";
import Heart from "../../Heart";
import {
  // mapImgClickEvent,
  mapImgHoverEvent,
  mapCenterMoveEvent,
  postImgHoverEvent,
} from "../../../atoms/mapImage";
import timeFunc from "../../../utils/timeFunc";
// TravelPlus모달 추가
// import MyTravelModal from "../../mytravel/MyTravelModal";
import TestMyTravelModal from "../../mytravel/TestMyTravelModal";

function Post({ data }) {
  const [, setMapImgHoverId] = useRecoilState(mapImgHoverEvent);
  // const [, setMapImgClickId] = useRecoilState(mapImgClickEvent);
  const [, setMapCenter] = useRecoilState(mapCenterMoveEvent);
  const [postHoverId] = useRecoilState(postImgHoverEvent);

  const handleMapHover = () => {
    // setMapImgClickId(data.boardId);
    setMapImgHoverId(data.boardId);
    setMapCenter([{ lat: data.latitude, lng: data.longitude }]);
  };
  // console.log("dibs", data);
  return (
    <div
      className={`w-40 group mb-4 hover:shadow-all hover:shadow-[rgb(83,199,240)] hover:-translate-y-1 ${
        postHoverId === data.boardId
          ? "shadow-all shadow-[rgb(83,199,240)] -translate-y-1"
          : null
      }`}
    >
      <div>
        <div className="rounded-md relative p-1">
          <div className="absolute right-0 bg-[rgba(256,256,256,0.5)] flex p-[1px] m-1 rounded-lg z-10">
            {/* 모달 형태 수정해야함. */}
            {/* <MyTravelModal />  */}
            <TestMyTravelModal></TestMyTravelModal>
            <Heart boardId={data.boardId} heartState={data.dibs} />
          </div>
          <Link to={`/detail/${data.boardId}`}>
            <img
              src={data.thumbnail}
              alt="alt"
              className={`w-40 h-40 object-fit static pb-2`}
              onMouseEnter={handleMapHover}
              onMouseLeave={() => setMapImgHoverId(null)}
            />
          </Link>
          {/* </button> */}
          <PostStarScore score={data.star} />
        </div>
        <div className="w-40 pt-0 p-2">
          <div className="flex flex-row align-middle justify-between">
            <h3 className="text-sm font-bold">{data.title}</h3>
            <p className="text-xs text-gray-500 flex items-center mr-1">
              {timeFunc(data.timeFromStation)}
            </p>
          </div>
          <p className="text-xs text-gray-700">{data.review}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
