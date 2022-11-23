import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessToken = atom({
  key: "accessToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const refereshToken = atom({
  key: "refereshToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userInfo = atom({
  key: "user",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

// 로그인 정보(토큰,멤버아이디,닉네임,이미지)가 들어  있습니다
// import { useRecoilState } from "recoil";
// import LoginHeader from "./LoginHeader";
// const [login] = useRecoilState(userInfo);
