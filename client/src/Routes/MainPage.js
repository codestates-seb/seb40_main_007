import Header from "../components/Header";
import CategoryTabs from "../components/MainPage/CategoryTab";
import MainMap from "../components/MainPage/MainMap";
import PostList from "../components/MainPage/Posts/PostList";
import RelatedTab from "../components/MainPage/RelatedTab";
import MainHeader from "../components/MainPage/MainHeader";
import WriteModal from "../components/MainPage/WriteModal";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainHeader />
      <MainMap />
      <CategoryTabs />
      <RelatedTab />
      <PostList />
      <WriteModal />
    </>
  );
};

export default MainPage;
