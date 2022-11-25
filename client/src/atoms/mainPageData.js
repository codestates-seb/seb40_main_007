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
// const [pageInfo, setPageInfo] = useRecoilState(mainPageInfo);
// ex) page: 1, size: 9, totalElements: 6, totalPages: 1
export const mainPageInfo = atom({
  key: "mainPageInfo",
  default: [],
});

//-------------------------------------
// 게시글 정렬 관련 데이터
//-------------------------------------

// 메인페이지 카테고리 정렬
// const [selectCategory, setSelectCategory] = useRecoilState(selectCategoryEvent);
// 1:식당, 2:볼거리, 3:숙소
export const selectCategoryEvent = atom({
  key: "selectCategory",
  default: 1,
});

// 메인페이지 태그 정렬
// const [selectTag, setSelectTag] = useRecoilState(selectTagEvent);
// 공통 - 전체 : 0
// 식당 - 1: 한식, 2: 중식, 3: 양식, 4: 일식, 5: 분식, 6: 디저트
// 숙소 - 7: 호텔, 8: 모텔, 9: 펜션, 10: 캠핑, 11: 게하
// 볼거리 - 12: 자연, 13: 문화, 14: 유적, 15: 공연, 16: 놀거리
export const selectTagEvent = atom({
  key: "selectTag",
  default: "전체",
});
