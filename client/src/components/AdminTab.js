import { Link } from "react-router-dom";
const AdminTab = ({ tabData }) => {
  return (
    <div className="w-full mypage-header-tab">
      <div className="flex flex-row justify-center mt-5 text-2xl font-bold">
        <Link to={"/admin/report"}>
          <div
            className={
              tabData === "게시글관리"
                ? "w-36 border-b-2 text-center border-b-[rgb(83,199,240)] text-[rgb(83,199,240)]"
                : "w-36 text-center text-gray-500"
            }
          >
            게시글 관리
          </div>
        </Link>
        <Link to={"/admin/data"}>
          <div
            className={
              tabData === "통계"
                ? "w-36 border-b-2 text-center border-b-[rgb(83,199,240)] text-[rgb(83,199,240)] "
                : "w-36 text-center text-gray-500"
            }
          >
            통계
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminTab;
