export default function OneLineComment() {
  return (
    <div className="text-[rgb(83,199,240)] max-w-6xl">
      <div className="font-semibold border-b-2 border-[rgb(83,199,240)] w-fit px-5 py-2 text-18">
        한줄평
      </div>
      <div className="max-w-4xl m-auto mt-10">
        <img src="images/open_quote.png" alt="openQuote" />
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="당신의 한줄평을 입력해주세요"
            className="text-center font-semibold text-black placeholder-black text-lg rounded-md  bg-transparent focus:outline-none w-8/12 p-2 m-1 my-4"
            //placeholder 색상 그냥 그레이가 나을지도..?
          />
        </div>
        <div className="flex justify-end">
          <img src="images/close_quote.png" alt="closeQuote" />
        </div>
      </div>
    </div>
  );
}
