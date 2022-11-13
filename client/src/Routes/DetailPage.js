import CommentEditor from "../components/DetailPage/CommentEditor";
import CommentList from "../components/DetailPage/Comments/CommentList";
import DetailHeader from "../components/DetailPage/DetailHeader/DetailHeader";
import Review from "../components/DetailPage/Review";
import Header from "../components/Header";
import WriteModal from "../components/MainPage/WriteModal";

const DetailPage = () => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center ">
        <div className="lg:w-[1024px]">
          <DetailHeader></DetailHeader>
          <Review></Review>
          <CommentList></CommentList>
          <CommentEditor></CommentEditor>
          <WriteModal />
        </div>
      </div>
    </>
  );
};

export default DetailPage;
