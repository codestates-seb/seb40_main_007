import { mapImgClickEvent, mapImgHoverEvent } from "../../atoms/mapImage";
import { useRecoilState } from "recoil";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MapItemTag from "./MapItemTag";

const MapItemDetail = ({ thumbnail }) => {
  const [, setMapImgClickId] = useRecoilState(mapImgClickEvent);
  const [, setMapImgHoverId] = useRecoilState(mapImgHoverEvent);

  const testTag = ["한식", "아늑한", "활기찬", "정겨운"];
  const handleMapNormal = () => {
    setMapImgClickId(null);
    setMapImgHoverId(null);
  };

  return (
    <>
      <div className="bg-gray-800 w-40 rounded-xl border-4 border-gray-800 cursor-pointer relative bg-no-repeat shadow-black shadow-md">
        <div className="text-end pr-6">
          <button
            className="bg-white rounded-full absolute text-gray-400 mt-1 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
          >
            <AiOutlineCloseCircle size={18} onClick={handleMapNormal} />
          </button>
        </div>
        <div className="rounded-lg">
          <img
            className="p-0.5 w-40 h-24 rounded-xl"
            src={thumbnail}
            alt="post img"
          ></img>
        </div>
        <div className=" text-white p-1 flex flex-col">
          <p className="text-sm border-b-2 pb-1 mb-1">돼지국밥</p>
          <div className="gap-1 pt-1 truncate grid grid-cols-3">
            {testTag.map((tagName, index) => (
              <MapItemTag key={index} tagName={tagName} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MapItemDetail;
