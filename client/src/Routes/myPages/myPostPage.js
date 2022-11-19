import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import PostList from "../../components/MainPage/Posts/PostList";
import MyPostTab from "../../components/MyPostTab";
import { useState } from "react";
// import MainMap from "../components/MainPage/MainMap";
import MainMapTest from "../../components/MainPage/TestMainMap";

const MyPostPage = () => {
  const [index, setIndex] = useState("게시글");
  return (
    <div className="">
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내게시글"} />
        <div className="w-full max-w-2xl flex justify-center scrollbar-hide">
          <MyPostTab setIndex={setIndex} index={index} />
        </div>
        {index === "게시글" ? (
          <div>
            <PostList />
          </div>
        ) : (
          <div className="w-full max-w-2xl h-full flex justify-center">
            {/* <MainMap /> */}
            <MainMapTest />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPostPage;
