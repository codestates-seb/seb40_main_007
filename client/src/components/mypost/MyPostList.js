import MyPost from "./mypostsitem/MyPost";
import { useRecoilValue } from "recoil";
import { myPostData } from "../../atoms/mypage/myPostData";

const MyPostList = ({ tabValue }) => {
  const myPost = useRecoilValue(myPostData);
  return (
    <div className="w-full flex flex-col">
      <div className="mx-auto p-2 overflow-y-scroll h-[600px]">
        <div className="grid grid-cols-3 gap-y-4 gap-x-2">
          {myPost.length !== 0 ? (
            myPost?.map((post) => (
              <MyPost key={post.boardId} data={post} tabValue={tabValue} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPostList;
