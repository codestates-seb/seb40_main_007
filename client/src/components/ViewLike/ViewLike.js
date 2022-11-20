import { FaRegThumbsUp } from "react-icons/fa";

const ViewLike = ({ upScore }) => {
  return (
    <>
      <div className="bg-[rgb(83,199,240)] min-w-[60px] w-auto rounded-2xl py-0.5 px-1.5 space-x-0.5 flex flex-row justify-center items-center ">
        <FaRegThumbsUp color="white" />
        <span className="text-xs text-white">{upScore}</span>
      </div>
    </>
  );
};

export default ViewLike;
