/*eslint-disable*/
import { mapImgClickEvent, mapImgHoverEvent } from "../../atoms/mapImage";
import { useRecoilState, useRecoilValue } from "recoil";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MapItemTag from "./MapItemTag";
import OneStarScore from "../OneStarScore";
import { tagsInfoList } from "../../atoms/tagsInfo";

const MapItemDetail = ({ thumbnail, detailData }) => {
  const [, setMapImgClickId] = useRecoilState(mapImgClickEvent);
  const [, setMapImgHoverId] = useRecoilState(mapImgHoverEvent);
  const tagsInfo = useRecoilValue(tagsInfoList);

  const detailTag = tagsInfo[detailData.tags.detailTag];
  const moodTag = detailData.tags.moodTag.map((el) => tagsInfo[el]);
  const priceTag = tagsInfo[detailData.tags.priceTag];
  const tagList = [detailTag, ...moodTag, priceTag];
  console.log("태그 목록", tagList);
  const handleMapNormal = () => {
    setMapImgClickId(null);
    setMapImgHoverId(null);
  };
  console.log("Detail", detailData);

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
          <div className="border-b-2 pb-1 pr-2 mb-1 flex flex-row justify-between items-center">
            <p className="text-sm font-medium">{detailData.title}</p>
            <OneStarScore size={13} score={detailData.star} />
          </div>
          <div className="gap-1 pt-1 flex flex-wrap">
            {tagList.map((tagName, index) => (
              <MapItemTag key={index} tagName={tagName} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MapItemDetail;
