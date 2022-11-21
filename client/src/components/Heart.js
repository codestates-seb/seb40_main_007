import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Heart() {
  const [isWishAdd, setIsWishAdd] = useState(false);
  const [wishCount, setWishCount] = useState(0);
  const wishAddHandler = () => {
    setIsWishAdd(!isWishAdd);
  };
  const wishCountHandler = () => {
    wishAddHandler();
    if (!isWishAdd) {
      setWishCount(wishCount + 1);
      //나중에 post
    } else if (isWishAdd) {
      setWishCount(wishCount - 1);
      //나중에 post
    }
  };

  // console.log(wishCount);
  //콘솔 찍으면 0인지 1인지 나옵니다 0은 빈하트 1은 채워진 하트
  return (
    <>
      {isWishAdd ? (
        <AiFillHeart
          size={30}
          className="text-[#EC1258]"
          onClick={wishCountHandler}
        />
      ) : (
        <AiOutlineHeart
          size={30}
          className="text-[#EC1258]"
          onClick={wishCountHandler}
        />
      )}
    </>
  );
}
// 나중에 기능 구현 한다면..
// fetch("8080", {
//   method: "POST".
//   body: JSON.stringify({
//    게시글 id를 보내야 하지 않을까?
//   }
