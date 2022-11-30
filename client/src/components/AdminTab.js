import { useRecoilState } from "recoil";
import { adminTabState } from "../atoms/adminPage/adminTabState";

const AdminTab = () => {
  const [adminTab, setAdminTab] = useRecoilState(adminTabState);

  return (
    <div className="w-full mypage-header-tab">
      <div className="flex flex-row justify-center mt-5 text-2xl font-bold">
        <button
          onClick={() => setAdminTab("게시글관리")}
          className={
            adminTab === "게시글관리"
              ? "w-36 border-b-2 text-center border-b-[rgb(83,199,240)] text-[rgb(83,199,240)]"
              : "w-36 text-center text-gray-500"
          }
        >
          게시글 관리
        </button>
        <button
          onClick={() => setAdminTab("통계")}
          className={
            adminTab === "통계"
              ? "w-36 border-b-2 text-center border-b-[rgb(83,199,240)] text-[rgb(83,199,240)]"
              : "w-36 text-center text-gray-500"
          }
        >
          통계
        </button>
      </div>
    </div>
  );
};

export default AdminTab;
