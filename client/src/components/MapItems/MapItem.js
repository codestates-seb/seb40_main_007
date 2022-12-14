import { mapImgClickEvent } from "../../atoms/mapImage";
import { useRecoilState } from "recoil";
import MapItemDetail from "./MapItemDetail";
import MapItemThumbnail from "./MapItemThumbnail";

const MapItem = ({ thumbnail, detailData, boardId, coordinate }) => {
  const [mapImgClickId] = useRecoilState(mapImgClickEvent);
  return (
    <>
      {mapImgClickId === boardId ? (
        <MapItemDetail
          thumbnail={thumbnail}
          detailData={detailData}
          boardId={boardId}
        />
      ) : (
        <MapItemThumbnail
          thumbnail={thumbnail}
          boardId={boardId}
          coordinate={coordinate}
        />
      )}
    </>
  );
};

export default MapItem;
