import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import MyPostStarScore from "./MyPostStarScore";
import Heart from "../../Heart";
import {
  // mapImgClickEvent,
  mapImgHoverEvent,
  mapCenterMoveEvent,
  postImgHoverEvent,
  mapImgClickEvent,
} from "../../../atoms/mapImage";
import { timeFunc } from "../../../utils/timeFunc";
// TravelPlus모달 추가
// import MyTravelModal from "../../mytravel/MyTravelModal";
import TestMyTravelModal from "../../mytravel/TestMyTravelModal";
import { accessToken } from "../../../atoms/loginTest";
import { TbMapSearch } from "react-icons/tb";

function MyPost({ data, tabValue }) {
  const TOKEN = useRecoilValue(accessToken);

  const [, setMapImgHoverId] = useRecoilState(mapImgHoverEvent);
  const [, setMapImgClickId] = useRecoilState(mapImgClickEvent);
  const [, setMapCenter] = useRecoilState(mapCenterMoveEvent);
  const [postHoverId] = useRecoilState(postImgHoverEvent);

  const handleMapHover = () => {
    // setMapImgClickId(data.boardId);
    setMapImgHoverId(data?.boardId);
  };

  const handleFindMap = () => {
    setMapImgClickId(data?.boardId);
    setMapCenter([{ lat: data?.latitude, lng: data?.longitude }]);
  };
  return (
    <div
      className={`w-40 rounded-lg group mb-4 shadow-[0px_0px_2px_1px_rgba(0,0,0,0.3)] hover:shadow-[0px_0px_2px_2px_rgba(0,0,0,0.3)] hover:shadow-[rgb(83,199,240)] hover:-translate-y-1 ${
        postHoverId === data?.boardId
          ? "shadow-all shadow-[rgb(83,199,240)] -translate-y-1"
          : null
      }`}
      onMouseEnter={handleMapHover}
      onMouseLeave={() => setMapImgHoverId(null)}
    >
      <div>
        <div className="rounded-md relative p-1">
          {TOKEN !== "" ? (
            <div className="absolute right-0 bg-[rgba(256,256,256,0.5)] flex p-[1px] m-1 rounded-lg z-10">
              {/* 모달 형태 수정해야함. */}
              {/* <MyTravelModal />  */}
              <TestMyTravelModal boardId={data?.boardId} />
              <Heart boardId={data?.boardId} heartState={data?.dibs} />
            </div>
          ) : null}
          <Link to={`/detail/${data?.boardId}`}>
            <img
              src={data?.thumbnail}
              alt="alt"
              className={`w-40 h-40 object-fit static mb-2 rounded-lg shadow-[0px_0px_2px_1px_rgba(0,0,0,0.3)]`}
            />
          </Link>
          <MyPostStarScore score={data?.star} />
        </div>
        <div className="w-40 pt-0 p-2">
          <div className="flex flex-col align-middle truncate justify-between">
            <h3 className="text-sm font-bold">{data?.title}</h3>
            <p className="text-xs text-gray-700 truncate mb-1">
              {data?.review}
            </p>
          </div>
          <div className="flex flex-row">
            {tabValue === "작성한게시글" ? (
              <TbMapSearch
                className="rounded-full p-0.5 hover:bg-gray-200 active:bg-gray-100 cursor-pointer"
                onClick={handleFindMap}
                size={26}
                color={"rgb(83, 199, 240)"}
              />
            ) : null}
            <p className="w-full text-xs text-gray-500 flex justify-end items-center mr-1">
              {timeFunc(data?.timeFromStation)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPost;
