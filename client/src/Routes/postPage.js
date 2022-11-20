import Header from "../components/Header";
import PostTrainStationSelect from "../components/PostPage/PostTrainStationSelect";
import StartRating from "../components/StarRating";
import OnlineInput from "../components/OneLineInput";
import PostMap from "../components/PostPage/PostMap";
import ImageUpload from "../components/ImageUpload";
import PostCategoryTabs from "../components/PostPage/PostCategoriTabs";
import PostRelatedTab from "../components/PostPage/PostRelatedTab";
import PostRelatedAtmasTab from "../components/PostPage/postRelatedAtmasTab";
import Footer from "../components/Footer";
import ListTag from "../components/tag/ListTag";
import { useRecoilValue } from "recoil";
import {
  postTrainStationState,
  postpostionState,
  postAdressState,
  postTitleState,
  postCategoryState,
  postRelatedState,
  postRelatedAtmasState,
  postRelatedPriceState,
  postStarState,
  postCommentState,
} from "../atoms/postInfo";

export default function PostPage() {
  const postTrainStation = useRecoilValue(postTrainStationState);
  const postionState = useRecoilValue(postpostionState);
  const postAdress = useRecoilValue(postAdressState);
  const postTitle = useRecoilValue(postTitleState);
  const postCategory = useRecoilValue(postCategoryState);
  const postRelated = useRecoilValue(postRelatedState);
  const postRelatedAtmas = useRecoilValue(postRelatedAtmasState);
  const postRelatedPrice = useRecoilValue(postRelatedPriceState);
  const postStar = useRecoilValue(postStarState);
  const postComment = useRecoilValue(postCommentState);

  const onPostSubmit = () => {
    console.log(
      //form-data
      // application/json
      {
        data: {
          title: postTitle,
          review: postComment,
          star: postStar,
          latitude: postionState.lat,
          longitude: postionState.lng,
          stationId: postTrainStation,
          // 위 번호로 줘야 함..
          categoryId: [
            postCategory,
            postRelated,
            postRelatedAtmas,
            postRelatedPrice,
          ],
          //카테고리 아이디도 번호로 줘야함
          address: postAdress,
        },

        // multipart/form-data
        files: "이미지들",
      }
    );
  };
  return (
    <>
      <Header />
      <div className="pb-30 max-w-5xl m-auto">
        <div className="pt-20">
          <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 pt-10 pb-2 mb-5  text-18 text-[rgb(83,199,240)]">
            역 선택
          </div>
          <PostTrainStationSelect />
        </div>
        <PostMap />
        <ImageUpload />

        <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 pt-2 text-18 text-[rgb(83,199,240)] mt-16">
          별점
        </div>
        <div className="flex justify-center m-auto">
          <StartRating />
        </div>
        <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 my-16 text-18 text-[rgb(83,199,240)] ">
          관련태그
        </div>
        <div className="mb-5 w-fit m-auto sm:ml-56">
          <div className="font-bold flex items-center">
            <span className="mr-12">카테고리</span> <PostCategoryTabs />
          </div>
          <div className="font-bold flex items-center ">
            <span className="mr-9">관련 태그</span>
            <PostRelatedTab />
          </div>
          <div className="font-bold flex items-center">
            <span className="mr-14">분위기</span>
            <PostRelatedAtmasTab />
          </div>
          <div className="font-bold flex items-center">
            <span className="mr-14">가격대</span>
            <ListTag />
          </div>
        </div>

        <OnlineInput />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gray-400 w-fit m-auto text-white py-3 px-5 rounded-lg hover:bg-[rgb(83,199,240)] my-32"
          onClick={onPostSubmit}
        >
          작성완료
        </button>
      </div>
      <Footer />
    </>
  );
}
