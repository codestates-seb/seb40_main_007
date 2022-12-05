import Loading from "./Loading";

const TrainLoading = ({ props }) => {
  // 사용하시는 곳에서   const [loading, setLoading] = useState(false); 추가하시고
  //  {loading ? <TrainLoading props={"업로드 중입니다..."} /> : null} 이런식으로 사용하시면 됩니다!
  return (
    <div className="fixed bottom-0 right-0 flex flex-col justify-center items-center w-full h-full bg-[rgba(0,0,0,0.3)] z-10">
      <Loading />
      <span className="font-bold text-gray-100 mt-2">{props}</span>
    </div>
  );
};

export default TrainLoading;
