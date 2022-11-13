import CommentEditor from "../components/DetailPage/CommentEditor";
import CommentList from "../components/DetailPage/Comments/CommentList";
import DetailHeader from "../components/DetailPage/DetailHeader/DetailHeader";
import Header from "../components/Header";

const DetailPage = () => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center">
        <div className="max-w-5xl">
          <DetailHeader></DetailHeader>
          <CommentList></CommentList>
          <CommentEditor></CommentEditor>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
