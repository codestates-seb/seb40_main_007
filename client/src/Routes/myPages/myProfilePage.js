import InfoEditBtn from "../../components/myprofile/infoeditbtn/InfoEditBtn";
import MyStation from "../../components/myprofile/mystation/MyStation";
import MyInfo from "../../components/myprofile/myinfo/MyInfo";
import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
const MyProfilePage = () => {
  return (
    <>
      <Header />
      <div className="pt-24 flex flex-col items-center justify-center gap-7">
        <MyPageTab />
        <div className="w-full max-w-xl flex justify-center items-center flex-col">
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
