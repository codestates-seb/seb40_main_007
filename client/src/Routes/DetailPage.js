import CommentEditor from "../components/DetailPage/CommentEditor";
import CommentList from "../components/DetailPage/Comments/CommentList";
import DetailHeader from "../components/DetailPage/DetailHeader/DetailHeader";

const DetailPage = () => {
  return (
    <>
      <DetailHeader></DetailHeader>
      <CommentList></CommentList>
      <CommentEditor></CommentEditor>
    </>
  );
};

export default DetailPage;
