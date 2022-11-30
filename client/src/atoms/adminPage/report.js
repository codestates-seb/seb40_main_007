import { atom } from "recoil";

// 신고페이지 데이터
// const [reportData, setReportData] = useRecoilState(reportDataState);
export const reportDataState = atom({
  key: "reportData",
  default: [],
});
