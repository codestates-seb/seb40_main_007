import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import MyTravelList from "../../components/mytravel/MyTravelList";
import { postDummyState } from "../../atoms/dummyData";
import { useRecoilValue } from "recoil";
import MyTravelMap from "../../components/mytravel/MyTravelMap";
import MyTravelDot from "../../components/mytravel/MyTravelDot";
const MyTravelPage = () => {
  const [...posts] = useRecoilValue(postDummyState);

  const dummyData = posts.slice(0, 10);

  return (
    <>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내여행계획"} />
        <div className="lg:w-full w-full flex justify-center items-center flex-col">
          <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-end gap-2 ">
            <MyTravelMap data={dummyData} />
            <MyTravelList data={dummyData} />
            <div>
              <MyTravelDot props={["5분", "6분", "7분", "8분", "99분"]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTravelPage;
