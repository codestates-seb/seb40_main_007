import { FaRegThumbsDown } from "react-icons/fa";

const Dislike = ({ props }) => {
  const score = props;
  return (
    <>
      <span className="border-2 border-[rgb(83,199,240)] lg:px-5 px-3 rounded-2xl py-1 flex flex-row justify-center items-center space-x-1">
        <FaRegThumbsDown color="rgb(83,199,240)" />
        <span className="text-sm text-[rgb(83,199,240)]">{score}</span>
      </span>
    </>
  );
};

export default Dislike;
