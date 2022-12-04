import { useEffect, useState } from "react";

const DetailStarScore = ({ props }) => {
  const startScore = props;
  const [style, setStyle] = useState(20);
  const windowResize = () => {
    // 맵 스타일 변경
    if (window.innerWidth >= 1024) {
      setStyle(20);
    } else {
      setStyle(17);
    }
  };
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setStyle(20);
    } else {
      setStyle(17);
    }
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center items-end">
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <span key={num}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={style}
                height={style}
                viewBox="0 0 14 14"
              >
                <path
                  d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                  transform="translate(-2 -2)"
                  fill={startScore >= num ? "#FFD203" : "lightgray"}
                />
              </svg>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default DetailStarScore;
