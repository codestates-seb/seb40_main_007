import Comment from "./Comment";

const CommentList = () => {
  return (
    <>
      <div className="border-b-2 border-b-[rgb(83,199,240)] max-w-xs mb-5">
        <h4 className="text-lg text-[rgb(83,199,240)]">댓글</h4>
      </div>
      <Comment />
      <Comment />
      <Comment />
    </>
  );
};

export default CommentList;
