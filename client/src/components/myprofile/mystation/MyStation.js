import MyStationItem from "./MyStationItem";

const MyStation = ({ visit }) => {
  return (
    <div className="w-full mb-10">
      <div className="mb-3 flex justify-start">
        <p className="w-fit lg:my-4 mt-2 lg:text-base text-sm lg:ml-2 lg:px-3 px-2 border-b-2 border-[rgb(83,199,240)] text-[rgb(83,199,240)]">
          내 역이요
        </p>
      </div>

      {visit.length === 0 ? (
        <div className="border-2 border-[rgb(83,199,240)] rounded-3xl flex flex-col items-center justify-center p-5">
          <img src="/images/logo.png" alt="logo" className="w-28 h-28" />
          <div className="text-[rgb(83,199,240)] mt-5">
            아직 방문 등록된 기차역이 없습니다
          </div>
        </div>
      ) : (
        <div className="border-4 border-[rgb(83,199,240)] grid sm:grid-cols-5 grid-cols-4 rounded-3xl ">
          {visit.map((trainId) => (
            <MyStationItem key={trainId} trainId={trainId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyStation;
