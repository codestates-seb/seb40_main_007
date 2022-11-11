const InfoWindow = () => {
  return (
    <div className="w-32 rounded-lg p-0.5 bg-black text-white">
      <img src="/images/crap.png" alt="사진" />
      <p className="text-sm ">타이틀</p>
      <span className="text-xs border-2 border-white rounded-lg p-0.5">
        한식
      </span>
      {/* {tags.map((tag, idx) => {
        return <span className="text-xs border-2 border-white rounded-lg p-0.5" key={idx}>{tag}</span>;
      })} */}
    </div>
  );
};

export default InfoWindow;
