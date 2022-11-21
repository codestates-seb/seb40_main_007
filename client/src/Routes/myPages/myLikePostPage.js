import Header from "../../components/Header";
import MyPageTab from "../../components/MyPageTab";
import PostList from "../../components/MainPage/Posts/PostList";
const MyLikePostPage = () => {
  return (
    <>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내여행계획"} />
        <div>
          <PostList />
        </div>
      </div>
    </>
  );
};

export default MyLikePostPage;
