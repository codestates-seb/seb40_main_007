const PostStarScore = ({ score, size }) => {
  return (
    <>
      <div className="xl:flex flex-row hidden">
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <span key={num}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size ? `${size}` : "20"}
                height={size ? `${size}` : "20"}
                viewBox="0 0 14 14"
              >
                <path
                  d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                  transform="translate(-2 -2)"
                  fill={score >= num ? "#FFD203" : "lightgray"}
                />
              </svg>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default PostStarScore;
