import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { adminIssueData } from "../atoms/adminPage/issueData";
import { reportDataState } from "../atoms/adminPage/report";
import { accessToken } from "../atoms/loginData";
import AdminIssue from "../components/AdminIssue";
import ReportTable from "../components/adminReport/ReportTable";
import AdminTab from "../components/AdminTab";
import Header from "../components/Header";

const AdminReportPage = () => {
  const [TOKEN] = useRecoilState(accessToken);
  const [, setReportData] = useRecoilState(reportDataState);
  const [, setAdminIssue] = useRecoilState(adminIssueData);

  useEffect(() => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    const URL = `${process.env.REACT_APP_URL}/adminPage`;

    axios
      .get(URL, config)
      .then((response) => {
        console.log(response.data);
        setReportData(response.data.reportedBoards);
        setAdminIssue({
          todayBoard: response.data.todayBoard,
          monthBoard: response.data.monthBoard,
          totalBoard: response.data.totalBoard,
          totalMember: response.data.totalMember,
        });
      })
      .catch((error) => {
        console.log("Admin ReportPage Get Fail :", error);
      });
  }, []);

  return (
    <div className="h-screen bg-[rgba(235,235,235,0.34)]">
      <Header />
      <AdminTab />
      <AdminIssue />
      <div className="">
        <ReportTable />
      </div>
    </div>
  );
};

export default AdminReportPage;
