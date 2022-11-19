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
function Post({ data }) {
  const [, setMapImgHoverId] = useRecoilState(mapImgHoverEvent);
  const [, setMapImgClickId] = useRecoilState(mapImgClickEvent);
  const [, setMapCenter] = useRecoilState(mapCenterMoveEvent);
  const [postHoverId] = useRecoilState(postImgHoverEvent);

  const handleMapClick = () => {
    setMapImgClickId(data.boardId);
    setMapCenter([{ lat: data.latitude, lng: data.longitude }]);
  };
  return (
    <div
      className={`w-40 group  ${
        postHoverId === data.boardId
          ? "shadow-all shadow-[rgb(83,199,240)]"
          : null
      }`}
    >
      <div className="rounded-md group-hover:opacity-60 relative">
        <div className="absolute right-0">
          <Heart />
        </div>
        <button onClick={handleMapClick}>
          <img
            src={data.thumbnail}
            alt="alt"
            className={`w-40 h-40 object-fit static`}
            onMouseEnter={() => setMapImgHoverId(data.boardId)}
            onMouseLeave={() => setMapImgHoverId(null)}
          />
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
