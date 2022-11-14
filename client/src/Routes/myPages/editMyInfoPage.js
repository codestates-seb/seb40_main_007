import EditNickname from "../../components/editmyinfo/EditNickname";
import EditProfileImg from "../../components/editmyinfo/EditProfileImg";
import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import { Link } from "react-router-dom";

const EditMyInfoPage = () => {
  return (
    <>
      <Header />
      <div className="pt-24 flex flex-col items-center justify-center gap-7">
        <MyPageTab />
        <div className="w-full max-w-xl">
          <div className="mb-3 flex justify-start ">
            <p className="ml-2 pr-7 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
              내 정보 수정
            </p>
          </div>
          <div className="flex items-center flex-col">
            <EditProfileImg />
            <EditNickname />
            <div className="pt-20 gap-2 flex flex-col items-center">
              <Link to="/mypage">
                <button className="btn">수정완료</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMyInfoPage;
