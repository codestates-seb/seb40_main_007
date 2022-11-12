const CommentEditor = () => {
  return (
    <div className="max-w-xl mt-14">
      <input
        maxLength={"28"}
        placeholder="댓글을 작성해보세요."
        className="text-xs border-2 border-gray-300 w-80 outline-0 p-2 focus:border-[rgb(83,199,240)]"
      />
    </div>
  );
};

export default CommentEditor;
