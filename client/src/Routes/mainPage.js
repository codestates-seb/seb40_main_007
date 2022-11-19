import Header from "../components/Header";
import CategoryTabs from "../components/MainPage/CategoryTab";
// import MainMap from "../components/MainPage/MainMap";
// import PostList from "../components/MainPage/Posts/PostList";
import RelatedTab from "../components/MainPage/RelatedTab";
import MainHeader from "../components/MainPage/MainHeader";
import WriteModal from "../components/modals/WriteModal";
import MainMapTest from "../components/MainPage/TestMainMap";
import TestPostList from "../components/MainPage/Posts/TestPostList";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center lg:w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <MainHeader />
            {/* <MainMap /> */}
            <div className="mt-14">
              <MainMapTest />
            </div>
          </div>
          <div>
            <CategoryTabs />
            <RelatedTab />
            {/* <PostList /> */}
            <TestPostList></TestPostList>
          </div>
        </div>
      </div>
      <WriteModal />
    </>
  );
};

export default MainPage;
