import {
  mapImgClickEvent,
  mapImgHoverEvent,
  mapCenterMoveEvent,
  postImgHoverEvent,
} from "../../atoms/mapImage";
import { useRecoilState } from "recoil";

const MapItemThumbnail = ({ thumbnail, boardId, coordinate }) => {
  const [, setMapImgClickId] = useRecoilState(mapImgClickEvent);
  const [mapImgHoverId] = useRecoilState(mapImgHoverEvent);
  const [, setMapCenter] = useRecoilState(mapCenterMoveEvent);
  const [, setPostHoverId] = useRecoilState(postImgHoverEvent);
  const handleMapEvent = () => {
    setMapImgClickId(boardId);
    setMapCenter([coordinate]);
  };
  const hoverImg = "hover:scale-125";
  return (
    <button
      className={`bg-white shadow-black shadow-md w-10 h-10 p-0.5 ${hoverImg} cursor-pointer ${
        mapImgHoverId === boardId ? "scale-125" : "scale-100"
      }`}
      onClick={handleMapEvent}
      onMouseEnter={() => setPostHoverId(boardId)}
      onMouseLeave={() => setPostHoverId(null)}
    >
      <img className="w-full h-full" src={thumbnail} alt="post img"></img>
    </button>
  );
};

export default MapItemThumbnail;
