import CommentEditor from "../components/DetailPage/CommentEditor";
import CommentList from "../components/DetailPage/Comments/CommentList";
import DetailHeader from "../components/DetailPage/DetailHeader/DetailHeader";
import DetailImageSlider from "../components/DetailPage/DetailImageSlider";
import DetailMap from "../components/DetailPage/DetailMap";
import NeighborhoodPlace from "../components/DetailPage/NeighborhoodPlace";
import Header from "../components/Header";
import WriteModal from "../components/WriteModal";
import Review from "../components/DetailPage/Review/Review";

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
          <Review />
          <CommentList />
          <CommentEditor />
        </div>
      </div>
      <NeighborhoodPlace />
      <WriteModal />
    </>
  );
};

export default DetailPage;
