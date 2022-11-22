import {
  MdOutlineSubdirectoryArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Item = ({ imgUrl, title, content }) => {
  return (
    <div className="w-full flex flex-row  ">
      <img className="w-24 h-24 rounded-md" alt="post img" src={imgUrl} />
      <div className="w-4/6 pl-3 flex flex-col justify-center">
        <div className="w-full font-medium flex justify-between items-center">
          {title}
          <Link to={"/detail"}>
            <p className="text-xs  text-gray-400 flex flex-row">
              게시글 이동
              <MdKeyboardArrowRight size={15} />
            </p>
          </Link>
        </div>
        <div className="flex flex-row text-xs">
          <div className="h-auto ">
            <MdOutlineSubdirectoryArrowRight
              size={20}
              color="rgb(83,199,240)"
            />
          </div>
          <div className="w-48 h-7 flex items-center">
            <p className="truncate text-xs">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
