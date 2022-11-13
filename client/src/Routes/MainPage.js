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
      <div className="flex flex-col items-center">
        <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-2">
          <div>
            <MainHeader />
            <MainMap />
          </div>
          <div>
            <CategoryTabs />
            <RelatedTab />
            <PostList />
            <WriteModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
