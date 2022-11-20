import CommentEditor from "../components/DetailPage/CommentEditor";
import CommentList from "../components/DetailPage/Comments/CommentList";
import DetailHeader from "../components/DetailPage/DetailHeader/DetailHeader";
import DetailImageSlider from "../components/DetailPage/DetailImageSlider";
import DetailMap from "../components/DetailPage/DetailMap";
import NeighborhoodPlace from "../components/DetailPage/NeighborhoodPlace";
import Header from "../components/Header";
import Like from "../components/DetailPage/Review/Like";
import Dislike from "../components/DetailPage/Review/Dislike";
import OneLineComment from "../components/OneLineComment";
import Footer from "../components/Footer";

const DetailPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="lg:w-[1024px]">
          <DetailHeader />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <DetailImageSlider />
            <DetailMap />
          </div>
          <div className="flex flex-row mt-5 justify-end">
            <Like />
            <Dislike />
          </div>
          <OneLineComment review={"뉴진스 만큼 멋진 곳"} />
          <CommentList />
          <CommentEditor />
        </div>
      </div>

      <NeighborhoodPlace />
      <Footer />
    </>
  );
};

export default DetailPage;
