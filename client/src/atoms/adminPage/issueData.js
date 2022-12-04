import { atom } from "recoil";

// 이슈 정보 - todayBoard, monthBoard, totalBoard, totalMember
// const [adminIssue, setAdminIssue] = useRecoilState(adminIssueData);
export const adminIssueData = atom({
  key: "adminIssue",
  default: null,
});
