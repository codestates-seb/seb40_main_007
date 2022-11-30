import { useRecoilValue } from "recoil";
import { reportDataState } from "../../atoms/adminPage/report";
import ReportHeader from "./ReportHeader";
import ReportPost from "./ReportPost";

const ReportTable = () => {
  const reportData = useRecoilValue(reportDataState);

  return (
    <div className="lg:max-w-[1400px] p-2 w-full mx-auto flex flex-col justify-center">
      <div className="w-full text-start ">
        <h2 className="text-xl font-semibold w-full border-b-2 mb-1">
          신고 게시글
        </h2>
      </div>
      <p className="pl-1 pb-1 font-semibold text-[rgba(0,0,0,0.6)]">
        전체 게시글 수 : {reportData?.length !== 0 ? reportData.length : "0"}
      </p>
      <ReportHeader />
      <div className="w-full max-h-[700px]  ">
        {reportData.length !== 0
          ? reportData.map((data, index) => (
              <ReportPost key={index} index={index + 1} data={data} />
            ))
          : null}
      </div>
    </div>
  );
};

export default ReportTable;
