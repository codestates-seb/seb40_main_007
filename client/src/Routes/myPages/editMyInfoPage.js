import EditNickname from "../../components/editmyinfo/EditNickname";
import EditProfileImg from "../../components/editmyinfo/EditProfileImg";
import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";

const EditMyInfoPage = () => {
  return (
    <>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내역이요"} />
        <div className="lg:w-full lg:max-w-xl w-full lg:px-0 px-2">
          <div className="mb-3 flex justify-start lg:max-w-xl">
            <p className="lg:text-base text-sm ml-3 lg:px-3 px-2 py-1 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
              내 정보 수정
            </p>
          </div>
          <div className="flex items-center flex-col">
            <EditProfileImg />
            <EditNickname />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMyInfoPage;
