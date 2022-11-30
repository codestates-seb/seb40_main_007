import { useRecoilState } from "recoil";
import { adminIssueData } from "../atoms/adminPage/issueData";

const AdminIssue = () => {
  const [adminIssue] = useRecoilState(adminIssueData);

  return (
    <div className="p-2 mt-10 lg:max-w-[1400px] w-full mx-auto flex flex-col justify-center">
      <div className="w-full text-start">
        <h2 className="text-xl italic text-[rgb(83,199,240)] font-semibold w-full border-b-2 mb-1">
          Today Issue
        </h2>
      </div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col justify-center items-center">
          <p className="pl-1 pb-1 font-semibold text-[rgba(0,0,0,0.6)]">
            오늘 게시글 수
          </p>
          <p>{adminIssue ? adminIssue.todayBoard : ""}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="pl-1 pb-1 font-semibold text-[rgba(0,0,0,0.6)]">
            이번달 게시글 수
          </p>
          <p>{adminIssue ? adminIssue.monthBoard : ""}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="pl-1 pb-1 font-semibold text-[rgba(0,0,0,0.6)]">
            전체 게시글 수
          </p>
          <p>{adminIssue ? adminIssue.totalBoard : ""}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="pl-1 pb-1 font-semibold text-[rgba(0,0,0,0.6)]">
            회원 수
          </p>
          <p>{adminIssue ? adminIssue.totalMember : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminIssue;
