import InfoEditBtn from "../../components/myprofile/infoeditbtn/InfoEditBtn";
import MyStation from "../../components/myprofile/mystation/MyStation";
import MyInfo from "../../components/myprofile/myinfo/MyInfo";
import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
// import Loading from "../../components/Loading";
const MyProfilePage = () => {
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
          <MyInfo nickName={"Eugenius1st"} />
          <MyStation />
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
