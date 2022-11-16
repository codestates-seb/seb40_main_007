import { atom } from "recoil";

export const trainStationState = atom({
  key: "trainStation",
  default: "기차역",
});

export const categoriesState = atom({
  key: "categories",
  default: "",
});
