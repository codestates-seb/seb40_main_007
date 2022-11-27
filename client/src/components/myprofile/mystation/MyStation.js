import MyStationItem from "./MyStationItem";

const MyStation = ({ visit }) => {
  return (
    <div>
      <div className="mb-3 flex justify-start">
        <p className="ml-2 mb-3 px-3 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
          내 역이요
        </p>
      </div>
      <div className="border-4 border-[rgb(83,199,240)] grid sm:grid-cols-5 grid-cols-3 rounded-3xl">
        {visit.map((trainId) => (
          <MyStationItem key={trainId} trainId={trainId} />
        ))}
      </div>
    </div>
  );
};

export default MyStation;
