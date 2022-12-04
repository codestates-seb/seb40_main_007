import { atom } from "recoil";

// 내 여행 계획 목록
// const [ myTravelList, setMyTravelList] = useRecoilState(myTravelListData);
export const myTravelListData = atom({
  key: "myTravelList",
  default: [],
});

// 현재 내 여행 계획 목록 아이디
// const [ myTravelId, setMyTravelId] = useRecoilState(myTravelIdSelect);
export const myTravelIdSelect = atom({
  key: "myTravelId",
  default: null,
});

// 현재 내 여행 계획 목록 이름
// const [ myTravelName, setMyTravelName] = useRecoilState(myTravelNameSelect);
export const myTravelNameSelect = atom({
  key: "myTravelName",
  default: null,
});

// 현재 내 여행 계획 데이터
// const [ myTravel, setMyTravel] = useRecoilState(myTravelData);
export const myTravelData = atom({
  key: "myTravel",
  default: null,
});

// 현재 내 여행 계획 총 시간
// const [ wholeTime, setWholeTime] = useRecoilState(wholeTimeData);
export const wholeTimeData = atom({
  key: "wholeTime",
  default: null,
});

// 현재 내 여행 계획 각 게시글 거리 시간
// const [ timeBetweenBoards, setTimeBetweenBoards] = useRecoilState(timeBetweenBoardsData);
export const timeBetweenBoardsData = atom({
  key: "timeBetweenBoards",
  default: null,
});

// 내 여행 계획에서 원하는 게시물로 중앙 이동
// const [ traveMapCenter, setTraveMapCenter] = useRecoilState(traveMapCenterEvent);
export const traveMapCenterEvent = atom({
  key: "traveMapCenter",
  default: {
    lat: 36.58834236643186,
    lng: 128.0072011230013,
  },
});
