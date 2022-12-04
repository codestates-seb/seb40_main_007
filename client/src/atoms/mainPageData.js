import { atom } from "recoil";

//-------------------------------------
// 게시글, 맵 관련 데이터
//-------------------------------------

// 메인페이지 게시글 정보
// const [postList, setPostList] = useRecoilState(mainPostData);
export const mainPostData = atom({
  key: "mainPostData",
  default: [],
});

// 메인페이지 인피니티 스크롤 정보
// ex) page: 1, size: 9, totalElements: 6, totalPages: 1
// const [pageInfo, setPageInfo] = useRecoilState(mainPageInfo);
export const mainPageInfo = atom({
  key: "mainPageInfo",
  default: [],
});
