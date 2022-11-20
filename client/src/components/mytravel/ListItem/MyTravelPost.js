/*eslint-disable*/
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import PostStarScore from "../../MainPage/Posts/PostStarScore";
import ViewTag from "../../tag/viewTags/ViewTag";
import ViewDislike from "../../ViewLike/ViewDisLike";
import ViewLike from "../../ViewLike/ViewLike";

const MyTravelPost = ({ data }) => {
  console.log(data);
  const dummy = [
    {
      boardId: 1,
      title: "돼지국밥",
      review: "크으 이게 국밥이여 부추여",
      star: 1,
      thumbnail:
        "https://d12zq4w4guyljn.cloudfront.net/20220215014519053_photo_79460f6e0b30.jpg",
      dibs: false,
      address: "교동짬뽕",
      latitude: 35.11645769146161,
      longitude: 129.04139799578658,
      timeFromStation: 627,
      tags: {
        detailTag: "한식",
        moodTag: ["아늑한", "정겨운", "깔끔한", "뷰가 좋은"],
        priceTag: "만원 초과 2만원 이하",
      },
    },
  ];
  const dummyTagList = [
    data.tags.detailTag,
    ...data.tags.moodTag,
    data.tags.priceTag,
  ];
  return (
    <div className="mt-4 border-[1px] border-[rgb(83,199,240)] flex flex-row items-center">
      {/* 업,다운 */}
      <div className="w-10 h-full flex flex-col items-center justify-around">
        <button className="text-rgb(83,199,240)">
          <MdKeyboardArrowUp size={40} color="rgb(83,199,240)" />
        </button>
        <button>
          <MdKeyboardArrowDown size={40} color="rgb(83,199,240)" />
        </button>
      </div>
      {/* 썸네일 */}
      <div className="w-full flex flex-row justify-between items-center">
        <div className="h-full">
          <img
            className="w-32 h-32 rounded-xl"
            alt="post img"
            src={data.thumbnail}
          />
        </div>
        {/* 내용 밑 삭제 버튼 */}
        <div className="w-9/12">
          <div className="h-4 text-end">
            <button>
              <RiCloseFill size={25} color="rgb(83,199,240)" />
            </button>
          </div>
          <div className="px-2">
            {/* 타이틀 */}
            <div className="flex flex-row items-center">
              <h2 className="text-sm mr-2 font-semibold">{data.title}</h2>
              <div>
                <PostStarScore score={data.star} size={15} />
              </div>
            </div>
            {/* 태그 */}
            <div className="w-11/12 pt-2">
              <ViewTag tagList={dummyTagList} color={"blue"}></ViewTag>
            </div>
            {/* 한줄소개 */}
            <div className="flex w-5/6 flex-row">
              <p className="text-xs w-1/5 pt-2 text-[#8A8A8A]">한줄 소개</p>
              <div className="text-xs w-4/5 h-6 pt-2 mt-2 flex flex-row">
                <img
                  className="w-2 h-2"
                  src="/images/open_quote.png"
                  alt="openQuote"
                />
                <p className="h-full w-full flex justify-center items-center px-1 overflow-hidden">
                  {data.review}
                </p>
                <div className="h-full flex flex-col justify-end">
                  <img
                    className="w-2 h-2"
                    src="/images/close_quote.png"
                    alt="closeQuote"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 추천/비추천 수 */}
          <div className="flex flex-row justify-end gap-1 p-2">
            <div className="w-fit">
              <ViewLike upScore={105}></ViewLike>
            </div>
            <div className="w-fit">
              <ViewDislike DownScore={5}></ViewDislike>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTravelPost;
