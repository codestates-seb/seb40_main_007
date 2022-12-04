import { atom } from "recoil";

// 게시글 이미지 클릭시 지도에서 정보 표시 기능. - 게시글 고유 아이디(boardId)로 동작
// const [mapImgClickId, setMapImgClickId] = useRecoilState(mapImgClickEvent);
export const mapImgClickEvent = atom({
  key: "mapImgClick",
  default: null,
});

// 게시글에서 호버시 지도에서 호버되는 기능. - 게시글 고유 아이디(boardId)로 동작
// const [mapImgHoverId, setMapImgHoverId] = useRecoilState(mapImgHoverEvent);
export const mapImgHoverEvent = atom({
  key: "mapImgHover",
  default: null,
});

// 게시글에서 호버시 지도에서 호버되는 기능. - 맵 중앙 이동(latitude, longitude)로 동작
// const [mapCenter, setMapCenter] = useRecoilState(mapCenterMoveEvent);
export const mapCenterMoveEvent = atom({
  key: "mapCenterMove",
  default: [],
});

//------------------------------------------
// 맵에서 이미지 호버시 게시글 확인 효과. - 게시글 고유 아이디(boardId)로 동작
// const [postImgHoverId, setPostImgHoverId] = useRecoilState(postImgHoverEvent);
export const postImgHoverEvent = atom({
  key: "postHover",
  default: null,
});
