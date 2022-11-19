import { atom } from "recoil";

export const postTrainStationState = atom({
  key: "trainStation",
  default: "기차역",
});

export const postAdressState = atom({
  key: "adress",
  default: "주소기본",
});

export const postTitleState = atom({
  key: "trainStation",
  default: "제목기본",
});

export const postCategoryState = atom({
  key: "postCategory",
  default: "식당기본",
});

export const postRelatedState = atom({
  key: "postRelated",
  default: "관련태그기본",
});

export const postRelatedAtmasState = atom({
  key: "postAtmos",
  default: "분위기기본",
});

export const postRelatedPriceState = atom({
  key: "postPrice",
  default: "가격기본",
});

export const postStarState = atom({
  key: "postStar",
  default: "가격기본",
});

export const postCommentState = atom({
  key: "postComment",
  default: "리뷰기본",
});

//post 페이지 정보 (기차역, 주소, 카테고리 태그, 관련 카테고리 태그, 분위기태그, 가격태그)
// 명명구조 (페이지이름 + 정보 + State)
// WriteModal 에서 카테고리 정보 넘기고 PostTrainSelect 모달에서 기차역 정보 선택
