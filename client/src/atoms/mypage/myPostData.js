import { atom } from "recoil";

//-------------------------------------
// 게시글, 맵 관련 데이터
//-------------------------------------

// 메인페이지 게시글 정보
// const [myPost, setMyPost] = useRecoilState(myPostData);
export const myPostData = atom({
  key: "myPostData",
  default: [],
});

// 메인페이지 인피니티 스크롤 정보
// ex) page: 1, size: 9, totalElements: 6, totalPages: 1
// const [myPostPageInfo, setMyPostPageInfo] = useRecoilState(myPostPageInfo);
export const myPostPageInfo = atom({
  key: "myPostPageInfo",
  default: [],
});
