import Header from "../components/Header";
import CategoryTabs from "../components/MainPage/CategoryTab";
import MainMap from "../components/MainPage/MainMap";
import PostList from "../components/MainPage/Posts/PostList";
import RelatedTab from "../components/MainPage/RelatedTab";
import MainHeader from "../components/MainPage/MainHeader";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainHeader />
      <MainMap />
      <CategoryTabs />
      <RelatedTab />
      <PostList />
    </>
  );
};

export default MainPage;
