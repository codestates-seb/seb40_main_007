import { FaRegThumbsUp } from "react-icons/fa";

const Like = ({ props }) => {
  const score = props;
  return (
    <>
      <span className="border-2 bg-[rgb(83,199,240)] border-[rgb(83,199,240)] lg:px-5 px-3 rounded-2xl py-1 flex flex-row justify-center items-center space-x-1 mr-[1px]">
        <FaRegThumbsUp color="white" />
        <span className="text-sm text-white">{score}</span>
      </span>
    </>
  );
};

export default Like;
