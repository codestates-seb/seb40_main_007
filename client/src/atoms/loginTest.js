import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { v1 } from "uuid";

const { persistAtom } = recoilPersist();

export const accessToken = atom({
  key: `access/${v1}`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const refereshToken = atom({
  key: `referesh/${v1}`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userName = atom({
  key: `name/${v1}`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userAvatar = atom({
  key: `avatar/${v1}`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userId = atom({
  key: `memberId/${v1}`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userEmail = atom({
  key: `email/${v1}`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const isSocial = atom({
  key: "email",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
// 로그인 정보(토큰,멤버아이디,닉네임,이미지)가 들어  있습니다
// import { useRecoilState } from "recoil";
// import LoginHeader from "./LoginHeader";
// const [login] = useRecoilState(userInfo);
