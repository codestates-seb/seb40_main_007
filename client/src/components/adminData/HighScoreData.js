import { useRecoilState } from "recoil";
import { highScoreBoards } from "../../atoms/adminPage/data";
import { Link } from "react-router-dom";

export default function HighScoreData() {
  const [highBoards] = useRecoilState(highScoreBoards);
  console.log(highBoards, "highBoards");
  return (
    <div className="bg-white m-2 shadow-lg h-[400px] overflow-scroll">
      <div className="font-bold mr-2 bg-gray-100 border-l-4 border-[#26A0FC] w-fit px-4 text-[#26A0FC]">
        인기 게시글
      </div>
      <table className="w-full mt-4">
        <thead className="bg-blue-200">
          <tr>
            <th className="border-r">index</th>
            <th className="border-r">writer</th>
            <th className="border-r">Title</th>
            <th className="border-r bg-blue-300">UP</th>
            <th className="border-r">DOWN</th>
            <th>게시글</th>
          </tr>
        </thead>
        <tbody>
          {highBoards.length > 0 &&
            highBoards?.map((el, idx) => (
              <tr key={idx}>
                <td className="border-r">{idx}</td>
                <td className="border-r">{el?.writer}</td>
                <td className="border-r">{el?.title}</td>
                <td className="border-r">{el?.upScore}</td>
                <td className="border-r">{el?.downScore}</td>
                <td className="bg-green-100 text-center">
                  <Link to={`/detail/${el?.boardId}`}>보기</Link>
                </td>
              </tr>
            ))}
          {/* 이 아래는 지워야 합니다 */}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>{" "}
          <tr>
            <td className="border-r">index1</td>
            <td className="border-r">writer1</td>
            <td className="border-r">title1</td>
            <td className="border-r">upScore1</td>
            <td className="border-r">downScore1</td>
            <td className="bg-green-100 text-center border"> 보기</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
