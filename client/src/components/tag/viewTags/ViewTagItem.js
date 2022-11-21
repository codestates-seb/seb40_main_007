const ViewTagItem = ({ text, color }) => {
  return (
    <div
      className={`text-xs border-[1px] rounded-full px-2 text-center 
      ${
        color === "blue"
          ? "text-[rgb(83,199,240)]  border-[rgb(83,199,240)]"
          : null
      } `}
    >
      {text}
    </div>
  );
};

export default ViewTagItem;
