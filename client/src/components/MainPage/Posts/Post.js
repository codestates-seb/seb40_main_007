import PostStarScore from "./PostStarScore";

function Post() {
  const score = 3;
  return (
    <div className="group">
      <div className="rounded-md group-hover:opacity-60 transition-opacity">
        <img src="/images/oyster.png" alt="alt" />
        <PostStarScore score={score} />
      </div>
      <div>
        <h3 className="text-sm font-bold">제목</h3>
        <p className="text-xs text-gray-700">5분 거리</p>
        <p className="mt-1 text-xs text-gray-500">한줄 설명</p>
      </div>
    </div>
  );
}

export default Post;
