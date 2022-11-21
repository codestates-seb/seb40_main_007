export default function OneLineComment(props) {
  return (
    <div className="text-[rgb(83,199,240)] max-w-6xl">
      <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 text-lg">
        한줄평
      </div>
      <div className="max-w-4xl m-auto mt-10">
        <img src="images/open_quote.png" alt="openQuote" />
        <div className="flex justify-center">
          <div className="text-center font-semibold text-black  text-lg rounded-md  bg-transparent focus:outline-none w-10/12 p-2 m-1 my-4">
            {props.review}
          </div>
        </div>
        <div className="flex justify-end">
          <img src="images/close_quote.png" alt="closeQuote" />
        </div>
      </div>
    </div>
  );
}
