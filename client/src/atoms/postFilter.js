import { atom } from "recoil";

export const postCategoryState = atom({
  key: "postCategory",
  default: "식당",
});

export const postRelatedState = atom({
  key: "postRelated",
  default: "",
});

export const postRelatedAtmasState = atom({
  key: "postAtomos",
  default: "",
});

export const postRelatedPriceState = atom({
  key: "postPrice",
  default: "",
});
