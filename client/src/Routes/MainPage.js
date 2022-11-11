import { useState } from "react";
import Header from "../components/Header";
import CategoryTabs from "../components/MainPage/CategoryTab";
import MainMap from "../components/MainPage/MainMap";
import PostList from "../components/MainPage/Posts/PostList";
import RelatedTab from "../components/MainPage/RelatedTab";
import MainHeader from "../components/MainPage/MainHeader";

const MainPage = () => {
  const [category, setCategory] = useState("ALL");
  const [related, setRelated] = useState("ALL");

  return (
    <>
      <Header />
      <MainHeader />
      <MainMap />
      <CategoryTabs category={category} setCategory={setCategory} />
      <RelatedTab related={related} setRelated={setRelated} />
      <PostList />
    </>
  );
};

export default MainPage;
