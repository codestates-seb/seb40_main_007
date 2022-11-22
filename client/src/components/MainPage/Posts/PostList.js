import Post from "./Post";
// import SortDropdown from "./SortDropdown";
import { useRecoilValue } from "recoil";
import { postDummyState } from "../../../atoms/dummyData";

function PostList() {
  const [...posts] = useRecoilValue(postDummyState);
  return (
    <div className="w-full flex flex-col">
      <div className="mx-auto p-2 overflow-y-scroll h-[600px]">
        <div className="grid grid-cols-3 gap-y-4 gap-x-2">
          {posts.map((post) => (
            <Post key={post.boardId} data={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostList;
