import MyStationItem from "./MyStationItem";

const dummy = [
  "/images/서울역.png",
  "/images/서울역.png",
  "/images/서울역.png",
  "/images/서울역.png",
  "/images/서울역.png",
  "/images/서울역.png",
  "/images/서울역.png",
  "/images/서울역.png",
  "/images/서울역.png",
];

const MyStation = () => {
  return (
    <div>
      <div className="mb-3 flex justify-start">
        <p className="ml-2 pr-7 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
          내 역이요
        </p>
      </div>
      <div className="border-4 border-[rgb(83,199,240)] grid grid-cols-5 rounded-3xl">
        {dummy.map((stamp, idx) => (
          <MyStationItem key={idx} stamp={stamp} />
        ))}
      </div>
    </div>
  );
};

export default MyStation;
