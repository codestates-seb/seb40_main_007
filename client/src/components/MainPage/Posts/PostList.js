import Post from "./Post";
import SortDropdown from "./SortDropdown";
import { useRecoilValue } from "recoil";
import { postDummyState } from "../../../atoms/dummyData";

function PostList() {
  const [...posts] = useRecoilValue(postDummyState);
  return (
    <>
      <div className="flex justify-end mt-3">
        <SortDropdown />
      </div>
      <div className="mx-auto p-2 overflow-y-scroll h-[600px] scrollbar-hide">
        <div className="grid grid-cols-3 gap-y-4 gap-x-2">
          {posts.map((post) => (
            <Post key={post.boardId} data={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PostList;
