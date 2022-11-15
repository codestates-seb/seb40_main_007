import Header from "../components/Header";
import MyPageTab from "../components/MyPageTab";
import MyCommentList from "../components/mycomment/MyCommentList";

const MyCommentPage = () => {
  return (
    <div>
      <Header />
      <div className="mypage-header-tab">
        <MyPageTab index={"내댓글"} />
        <div className="w-full max-w-2xl">
          <MyCommentList />
        </div>
      </div>
    </div>
  );
};

export default MyCommentPage;
