import { atom } from "recoil";

export const postTrainStationState = atom({
  key: "trainStation",
  default: "기차역",
});

export const postCategoryState = atom({
  key: "postCategory",
  default: "식당",
});

export const postRelatedState = atom({
  key: "postRelated",
  default: "",
});

export const postRelatedAtmasState = atom({
  key: "postAtmos",
  default: "",
});

export const postRelatedPriceState = atom({
  key: "postPrice",
  default: "",
});

//post 페이지 정보 (기차역, 카테고리 태그, 관련 카테고리 태그, 분위기태그, 가격태그)
// WriteModal 에서 카테고리 정보 넘기고 PostTrainSelect 모달에서 기차역 정보 선택
