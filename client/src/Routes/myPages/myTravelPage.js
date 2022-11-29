import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import MyTravelList from "../../components/mytravel/MyTravelList";
// import { postDummyState } from "../../atoms/dummyData";
import { useRecoilState } from "recoil";
import MyTravelMap from "../../components/mytravel/MyTravelMap";
import { useEffect, useState } from "react";
import { accessToken } from "../../atoms/loginTest";
import axios from "axios";
import {
  myTravelData,
  myTravelIdSelect,
  myTravelListData,
  myTravelNameSelect,
} from "../../atoms/mypage/myTravelData";

const MyTravelPage = () => {
  // const [...posts] = useRecoilValue(postDummyState);
  // 인증 토큰
  const [TOKEN] = useRecoilState(accessToken);

  const [myTravelList, setMyTravelList] = useRecoilState(myTravelListData);
  const [myTravelId, setMyTravelId] = useRecoilState(myTravelIdSelect);
  const [, setMyTravelName] = useRecoilState(myTravelNameSelect);

  const [myTravel, setMyTravel] = useRecoilState(myTravelData);
  console.log("myTravel1", myTravel);
  console.log(myTravelList);

  // 원본 데이터
  // 가변데이터
  const [data, setData] = useState();
  console.log("myTravel2", data);

  //
  useEffect(() => {
    const config = {
      headers: { Authorization: TOKEN },
    };
    const URL = `${process.env.REACT_APP_URL}/planners`;

    axios
      .get(URL, config)
      .then((response) => {
        setMyTravelList(response.data.items);
        response.data.items.length !== 0
          ? (setMyTravelId(response.data.items[0].plannerId),
            setMyTravelName(response.data.items[0].plannerName))
          : setMyTravelId(null);
      })
      .catch((error) => {
        console.log("GET TravelList Fail :", error);
      });
  }, []);

  // 내 여행 계획 목록 클릭시 해당 리스트 데이터 세팅
  useEffect(() => {
    console.log("myTravelId", myTravelId);
    const config = {
      headers: { Authorization: TOKEN },
    };
    const URL = `${process.env.REACT_APP_URL}/planners/${myTravelId}`;

    myTravelId
      ? axios
          .get(URL, config)
          .then((response) => {
            console.log("GET TravelItem", response.data);
            setMyTravel(response.data);
            setData(response.data.boards);
          })
          .catch((error) => {
            console.log("GET TravelItem Fail :", error);
          })
      : console.log("아이템이 비어있음");
  }, [myTravelId]);

  return (
    <>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내여행계획"} />
        <div className="lg:w-full w-full flex justify-center items-center flex-col">
          <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-end gap-2 ">
            {/* 여행계획이 비었을때 보여줄 화면 제작 필요 */}
            {myTravel ? (
              <>
                <MyTravelMap data={data} />
                <MyTravelList
                  data={data}
                  initData={myTravel.boards}
                  setData={setData}
                />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTravelPage;
