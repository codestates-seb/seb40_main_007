const CommentEditor = () => {
  return (
    <div className="mt-14">
      <input
        placeholder="댓글을 작성해보세요."
        className="text-xs w-full border-2 border-gray-300 outline-0 p-2 focus:border-[rgb(83,199,240)]"
      />
    </div>
  );
};

export default CommentEditor;
