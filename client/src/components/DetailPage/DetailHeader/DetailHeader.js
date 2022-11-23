import DetailStarScore from "./DetailStarScore";
import { TiPencil } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import Heart from "../../Heart";
const DetailHeader = () => {
  const info = {
    boardId: 2,
    title: "돼지국밥",
    review: "뉴진스 만큼 멋진 곳",
    star: 3.5,
    thumbnail: "https://s3주소/images/thumbnail_of_2",
    stationId: 2,
    categoryId: 1,
    address: "교동짬뽕",
    timeFromStation: 627,
    dibs: false,
    upScore: 0,
    downScore: 0,
    scoreStatus: 0,
    createdAt: "2022-11-16T22:11:43.34156",
    writer: {
      memberId: 1,
      name: "민트 비빔면 1",
      avatar:
        "https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/profile_red.png",
    },
    imageUrls: [
      "images/20221116/40820284718100.jpg",
      "images/20221116/40820326370000.jpg",
      "images/20221116/40820326876300.jpg",
    ],
    tags: {
      detailTag: "한식",
      moodTag: ["아늑한", "정겨운", "깔끔한", "뷰가 좋은"],
      priceTag: "2만원 이하",
    },
  };

  const allTags = [
    info.tags.detailTag,
    ...info.tags.moodTag,
    info.tags.priceTag,
  ];

  const DateTime = new Date(info.createdAt);

  const trainInfo = { 2: "부산역" };

  return (
    <div className="flex flex-col mt-20">
      <div className="mb-5 flex flex-row justify-between">
        <span className="font-semibold text-lg text-[rgb(83,199,240)] border-b-2 border-b-[rgb(83,199,240)] px-3 py-2">
          {trainInfo[info.stationId]}
        </span>
        <div className="flex flex-row space-x-1 place-items-end">
          <button className="w-[30px] h-[30px] bg-white border-2 border-[rgb(83,199,240)] rounded-3xl p-0.5 flex justify-center items-center">
            <TiPencil size={"30"} color={"#52C7F1"} />
          </button>
          <button className="w-[30px] h-[30px] bg-[rgb(83,199,240)] rounded-3xl p-0.5 flex justify-center items-center">
            <FaRegTrashAlt size={"20"} color={"#fff"} />
          </button>
          <Heart />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex space-x-2">
          <span className="text-2xl font-bold">{info.title}</span>
          <DetailStarScore />
          <span className="flex justify-center items-end text-xs text-gray-500">
            {DateTime.toLocaleString("ko-KR")}
          </span>
        </div>
      </div>
      <div className="flex space-x-2 mt-2">
        {allTags.map((el) => {
          return (
            <span
              key={el}
              className="text-xs font-semibold text-[rgb(83,199,240)] border-2 border-[rgb(83,199,240)] rounded-full py-0.5 px-2"
            >
              {el}
            </span>
          );
        })}
      </div>
      <div className="flex flex-row items-center space-x-2">
        <div className="w-6 h-6 my-3">
          <img src={info.writer.avatar} alt="사진" className="rounded-full" />
        </div>
        <span className="text-xs">{info.writer.name}</span>
      </div>
    </div>
  );
};

export default DetailHeader;
