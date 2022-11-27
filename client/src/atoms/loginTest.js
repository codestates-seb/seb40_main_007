import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessToken = atom({
  key: `access`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const refereshToken = atom({
  key: `referesh`,
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
// 로그인 정보(토큰,멤버아이디,닉네임,이미지)가 들어  있습니다
// import { useRecoilState } from "recoil";
// import LoginHeader from "./LoginHeader";
// const [login] = useRecoilState(userInfo);
