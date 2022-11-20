import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import MyTravelList from "../../components/mytravel/MyTravelList";

const MyTravelPage = () => {
  return (
    <>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내역이요"} />
        <div className="w-full max-w-xl flex justify-center items-center flex-col">
          <div className="w-full flex justify-end">
            <MyTravelList></MyTravelList>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTravelPage;
