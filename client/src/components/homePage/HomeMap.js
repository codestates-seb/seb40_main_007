import { Map, MapMarker } from "react-kakao-maps-sdk"; //MarkerClusterer
export default function HomeMap() {
  // 1.행신 2.서울 3.영등포
  // 4.광명 5.수원 6.천안아산
  // 7.오송 8.대전 9.김천구미 10서대구  11.동대구
  // 12.밀양 13.구포 14.부산 15.울산 16.신경주 17.포항

  const trainMarkers = [
    {
      id: 1,
      train: "행신역",
      position: { lat: 37.612133259092005, lng: 126.83424521252282 },
    },
    {
      id: 2,
      train: "서울역",
      position: { lat: 37.55592978778571, lng: 126.97210824616438 },
    },
    {
      id: 3,
      train: "영등포역",
      position: { lat: 37.51564687008552, lng: 126.90744793931377 },
    },
    {
      id: 4,
      train: "광명역",
      position: { lat: 37.416664546209894, lng: 126.88492056682958 },
    },
    {
      id: 5,
      train: "수원역",
      position: { lat: 37.26564253711089, lng: 127.00007046138899 },
    },
    {
      id: 6,
      train: "천안아산역",
      position: { lat: 37.416664546209894, lng: 126.88492056682958 },
    },
    {
      id: 7,
      train: "오송역",
      position: { lat: 36.62009444926888, lng: 127.3275725873306 },
    },
    {
      id: 8,
      train: "대전역",
      position: { lat: 36.331515660740514, lng: 127.43274734876098 },
    },
    {
      id: 9,
      train: "김천구미역",
      position: { lat: 36.11350772356422, lng: 128.1808380410188 },
    },
    {
      id: 10,
      train: "서대구역",
      position: { lat: 35.88149725008915, lng: 128.53991636668655 },
    },
    {
      id: 11,
      train: "동대구역",
      position: { lat: 35.87923403176077, lng: 128.62831608587155 },
    },
    {
      id: 12,
      train: "밀양역",
      position: { lat: 35.4744653487994, lng: 128.77138264933427 },
    },
    {
      id: 13,
      train: "구포역",
      position: { lat: 35.20553573180837, lng: 128.9972344310166 },
    },
    {
      id: 14,
      train: "부산역",
      position: { lat: 35.11519430741748, lng: 129.04043150413258 },
    },
    {
      id: 15,
      train: "울산역",
      position: { lat: 35.55143883893413, lng: 129.13859938669552 },
    },
    {
      id: 16,
      train: "신경주",
      position: { lat: 35.79829560393723, lng: 129.13978970633767 },
    },
    {
      id: 17,
      train: "포항",
      position: { lat: 35.79829560393723, lng: 129.13978970633767 },
    },
  ];
  return (
    <Map
      level={15}
      center={{ lat: 36.5, lng: 127.5 }}
      style={{ width: "50%", height: "600px" }}
    >
      {trainMarkers.map((trainMarker) => (
        <MapMarker
          key={trainMarker.id}
          position={trainMarker.position}
          // image={{
          //   src: "/images/marker.png", // 마커이미지의 주소입니다
          //   size: {
          //     width: 20,
          //     height: 30,
          //   },
          // }}
        ></MapMarker>
      ))}
    </Map>
  );
}
