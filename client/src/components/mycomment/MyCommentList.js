import Item from "./MyCommentItem";

const MyCommentList = () => {
  const obj = {
    title: "돼지 국밥",
    imgUrl:
      "https://d12zq4w4guyljn.cloudfront.net/20220215014519053_photo_79460f6e0b30.jpg",
    content:
      "부추 국밥입니다. 근데 이제 돼지를 곁들인 부추 국밥입니다. 근데 이제 돼지를 곁들인부추 국밥입니다.  부추 국밥입니다. 근데 이제 돼지를 곁들인부추 국밥입니다. 부추 국밥입니다. 근데 이제 돼지를 곁들인부추 국밥입니다. 부추 국밥입니다. 근데 이제 돼지를 곁들인부추 국밥입니다. ",
  };
  const test = Array(20).fill(obj);

  return (
    <div className="pt-5 flex justify-center">
      <div className="grid grid-cols-1 max-w-max gap-2 sm:grid-cols-2 sm:gap-5">
        {test.map((el, idx) => (
          <div key={idx}>
            <Item imgUrl={el.imgUrl} title={el.title} content={el.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCommentList;
