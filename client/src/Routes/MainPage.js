import { useState } from "react";
import Header from "../components/Header";
import CategoryTabs from "../components/MainPage/CategoryTab";
import PostList from "../components/MainPage/Posts/PostList";
import RelatedTab from "../components/MainPage/RelatedTab";

const MainPage = () => {
  const [category, setCategory] = useState("ALL");
  const [related, setRelated] = useState("ALL");

  return (
    <>
      <Header />
      <div className="grid grid-cols-1">
        <div>
          <CategoryTabs category={category} setCategory={setCategory} />
          <RelatedTab related={related} setRelated={setRelated} />
          <PostList />
        </div>
      </div>
    </>
  );
};

export default MainPage;
