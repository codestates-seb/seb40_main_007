import { atom } from "recoil";

//-------------------------------------
// 게시글 필터 관련 데이터
//-------------------------------------

// 메인페이지 카테고리 필터
// 1:식당, 2:볼거리, 3:숙소
// const [selectCategory, setSelectCategory] = useRecoilState(selectCategoryEvent);
export const selectCategoryEvent = atom({
  key: "selectCategory",
  default: 0,
});

// 메인페이지 태그 필터
// 공통 - 전체 : 0
// 식당 - 1: 한식, 2: 중식, 3: 양식, 4: 일식, 5: 분식, 6: 디저트
// 숙소 - 7: 호텔, 8: 모텔, 9: 펜션, 10: 캠핑, 11: 게하
// 볼거리 - 12: 자연, 13: 문화, 14: 유적, 15: 공연, 16: 놀거리
// const [selectTag, setSelectTag] = useRecoilState(selectTagEvent);
export const selectTagEvent = atom({
  key: "selectTag",
  default: "전체",
});

// 메인 페이지 필터
// 최신순, 거리순, 추천순
// const [mainSort, setMainSort] = useRecoilState(mainSortEvent);
export const mainSortEvent = atom({
  key: "mainSort",
  default: "최신순",
});

// 메인 페이지 필터 데이터
// 최신순, 거리순, 추천순
// const mainSortToNum = useRecoilValue(mainSortToEngData);
export const mainSortToEngData = atom({
  key: "mainSortToNum",
  default: {
    최신순: "date",
    추천순: "score",
    거리순: "timeFromStation",
  },
});
