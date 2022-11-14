import Dislike from "./Dislike";
import Like from "./Like";

const Review = () => {
  return (
    <>
      <div className="flex flex-row mt-10 justify-between">
        <span className="text-lg text-[rgb(83,199,240)] border-b-2 border-b-[rgb(83,199,240)] px-3 py-1">
          한줄 평
        </span>
        <div className="flex flex-row space-x-2">
          <Like />
          <Dislike />
        </div>
      </div>
      <div className="flex justify-center items-center h-[150px]">
        <span className="w-6 h-6 relative right-10 bottom-10">
          <img src="/images/quote1.png" alt="따옴표" />
        </span>
        <p className="text-lg">한줄 평을 입력했습니다.</p>
        <span className="w-6 h-6 relative left-10 top-10">
          <img src="/images/quote2.png" alt="따옴표" />
        </span>
      </div>
    </>
  );
};

export default Review;
