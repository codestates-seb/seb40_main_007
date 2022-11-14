import Comment from "./Comment";

const CommentList = () => {
  const comments = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  return (
    <>
      <div className="mb-5">
        <span className="text-lg text-[rgb(83,199,240)] border-b-2 border-b-[rgb(83,199,240)] px-3 py-1">
          댓글
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {comments.map((comment) => {
          return <Comment key={comment.id} />;
        })}
      </div>
    </>
  );
};

export default CommentList;
