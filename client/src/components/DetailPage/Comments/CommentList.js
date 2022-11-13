import Comment from "./Comment";

const CommentList = () => {
  return (
    <>
      <div className="mb-5">
        <span className="text-lg text-[rgb(83,199,240)] border-b-2 border-b-[rgb(83,199,240)] px-3 py-1">
          댓글
        </span>
      </div>
      <div className="grid grid-cols-2">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </>
  );
};

export default CommentList;
