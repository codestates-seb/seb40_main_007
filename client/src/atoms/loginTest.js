import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loginOk = atom({
  key: "loginOk",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const token = atom({
  key: "token",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
