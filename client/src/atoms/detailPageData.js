import { atom } from "recoil";

// 디테일페이지 게시글 정보
// const [detailInfo, setDetailInfo] = useRecoilState(detailData);
export const detailData = atom({
  key: "detailData",
  default: [],
});

export const detailCommentData = atom({
  key: "commentData",
  default: [],
});
