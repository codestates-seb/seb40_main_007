import InfoEditBtn from "../components/myprofile/infoeditbtn/InfoEditBtn";
import MyStation from "../components/myprofile/mystation/MyStation";
import MyInfo from "../components/myprofile/myinfo/MyInfo";

const MyProfile = () => {
  return (
    <div className="w-[730px] flex justify-center items-center flex-col">
      <div id="my__EditBtn" className="w-full flex justify-end">
        <InfoEditBtn />
      </div>
      <MyInfo nickName={"Eugenius1st"} />
      <MyStation />
    </div>
  );
};

export default MyProfile;
