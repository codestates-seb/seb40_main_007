import MyStationItem from "./MyStationItem";

const dummy = [
  "/images/기차역도장/서울역.png",
  "/images/기차역도장/광명역.png",
  "/images/기차역도장/구포역.png",
  "/images/기차역도장/김천구미역.png",
  "/images/기차역도장/대전역.png",
  "/images/기차역도장/밀양역.png",
  "/images/기차역도장/부산역.png",
  "/images/기차역도장/수원역.png",
  "/images/기차역도장/신경주역.png",
  "/images/기차역도장/영등포역.png",
  "/images/기차역도장/오송역.png",
  "/images/기차역도장/울산역.png",
  "/images/기차역도장/천안아산역.png",
  "/images/기차역도장/행신역.png",
];

const MyStation = () => {
  return (
    <div>
      <div className="mb-3 flex justify-start">
        <p className="ml-2 mb-3 px-3 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
          내 역이요
        </p>
      </div>
      <div className="border-4 border-[rgb(83,199,240)] grid sm:grid-cols-5 grid-cols-3 rounded-3xl">
        {dummy.map((stamp, idx) => (
          <MyStationItem key={idx} stamp={stamp} />
        ))}
      </div>
    </div>
  );
};

export default MyStation;
