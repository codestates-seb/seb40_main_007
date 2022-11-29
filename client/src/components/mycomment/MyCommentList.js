import Item from "./MyCommentItem";

const MyCommentList = ({ data }) => {
  return (
    <div className="pt-5 flex justify-center">
      <div className="grid grid-cols-1 max-w-max gap-2 sm:grid-cols-2 sm:gap-5">
        {data.length !== 0
          ? data.map((el, idx) => (
              <div
                key={idx}
                className="shadow-[0px_0px_2px_2px_rgba(0,0,0,0.3)] rounded-lg "
              >
                <Item
                  thumbnail={el.thumbnail}
                  title={el.title}
                  comment={el.comment}
                  linkPostId={el.boardId}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default MyCommentList;
