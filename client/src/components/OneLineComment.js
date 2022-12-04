export default function OneLineComment({ review }) {
  return (
    <div className="text-[rgb(83,199,240)] max-w-6xl">
      <div className="lg:pt-14 pt-10 font-semibold border-b-2 border-[rgb(83,199,240)] w-fit lg:px-5 px-3 pb-2 lg:ml-0 ml-2 lg:text-lg text-sm text-[rgb(83,199,240)]">
        한줄평
      </div>
      <div className="max-w-4xl m-auto mt-10 lg:mx-0 mx-2">
        <img
          src="/images/open_quote.png"
          alt="openQuote"
          className="lg:w-6 lg:h-5 w-4 h-3"
        />
        <div className="flex justify-center">
          <div className="text-center font-semibold text-black lg:text-lg text-base rounded-md  bg-transparent focus:outline-none w-10/12 p-2 m-1 my-4">
            {review}
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src="/images/close_quote.png"
            alt="closeQuote"
            className="lg:w-6 lg:h-5 w-4 h-3"
          />
        </div>
      </div>
    </div>
  );
}
