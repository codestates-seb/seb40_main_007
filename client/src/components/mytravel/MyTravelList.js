import MyTravelHeader from "./ListItem/MyTravelHeader";
import MyTravelPost from "./ListItem/MyTravelPost";

const MyTravelList = ({ data }) => {
  return (
    <div className="w-full h-64 sm:h-auto flex flex-col">
      <MyTravelHeader />
      <p className="text-xs mt-4 text-[#8A8A8A]">
        방문을 원하는 순서대로 옮겨보세요!
      </p>
      <div className="h-[600px] overflow-y-scroll">
        {data.map((data, idx) => (
          <MyTravelPost data={data} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default MyTravelList;
