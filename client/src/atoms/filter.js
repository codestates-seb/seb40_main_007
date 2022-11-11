import { atom } from "recoil";

export const mainCategoryState = atom({
  key: "mainCategory",
  default: "식당",
});

export const mainRelatedState = atom({
  key: "mainRelated",
  default: null,
});
