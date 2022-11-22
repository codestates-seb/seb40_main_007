import Item from "./MyCommentItem";

const MyCommentList = ({ data, page }) => {
  // console.log()
  return (
    <div className="pt-5 flex justify-center">
      <div className="grid grid-cols-1 max-w-max gap-2 sm:grid-cols-2 sm:gap-5">
        {data.map((el, idx) => (
          <div key={idx} className="border-2">
            <Item imgUrl={el.imgUrl} title={el.title} content={el.content} />
          </div>
        ))}
        <div>{page}</div>
      </div>
    </div>
  );
};

export default MyCommentList;
