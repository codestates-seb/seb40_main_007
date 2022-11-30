import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessToken = atom({
  key: `access`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const refreshToken = atom({
  key: `refresh`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userName = atom({
  key: `name`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userAvatar = atom({
  key: `avatar`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userId = atom({
  key: `memberId`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userEmail = atom({
  key: `email`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const isSocial = atom({
  key: "social",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const isAdmin = atom({
  key: "admin",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
