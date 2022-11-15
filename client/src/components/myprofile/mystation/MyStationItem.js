const MyStationItem = ({ stamp }) => {
  return (
    <div className="">
      <img
        className="m-4 w-20 h-20 rounded-md hover-img"
        alt="post img"
        src={stamp}
      />
    </div>
  );
};

export default MyStationItem;
