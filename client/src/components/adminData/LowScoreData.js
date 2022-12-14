import { useRecoilState } from "recoil";
import { lowScoreBoards } from "../../atoms/adminPage/data";
import { Link } from "react-router-dom";

export default function LowScoreData() {
  const [lowBoards] = useRecoilState(lowScoreBoards);

  return (
    <div className="bg-white m-2 shadow-lg lg:h-[400px] h-[250px] overflow-scroll">
      <div className="font-bold mr-2 bg-gray-100 border-l-4 border-[#26A0FC] w-fit px-4 text-[#26A0FC]">
        비인기 게시글
      </div>
      <table className="w-full mt-4 mx-2">
        <thead className="bg-blue-200 lg:text-base text-xs">
          <tr>
            <th className="border-r lg:text-base text-xs">index</th>
            <th className="border-r lg:text-base text-xs">writer</th>
            <th className="border-r lg:text-base text-xs">Title</th>
            <th className="border-r lg:text-base text-xs">UP</th>
            <th className="border-r lg:text-base text-xs bg-blue-300">DOWN</th>
            <th className="lg:text-base text-xs">게시글</th>
          </tr>
        </thead>
        <tbody>
          {lowBoards.length > 0 &&
            lowBoards?.map((el, idx) => (
              <tr key={idx}>
                <td className="border-r lg:text-base text-xs">{idx + 1}</td>
                <td className="border-r lg:text-base text-xs">{el?.writer}</td>
                <td className="border-r lg:text-base text-xs">{el?.title}</td>
                <td className="border-r lg:text-base text-xs">{el?.upScore}</td>
                <td className="border-r lg:text-base text-xs">
                  {el?.downScore}
                </td>
                <td className="bg-red-100 text-center lg:text-base text-xs hover:bg-red-300">
                  <Link to={`/detail/${el?.boardId}`}>보기</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
