import MyPost from "./mypostsitem/MyPost";
import { useRecoilValue } from "recoil";
import { myPostData } from "../../atoms/mypage/myPostData";
import { Link } from "react-router-dom";
import { trainInfo } from "../../atoms/trainInfo";

const MyPostList = ({ tabValue, station, isVoid }) => {
  const myPost = useRecoilValue(myPostData);
  const trainStationInfo = useRecoilValue(trainInfo);

  console.log(station);
  return (
    <div className="w-full flex flex-col">
      {tabValue === "내찜목록" ? (
        <div className="w-full flex justify-center">
          <div className="w-fit text-[rgb(83,199,240)] font-bold z-10 bg-[rgba(256,256,256,0.7)] px-5 py-1 border-b-2 border-[rgb(83,199,240)] flex justify-center">
            {station === 0
              ? "경부선 전체"
              : trainStationInfo[station - 1]?.train}
          </div>
        </div>
      ) : null}
      <div
        className={`mx-auto p-2 ${
          myPost.length !== 0 ? "overflow-y-scroll h-[600px]" : ""
        }`}
      >
        {myPost.length !== 0 ? (
          <div
            className={`grid grid-cols-2 place-items-center lg:grid-cols-3 sm:gap-x-4 gap-y-4 gap-x-2
             ${tabValue === "내찜목록" ? "sm:grid-cols-3" : "lg:grid-cols-3"}
             `}
          >
            {myPost?.map((post) => (
              <MyPost key={post.boardId} data={post} tabValue={tabValue} />
            ))}
          </div>
        ) : (
          <div
            className={`${
              isVoid ? "border-2" : ""
            } p-5 rounded-2xl font-semibold flex flex-col justify-center items-center text-[rgb(83,199,240)]`}
          >
            {tabValue === "작성한게시글" ? (
              isVoid ? (
                <>
                  <img className="w-9" src="../images/logo.png" alt="logo" />
                  <h1>현재 역에서 작성한 게시글이 없습니다.</h1>
                  <p className="text-sm ">게시글을 작성해보세요!</p>
                  <Link to={station === 0 ? `/post/1` : `/post/${station}`}>
                    <div className="bg-[rgb(83,199,240)] hover:bg-[rgba(83,199,240,0.8)] active:scale-90 mt-4 p-2 rounded-2xl w-[170px] flex flex-col justify-center items-center">
                      <div className="text-center">
                        <p className="text-white font-medium">
                          게시글 작성하기
                        </p>
                      </div>
                    </div>
                  </Link>
                </>
              ) : null
            ) : isVoid ? (
              <>
                <img className="w-9" src="../images/logo.png" alt="logo" />
                <h1>현재 역에서 찜한 게시글이 없습니다.</h1>
                <p className="text-sm ">마음에 드는 게시글을 찜 해보세요!</p>
                <Link to={station === 0 ? `/main/1` : `/main/${station}`}>
                  <div className="bg-[rgb(83,199,240)] hover:bg-[rgba(83,199,240,0.8)] active:scale-90 mt-4 p-2 rounded-2xl w-[170px] flex flex-col justify-center items-center">
                    <div className="text-center">
                      <p className="text-white font-medium">게시글 보러가기</p>
                    </div>
                  </div>
                </Link>
              </>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPostList;
