import { atom } from "recoil";

export const postCategoryState = atom({
  key: "postCategory",
  default: "식당",
});

export const postRelatedState = atom({
  key: "postRelated",
  default: "",
});
