import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import MyTravelList from "../../components/mytravel/MyTravelList";
import { postDummyState } from "../../atoms/dummyData";
import { useRecoilValue } from "recoil";
import MyTravelMap from "../../components/mytravel/MyTravelMap";
import { useState } from "react";

const MyTravelPage = () => {
  const [...posts] = useRecoilValue(postDummyState);

  // 원본 데이터
  const dummyData = posts.slice(0, 10);

  // 가변데이터
  const [data, setData] = useState(dummyData);
  // console.log(
  //   "boardId:",
  //   data.map((el) => el.boardId)
  // );

  // 빈 데이터
  // const voidData = [];
  return (
    <>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내여행계획"} />
        <div className="lg:w-full w-full flex justify-center items-center flex-col">
          <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-end gap-2 ">
            <MyTravelMap data={data} />
            <MyTravelList data={data} initData={dummyData} setData={setData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTravelPage;
