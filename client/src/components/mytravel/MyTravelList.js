import MyTravelHeader from "./ListItem/MyTravelHeader";
import MyTravelPost from "./ListItem/MyTravelPost";
import { postDummyState } from "../../atoms/dummyData";
import { useRecoilValue } from "recoil";

const MyTravelList = () => {
  const [...posts] = useRecoilValue(postDummyState);

  const dummyData = posts.slice(0, 10);

  return (
    <div className="w-full flex flex-col">
      <MyTravelHeader />
      <p className="text-xs mt-4 text-[#8A8A8A]">
        방문을 원하는 순서대로 옮겨보세요!
      </p>
      <div className="h-[600px] overflow-y-scroll">
        {dummyData.map((data, idx) => (
          <MyTravelPost data={data} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default MyTravelList;
