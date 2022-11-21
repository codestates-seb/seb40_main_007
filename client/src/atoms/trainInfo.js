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
      phone: "031-979-0263",
    },
    {
      id: 2,
      train: "서울역",
      position: { lat: 37.55592978778571, lng: 126.97210824616438 },
      describe:
        "서울역(Seoul station은 서울특별시 용산구와 중구에 위치한 철도역이다.",
      adress: "서울특별시 용산구 한강대로 405",
      phone: "02-6110-1331",
    },
    {
      id: 3,
      train: "영등포역",
      position: { lat: 37.51564687008552, lng: 126.90744793931377 },
      describe:
        "영등포역은 서울특별시 영등포구 영등포본동에 있는 경부선의 철도역이다",
      adress: "서울특별시 영등포구 경인로 846",
      phone: "02-2639-3320",
    },
    {
      id: 4,
      train: "광명역",
      position: { lat: 37.416664546209894, lng: 126.88492056682958 },
      describe:
        "광명역은 대한민국 경기도 광명시 일직동에 있는 1호선의 철도역이다. ",
      adress: "경기도 광명시 광명역로 21 (일직동)",
      phone: "02-899-9270",
    },
    {
      id: 5,
      train: "수원역",
      position: { lat: 37.26564253711089, lng: 127.00007046138899 },
      describe:
        "수원역은 경기도 수원시 팔달구 매산로1가에 위치한 경부선, 분당선, 수인선의 철도역이다. ",
      adress: "경기도 수원시 팔달구 덕영대로 924",
      phone: "031-253-2724",
    },
    {
      id: 6,
      train: "천안아산역",
      position: { lat: 36.79420674636496, lng: 127.1045366477671 },
      describe:
        "천안아산역(온양온천)은 대한민국 충청남도 아산시 배방읍 장재리에 있는 철도역이다.",
      adress: "충청남도 아산시 배방읍 희망로 100",
      phone: "041-549-6788",
    },
    {
      id: 7,
      train: "오송역",
      position: { lat: 36.62009444926888, lng: 127.3275725873306 },
      describe:
        "오송역(Osong station)은 대한민국 충청북도 청주시 흥덕구 오송읍 봉산리에 있는 철도역이다.",
      adress: "	충청북도 청주시 흥덕구 오송읍 오송가락로 123",
      phone: "043-231-4542",
    },
    {
      id: 8,
      train: "대전역",
      position: { lat: 36.331515660740514, lng: 127.43274734876098 },
      describe:
        "대전역(Daejeon station)은 대전광역시 동구 정동에 있는 경부선 및 경부고속선의 철도역이다.",
      adress: "대전광역시 동구 중앙로 215",
      phone: "042-259-2416",
    },
    {
      id: 9,
      train: "김천구미역",
      position: { lat: 36.11350772356422, lng: 128.1808380410188 },
      describe:
        "김천(구미)역은 대한민국 경상북도 김천시 남면에 있는 경부고속철도의 철도역이다",
      adress: "경상북도 김천시 남면 혁신1로 51",
      phone: "054-437-2752",
    },
    {
      id: 10,
      train: "서대구역",
      position: { lat: 35.88149725008915, lng: 128.53991636668655 },
      describe: "서대구역은 대구광역시 서구 이현동에 있는 경부선의 철도역이다.",
      adress: "	대구광역시 서구 와룡로 527(이현동 232-1)",
      phone: "1544-7788",
    },
    {
      id: 11,
      train: "동대구역",
      position: { lat: 35.87923403176077, lng: 128.62831608587155 },
      describe:
        "동대구역은 대구광역시 동구 신암4동에 있는 경부고속선과 경부선의 철도역이다.",
      adress: "대구광역시 동구 동대구로 550",
      phone: "	053-940-2222",
    },
    {
      id: 12,
      train: "밀양역",
      position: { lat: 35.4744653487994, lng: 128.77138264933427 },
      describe:
        "밀양역(Miryang station)은 경상남도 밀양시 가곡동에 있는 경부선의 철도역이다. ",
      adress: "	경상남도 밀양시 중앙로 62",
      phone: "1544-7788",
    },
    {
      id: 13,
      train: "구포역",
      position: { lat: 35.20553573180837, lng: 128.9972344310166 },
      describe:
        "구포역(Gupo station)은 부산광역시 북구 구포동에 위치해 있는 경부선의 철도역이다.",
      adress: "부산광역시 북구 구포만세길 82",
      phone: "051-440-2496",
    },
    {
      id: 14,
      train: "부산역",
      position: { lat: 35.11519430741748, lng: 129.04043150413258 },
      describe:
        "부산역(Busan station)은 부산광역시 동구 초량동에 있는 경부선의 철도역이자 종점이다.",
      adress: "	부산광역시 동구 중앙대로 206 (초량동 1187-1)",
      phone: "	051-440-2288",
    },
    {
      id: 15,
      train: "울산역",
      position: { lat: 35.55143883893413, lng: 129.13859938669552 },
      describe:
        "울산역은 대한민국 울산광역시 울주군 삼남읍 신화리에 있는 경부고속선의 철도역이다.",
      adress: "	울산광역시 울주군 삼남읍 울산역로 177",
      phone: "052-254-7787",
    },
    {
      id: 16,
      train: "신경주역",
      position: { lat: 35.79829560393723, lng: 129.13978970633767 },
      describe:
        "신경주역은 대한민국 경상북도 경주시 건천읍 화천리에 있는 경부고속선과 동해선의 철도역이다.",
      adress: "	경상북도 경주시 건천읍 신경주역로 80",
      phone: "054-773-4566",
    },
    {
      id: 17,
      train: "포항역",
      position: { lat: 36.071737996704506, lng: 129.34223174717678 },
      describe:
        "포항역(Pohang station)은 경상북도 포항시 북구 흥해읍 이인리에 있는 동해선의 철도역이다.",
      adress: "경상북도 포항시 북구 흥해읍 포항역로 1",
      phone: "701-7609",
    },
  ],
});

// import { useRecoilValue } from "recoil";
// import { trainInfo } from "../atoms/trainInfo";
// const trainStationInfo = useRecoilValue(trainInfo);
