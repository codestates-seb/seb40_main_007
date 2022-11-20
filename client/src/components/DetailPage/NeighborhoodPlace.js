import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Heart from "../../components/Heart";
import PostStarScore from "../MainPage/Posts/PostStarScore";

/* eslint-disable */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NeighborhoodPlace = () => {
  const score = 4;
  const places = [
    {
      id: 1,
      title: "제목1",
      url: "https://magazine.cheil.com/wp-content/uploads/2022/09/%EC%BD%98%ED%85%90%EC%B8%A0B_960_600_7-1.jpg",
      between: "역 5분거리",
      comment: "내용1입니다 ",
    },
    {
      id: 2,
      title: "제목2",
      url: "https://i.ytimg.com/vi/lgfXrQUx4go/maxresdefault.jpg",
      between: "역 5분거리",
      comment: "뉴진스 너무 예뻐서 보면서 기운이나",
    },
    {
      id: 3,
      title: "제목3",
      url: "https://i.ytimg.com/vi/CPuJ6xPRYXQ/maxresdefault.jpg",
      between: "역 5분거리",
      comment: "뉴진스로 안구 정화중",
    },
    {
      id: 4,
      title: "제목1",
      url: "https://magazine.cheil.com/wp-content/uploads/2022/09/%EC%BD%98%ED%85%90%EC%B8%A0B_960_600_7-1.jpg",
      between: "역 5분거리",
      comment: "내용1입니다",
    },
    {
      id: 5,
      title: "제목2",
      url: "https://i.ytimg.com/vi/lgfXrQUx4go/maxresdefault.jpg",
      between: "역 5분거리",
      comment: "내용2입니다",
    },
    {
      id: 6,
      title: "제목3",
      url: "https://i.ytimg.com/vi/CPuJ6xPRYXQ/maxresdefault.jpg",
      between: "역 5분거리",
      comment: "내용3입니다",
    },
    {
      id: 7,
      title: "제목1",
      url: "https://magazine.cheil.com/wp-content/uploads/2022/09/%EC%BD%98%ED%85%90%EC%B8%A0B_960_600_7-1.jpg",
      between: "역 5분거리",
      comment: "내용1입니다",
    },
    {
      id: 8,
      title: "제목2",
      url: "https://i.ytimg.com/vi/lgfXrQUx4go/maxresdefault.jpg",
      between: "역 5분거리",
      comment: "내용2입니다",
    },
    {
      id: 9,
      title: "제목3",
      url: "https://i.ytimg.com/vi/CPuJ6xPRYXQ/maxresdefault.jpg",
      between: "역 5분거리",
      comment: "내용3입니다",
    },
    {
      id: 10,
      title: "제목1",
      url: "https://magazine.cheil.com/wp-content/uploads/2022/09/%EC%BD%98%ED%85%90%EC%B8%A0B_960_600_7-1.jpg",
      between: "역 5분거리",
      comment: "내용1입니다",
    },
    {
      id: 11,
      title: "제목2",
      url: "https://i.ytimg.com/vi/lgfXrQUx4go/maxresdefault.jpg",
      between: "역 5분거리",
      comment: "내용2입니다",
    },
    {
      id: 12,
      title: "제목3",
      url: "https://i.ytimg.com/vi/CPuJ6xPRYXQ/maxresdefault.jpg",
      between: "역 5분거리",
      comment: "내용3입니다",
    },
  ];

  return (
    <>
      <div className="flex justify-center py-10 mb-20">
        <div className="max-w-5xl">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {places.map((place) => {
              return (
                <SwiperSlide key={place.id}>
                  <div className="group border-2 h-[300px]">
                    <div className="rounded-md group-hover:opacity-60 relative">
                      <div className="absolute right-2">
                        <Heart />
                      </div>
                      <img
                        src={place.url}
                        alt="alt"
                        className="object-fit static w-full h-[200px]"
                      />
                      <div className=" bottom-0 right-0">
                        <PostStarScore score={score} />
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="font-bold text-xl">{place.title}</div>
                      <div className="font-light text-sm text-gray-500">
                        {place.between}
                      </div>
                    </div>
                    <div className="text-base">{place.comment}</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default NeighborhoodPlace;
