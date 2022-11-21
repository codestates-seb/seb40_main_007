import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
/* eslint-disable */
import "swiper/css";
import "swiper/css/navigation";

const DetailImageSlider = () => {
  const info = {
    boardId: 2,
    title: "돼지국밥",
    review: "뉴진스 만큼 멋진 곳",
    star: 3.5,
    thumbnail: "https://i.ytimg.com/vi/lgfXrQUx4go/maxresdefault.jpg",
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
      "https://magazine.cheil.com/wp-content/uploads/2022/09/%EC%BD%98%ED%85%90%EC%B8%A0B_960_600_7-1.jpg",
      "https://i.ytimg.com/vi/CPuJ6xPRYXQ/maxresdefault.jpg",
    ],
    tags: {
      detailTag: "한식",
      moodTag: ["아늑한", "정겨운", "깔끔한", "뷰가 좋은"],
      priceTag: "만원 초과 2만원 이하",
    },
  };

  const allUrls = [info.thumbnail, ...info.imageUrls];

  return (
    <div className="flex justify-center items-center">
      <Swiper modules={[Navigation]} navigation={true}>
        {allUrls.map((el) => {
          return (
            <SwiperSlide key={el}>
              <div className="flex justify-center items-center">
                <img
                  className="object-cover w-[500px] h-[480px] block py-10"
                  src={el}
                  alt={el}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default DetailImageSlider;
