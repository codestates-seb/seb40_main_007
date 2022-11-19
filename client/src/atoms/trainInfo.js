import { atom } from "recoil";
import { v1 } from "uuid";

export const trainInfo = atom({
  key: `trainInfo/${v1()}`,
  default: [
    {
      id: 1,
      train: "행신역",
      position: { lat: 37.612133259092005, lng: 126.83424521252282 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다.",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 2,
      train: "서울역",
      position: { lat: 37.55592978778571, lng: 126.97210824616438 },
      describe:
        "서울역(Seoul station은 서울특별시 용산구와 중구에 위치한 철도역이다.",
      adress: "서울특별시 용산구 한강대로 405",
      phone: "000 - 0000",
    },
    {
      id: 3,
      train: "영등포역",
      position: { lat: 37.51564687008552, lng: 126.90744793931377 },
      describe:
        "영등포역(Yeongdeungpo station)은 서울특별시 영등포구 영등포본동에 있는 경부선의 철도역이자 수도권 전철 1호선의 전철역이다",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 4,
      train: "광명역",
      position: { lat: 37.416664546209894, lng: 126.88492056682958 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 5,
      train: "수원역",
      position: { lat: 37.26564253711089, lng: 127.00007046138899 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 6,
      train: "천안아산역",
      position: { lat: 37.416664546209894, lng: 126.88492056682958 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 7,
      train: "오송역",
      position: { lat: 36.62009444926888, lng: 127.3275725873306 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 8,
      train: "대전역",
      position: { lat: 36.331515660740514, lng: 127.43274734876098 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 9,
      train: "김천구미역",
      position: { lat: 36.11350772356422, lng: 128.1808380410188 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 10,
      train: "서대구역",
      position: { lat: 35.88149725008915, lng: 128.53991636668655 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 11,
      train: "동대구역",
      position: { lat: 35.87923403176077, lng: 128.62831608587155 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 12,
      train: "밀양역",
      position: { lat: 35.4744653487994, lng: 128.77138264933427 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 13,
      train: "구포역",
      position: { lat: 35.20553573180837, lng: 128.9972344310166 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 14,
      train: "부산역",
      position: { lat: 35.11519430741748, lng: 129.04043150413258 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 15,
      train: "울산역",
      position: { lat: 35.55143883893413, lng: 129.13859938669552 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 16,
      train: "신경주역",
      position: { lat: 35.79829560393723, lng: 129.13978970633767 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
    {
      id: 17,
      train: "포항역",
      position: { lat: 35.79829560393723, lng: 129.13978970633767 },
      describe:
        "행신역(Haengsin station)은 경기도 고양시 덕양구 행신동에 있는 경의선의 철도역이다. ",
      adress: "경기도 고양시 덕양구 소원로 102",
      phone: "000 - 0000",
    },
  ],
});

// import { useRecoilValue } from "recoil";
// import { trainInfo } from "../atoms/trainInfo";
// const trainStationInfo = useRecoilValue(trainInfo);
