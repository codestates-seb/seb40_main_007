import { atom } from "recoil";

// 메인페이지 게시글 정보
// const [postList, setPostList] = useRecoilState(mainPostData);
export const mainPostData = atom({
  key: "mainPostData",
  default: [],
});
