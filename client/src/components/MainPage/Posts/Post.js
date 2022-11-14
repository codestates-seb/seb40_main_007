import PostStarScore from "./PostStarScore";
import Heart from "../../Heart";

function Post() {
  const score = 3;
  return (
    <div className="group">
      <div className="rounded-md group-hover:opacity-60 relative">
        <div className="absolute right-0">
          <Heart />
        </div>
        <img src="/images/oyster.png" alt="alt" className="object-fit static" />
        <PostStarScore score={score} />
      </div>
      <div>
        <h3 className="text-sm font-bold">제목</h3>
        <p className="text-xs text-gray-500">5분 거리</p>
        <p className="text-xs text-gray-700">한줄 설명</p>
      </div>
    </div>
  );
}

export default Post;
