import { atom } from "recoil";
export const stationCount = atom({
  key: `stationCount`,
  default: [],
});

export const boardsOfThisWeek = atom({
  key: `boardsOfThisWeek`,
  default: [],
});

export const thisWeek = atom({
  key: `thisWeek`,
  default: [],
});

export const highScoreBoards = atom({
  key: `highScoreBoards`,
  default: [],
});

export const lowScoreBoards = atom({
  key: `lowScoreBoards`,
  default: [],
});
