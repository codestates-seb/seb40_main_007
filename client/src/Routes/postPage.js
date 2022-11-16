import Header from "../components/Header";
import TrainStationSelect from "../components/TrainStationSelect";
import StartRating from "../components/StarRating";
import OnlineInput from "../components/OneLineInput";
import ImageUpload from "../components/ImageUpload";
// import ListTag from "../components/tag/ListTag";
import Tag from "../components/tag/Tag";
// import TagBtn from "../components/tag/TagBtn";
import PostCategoryTabs from "../components/PostPage/PostCategoriTabs";
import PostRelatedTab from "../components/PostPage/PostRelatedTab";
import PostRelatedAtmasTab from "../components/PostPage/postRelatedAtmasTab";
import PostRelatedPriceTab from "../components/PostPage/postRelatedPriceTab";

export default function PostPage() {
  return (
    <>
      <Header />
      <div className="pt-20 max-w-5xl m-auto">
        <TrainStationSelect />
        <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 text-18 text-[rgb(83,199,240)]">
          위치 등록
        </div>
        <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 text-18 text-[rgb(83,199,240)]">
          사진 등록
        </div>
        <div className="flex justify-center items-center m-auto border">
          <ImageUpload />
        </div>
        <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 text-18 text-[rgb(83,199,240)] ">
          별점
        </div>
        <div className="flex justify-center m-auto">
          <StartRating />
        </div>
        <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 text-18 text-[rgb(83,199,240)] ">
          관련태그
        </div>

        <Tag tagList={["t", "t", "t"]} />

        <div className="font-bold flex border justify-center items-center">
          카테고리
          <PostCategoryTabs />
        </div>
        <div className="font-bold flex border justify-center items-center">
          관련 태그
          <PostRelatedTab />
        </div>
        <div className="font-bold flex border justify-center items-center">
          분위기
          <PostRelatedAtmasTab />
        </div>
        <div className="font-bold flex border justify-center items-center">
          분위기
          <PostRelatedPriceTab />
        </div>

        {/* 한줄평 */}
        <OnlineInput />
      </div>
    </>
  );
}
