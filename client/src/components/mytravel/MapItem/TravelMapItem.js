const TravelMapItem = ({ thumbnail }) => {
  return (
    <>
      <div className={`bg-white shadow-black shadow-md w-10 h-10 p-0.5 `}>
        <img className="w-full h-full" src={thumbnail} alt="post img"></img>
      </div>
    </>
  );
};

export default TravelMapItem;
