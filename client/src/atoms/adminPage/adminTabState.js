import { atom } from "recoil";

// 신고페이지 데이터
// const [adminTab, setAdminTab] = useRecoilState(adminTabState);
export const adminTabState = atom({
  key: "adminTab",
  default: "게시글관리",
});
