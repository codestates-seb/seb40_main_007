const OneStarScore = ({ score, size }) => {
  return (
    <>
      <div className="xl:hidden  flex flex-row items-center justify-center ">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size ? `${size}` : "20"}
            height={size ? `${size}` : "20"}
            viewBox="0 0 14 14"
          >
            <path
              d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
              transform="translate(-2 -2)"
              fill={"#FFD203"}
            />
          </svg>
        </span>
        <p className="text-sm pl-0.5 font-semibold">{score}</p>
      </div>
    </>
  );
};

export default OneStarScore;
