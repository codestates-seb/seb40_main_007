import axios from "axios";
import { useEffect, useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { useRecoilState } from "recoil";
import { adminIssueData } from "../../atoms/adminPage/issueData";
import { reportDataState } from "../../atoms/adminPage/report";
import { accessToken } from "../../atoms/loginData";
import ReportHeader from "./ReportHeader";
import ReportPost from "./ReportPost";

const ReportTable = () => {
  const [TOKEN] = useRecoilState(accessToken);
  const [reportData, setReportData] = useRecoilState(reportDataState);
  const [, setAdminIssue] = useRecoilState(adminIssueData);
  const [data, setData] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState();
  const [deleteUserId, setDeleteUserId] = useState();

  // 게시글 삭제할 경우
  useEffect(() => {
    data.length !== 0
      ? setData(data?.filter((_, index) => deleteIndex !== index))
      : null;
    setDeleteIndex();
  }, [deleteIndex]);

  // 유저 탈퇴시킬 경우
  useEffect(() => {
    data.length !== 0
      ? setData(data.filter((el) => el.writerId !== deleteUserId))
      : null;
    setDeleteUserId();
  }, [deleteUserId]);

  // data 할당
  useEffect(() => {
    reportData?.length !== 0 ? setData(reportData) : null;
  }, [reportData]);

  // 데이터 새로 고침
  const reportReset = () => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    const URL = `${process.env.REACT_APP_URL}/adminPage`;

    axios
      .get(URL, config)
      .then((response) => {
        console.log("report reset", response.data);
        setReportData(response.data.reportedBoards);
        setAdminIssue({
          todayBoard: response.data.todayBoard,
          monthBoard: response.data.monthBoard,
          totalBoard: response.data.totalBoard,
          totalMember: response.data.totalMember,
        });
      })
      .catch((error) => {
        console.log("Admin ReportPage Reset Get Fail :", error);
      });
  };
  return (
    <div className="lg:max-w-[1400px] p-2 w-full mx-auto flex flex-col justify-center">
      <div className="w-full text-start ">
        <h2 className="text-xl font-semibold w-full border-b-2 mb-1">
          신고 게시글
        </h2>
      </div>
      <div className="flex flex-row justify-between mb-1">
        <p className="pl-1 font-semibold text-[rgba(0,0,0,0.6)]">
          전체 게시글 수 : {data?.length !== 0 ? data.length : "0"}
        </p>
        <button
          className="active:scale-95 px-1 mr-2 border-2 rounded-md flex flex-row justify-center items-center shadow-[0px_0px_1px_1px_rgba(0,0,0,0.3)]"
          onClick={reportReset}
        >
          <p className="pr-1">신고 게시글 갱신</p>
          <VscDebugRestart size={18} />
        </button>
      </div>
      <ReportHeader />
      <div className="w-full max-h-[700px]  ">
        {data.length !== 0
          ? data.map((data, index) => (
              <ReportPost
                key={index}
                index={index}
                data={data}
                setDeleteIndex={setDeleteIndex}
                setDeleteUserId={setDeleteUserId}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default ReportTable;
