import { IoIosCloseCircleOutline } from "react-icons/io";

const InfoWindow = () => {
  return (
    <div className="w-24 h-24 border-2 border-black rounded-lg p-0.5">
      <img src="/images/food.png" alt="사진" />
      <IoIosCloseCircleOutline className="absolute top-0.5 right-0.5" />
      <span className="text-xs">타이틀</span>
      {/* {tags.map((tag, idx) => {
        return <span key={idx}>tag</span>;
      })} */}
    </div>
  );
};

export default InfoWindow;
