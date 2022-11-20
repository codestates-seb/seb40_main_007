import { useState } from "react";

const CommentEditor = () => {
  const [commentText, setCommentText] = useState("");
  const [char, setChar] = useState(0);

  const handleTextChange = (e) => {
    setCommentText(e.target.value);
    setChar(e.target.value.length);
    console.log(e.target.value);
  };

  const info = {
    boardId: 2,
    title: "돼지국밥",
    review: "뉴진스 만큼 멋진 곳",
    star: 3.5,
    thumbnail: "https://i.ytimg.com/vi/lgfXrQUx4go/maxresdefault.jpg",
    stationId: 2,
    categoryId: 1,
    address: "교동짬뽕",
    timeFromStation: 627,
    dibs: false,
    upScore: 0,
    downScore: 0,
    scoreStatus: 0,
    createdAt: "2022-11-16T22:11:43.34156",
    writer: {
      memberId: 1,
      name: "민트 비빔면 1",
      avatar:
        "https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/profile_red.png",
    },
    imageUrls: [
      "https://magazine.cheil.com/wp-content/uploads/2022/09/%EC%BD%98%ED%85%90%EC%B8%A0B_960_600_7-1.jpg",
      "https://i.ytimg.com/vi/CPuJ6xPRYXQ/maxresdefault.jpg",
    ],
    tags: {
      detailTag: "한식",
      moodTag: ["아늑한", "정겨운", "깔끔한", "뷰가 좋은"],
      priceTag: "만원 초과 2만원 이하",
    },
  };

  return (
    <>
      <div className="mt-14 border-2 border-gray-300 focus-within:border-[rgb(83,199,240)] p-2 h-40 group">
        <div className="flex flex-row items-center space-x-2">
          <div className="w-6 h-6">
            <img
              src={info.writer.avatar}
              alt="userImg"
              className="object-fit block rounded-full"
            />
          </div>
          <div>
            <span className="text-xs">{info.writer.name}</span>
          </div>
        </div>
        <textarea
          type="textarea"
          value={commentText}
          placeholder="댓글을 작성해보세요."
          cols="72"
          rows="4"
          maxLength="100"
          className="text-sm first-letter:text-xs w-full outline-none mt-1 break-normal resize-none"
          onChange={handleTextChange}
        />
        <div className="text-gray-300 group-focus-within:text-[rgb(83,199,240)] text-xs relative">
          {`${char} / 100`}
        </div>
      </div>
      <div className="mt-2 flex justify-end">
        <button type="submit" className="btn">
          등록
        </button>
      </div>
    </>
  );
};

export default CommentEditor;
