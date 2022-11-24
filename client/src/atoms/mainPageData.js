import { atom } from "recoil";

// 메인페이지 게시글 정보
// const [postList, setPostList] = useRecoilState(mainPostData);
export const mainPostData = atom({
  key: "mainPostData",
  default: [],
});

// 메인페이지 인피니티 스크롤 정보
// const [pageInfo, setPageInfo] = useRecoilState(mainPageInfo);
// ex) page: 1, size: 9, totalElements: 6, totalPages: 1
export const mainPageInfo = atom({
  key: "mainPageInfo",
  default: [],
});
