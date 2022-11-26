import InfoEditBtn from "../../components/myprofile/infoeditbtn/InfoEditBtn";
import MyStation from "../../components/myprofile/mystation/MyStation";
import MyInfo from "../../components/myprofile/myinfo/MyInfo";
import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import MyEmail from "../../components/myprofile/myinfo/MyEmail";
// import Loading from "../../components/Loading";
import { useRecoilValue } from "recoil";
import { userName, userAvatar } from "../../atoms/loginTest";

const MyProfilePage = () => {
  const name = useRecoilValue(userName);
  const avatar = useRecoilValue(userAvatar);
  return (
    <>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내역이요"} />

        <div className="w-full max-w-xl flex justify-center items-center flex-col">
          {/* <Loading></Loading> */}
          <div id="my__EditBtn" className="w-full flex justify-end">
            <InfoEditBtn />
          </div>
          <MyInfo nickName={name} userAvatar={avatar} /> <MyEmail />
          <MyStation />
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
