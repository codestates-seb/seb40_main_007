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
  timeBetweenBoardsData,
  wholeTimeData,
} from "../../atoms/mypage/myTravelData";

const MyTravelPage = () => {
  // const [...posts] = useRecoilValue(postDummyState);
  // 인증 토큰
  const [TOKEN] = useRecoilState(accessToken);

  // 내 여행 계획 데이터
  const [myTravelList, setMyTravelList] = useRecoilState(myTravelListData);
  const [myTravelId, setMyTravelId] = useRecoilState(myTravelIdSelect);
  const [, setMyTravelName] = useRecoilState(myTravelNameSelect);
  const [, setWholeTime] = useRecoilState(wholeTimeData);
  const [, setTimeBetweenBoards] = useRecoilState(timeBetweenBoardsData);

  const [myTravel, setMyTravel] = useRecoilState(myTravelData);
  console.log("myTravel1", myTravel);
  console.log(myTravelList);

  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(true);
  console.log(loading);
  // 원본 데이터
  // 가변데이터
  const [data, setData] = useState();
  console.log("myTravel2", data);

  // 첫 화면 세팅
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
            setWholeTime(response.data.wholeTime);
            setTimeBetweenBoards(response.data.timeBetweenBoards);
            setLoading(false);
          })
          .catch((error) => {
            console.log("GET TravelItem Fail :", error);
          })
      : console.log("아이템이 비어있음");
  }, [myTravelId]);

  // 목록 추가
  const addPlan = () => {
    const URL = `${process.env.REACT_APP_URL}/planners`;
    const data = {
      plannerName: inputText,
    };
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .post(URL, data, config)
      .then((response) => {
        const data = response.data.items;
        console.log("list add 성공", data);
        setMyTravelList(data);
        data.length === 1
          ? (setMyTravelId(data[0]?.plannerId),
            setMyTravelName(data[0]?.plannerName),
            setWholeTime(data[0]?.wholeTime),
            setTimeBetweenBoards(data[0]?.timeBetweenBoards))
          : null;
        setInputText("");
      })
      .catch((error) => {
        console.log("Add TravelList Fail :", error);
      });
  };

  return (
    <>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내여행계획"} />
        <div className="lg:w-full w-full flex justify-center items-center flex-col">
          <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-end gap-2 ">
            {/* 여행계획이 비었을때 보여줄 화면 제작 필요 */}
            {myTravelList.length !== 0 ? (
              <>
                <MyTravelMap data={data} />
                <MyTravelList
                  data={data}
                  initData={myTravel?.boards}
                  setData={setData}
                />
              </>
            ) : (
              <div className="w-full flex justify-center">
                <div className="text-center mx-5 flex flex-col items-center">
                  <img className="w-9" src="../images/logo.png" alt="logo" />
                  <p className="text-lg p-2 text-[rgb(83,199,240)] font-bold">
                    새 여행 계획을 만들어보세요!
                  </p>
                  <div
                    className={`m-2 p-2 w-4/5 rounded-lg border-2 border-[rgb(83,199,240)] flex items-center `}
                  >
                    <input
                      type={"text"}
                      className="w-full focus:outline-none"
                      onChange={(text) => setInputText(text.target.value)}
                    ></input>
                  </div>
                  {/* 추가필요 : 텍스트에 따른 유효성 검사 필요합니다. */}
                  <p className="w-4/5 text-xs text-red-500 font-medium text-left">
                    {inputText.length >= 1
                      ? null
                      : "* 한 글자 이상 입력해주세요 !"}
                  </p>
                  <div
                    className={`${
                      inputText.length >= 1 ? "py-5 mt-4" : "py-5"
                    }`}
                  >
                    <button
                      onClick={addPlan}
                      className={`btn hover:scale-110 active:scale-100 ${
                        inputText.length >= 1
                          ? ""
                          : "pointer-events-none bg-gray-400"
                      }`}
                    >
                      추가
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTravelPage;
