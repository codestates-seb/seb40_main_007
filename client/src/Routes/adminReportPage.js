import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { reportDataState } from "../atoms/adminPage/report";
import { accessToken } from "../atoms/loginData";
import ReportTable from "../components/adminReport/ReportTable";
import Header from "../components/Header";

const AdminReportPage = () => {
  const [TOKEN] = useRecoilState(accessToken);
  const [, setReportData] = useRecoilState(reportDataState);

  useEffect(() => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    const URL = `${process.env.REACT_APP_URL}/adminPage`;

    axios
      .get(URL, config)
      .then((response) => {
        console.log(response.data.reportedBoards);
        setReportData(response.data.reportedBoards);
      })
      .catch((error) => {
        console.log("Admin ReportPage Get Fail :", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className=" mypage-header-tab ">
        <ReportTable />
      </div>
    </div>
  );
};

export default AdminReportPage;
