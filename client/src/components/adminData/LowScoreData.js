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
          {/* 이 아래는 지워야 합니다 */}
          <tr>
            <td className="border-r lg:text-base text-xs">2</td>
            <td className="border-r lg:text-base text-xs">행신 마스터</td>
            <td className="border-r lg:text-base text-xs">우동 맛집</td>
            <td className="border-r lg:text-base text-xs">1</td>
            <td className="border-r lg:text-base text-xs">2</td>
            <td className="bg-green-100 text-center lg:text-base text-xs hover:bg-green-300">
              <Link to={`/`}>보기</Link>
            </td>
          </tr>{" "}
          <tr>
            <td className="border-r lg:text-base text-xs">3</td>
            <td className="border-r lg:text-base text-xs">경주역 지킴이</td>
            <td className="border-r lg:text-base text-xs">첨성대 보러감</td>
            <td className="border-r lg:text-base text-xs">2</td>
            <td className="border-r lg:text-base text-xs">2</td>
            <td className="bg-green-100 text-center lg:text-base text-xs hover:bg-green-300">
              <Link to={`/`}>보기</Link>
            </td>
          </tr>{" "}
          <tr>
            <td className="border-r lg:text-base text-xs">4</td>
            <td className="border-r lg:text-base text-xs">동대구역 아들</td>
            <td className="border-r lg:text-base text-xs">동대구역 잘알</td>
            <td className="border-r lg:text-base text-xs">0</td>
            <td className="border-r lg:text-base text-xs">1</td>
            <td className="bg-green-100 text-center lg:text-base text-xs hover:bg-green-300">
              <Link to={`/`}>보기</Link>
            </td>
          </tr>{" "}
          <tr>
            <td className="border-r lg:text-base text-xs">5</td>
            <td className="border-r lg:text-base text-xs">후후후</td>
            <td className="border-r lg:text-base text-xs">라멘은 여깁니다</td>
            <td className="border-r lg:text-base text-xs">1</td>
            <td className="border-r lg:text-base text-xs">1</td>
            <td className="bg-green-100 text-center lg:text-base text-xs hover:bg-green-300">
              <Link to={`/`}>보기</Link>
            </td>
          </tr>{" "}
          <tr>
            <td className="border-r lg:text-base text-xs">6</td>
            <td className="border-r lg:text-base text-xs">식탐쟁이</td>
            <td className="border-r lg:text-base text-xs">테크노마트맛집</td>
            <td className="border-r lg:text-base text-xs">2</td>
            <td className="border-r lg:text-base text-xs">1</td>
            <td className="bg-green-100 text-center lg:text-base text-xs hover:bg-green-300">
              <Link to={`/`}>보기</Link>
            </td>
          </tr>{" "}
          <tr>
            <td className="border-r lg:text-base text-xs">7</td>
            <td className="border-r lg:text-base text-xs">사슴</td>
            <td className="border-r lg:text-base text-xs">포항역 뒤 꽃밭</td>
            <td className="border-r lg:text-base text-xs">2</td>
            <td className="border-r lg:text-base text-xs">2</td>
            <td className="bg-green-100 text-center lg:text-base text-xs hover:bg-green-300">
              <Link to={`/`}>보기</Link>
            </td>
          </tr>{" "}
          <tr>
            <td className="border-r lg:text-base text-xs">8</td>
            <td className="border-r lg:text-base text-xs">여행쟁이</td>
            <td className="border-r lg:text-base text-xs">내일로 필수 장소</td>
            <td className="border-r lg:text-base text-xs">1</td>
            <td className="border-r lg:text-base text-xs">0</td>
            <td className="bg-green-100 text-center lg:text-base text-xs hover:bg-green-300">
              <Link to={`/`}>보기</Link>
            </td>
          </tr>{" "}
          <tr>
            <td className="border-r lg:text-base text-xs">9</td>
            <td className="border-r lg:text-base text-xs">역마살</td>
            <td className="border-r lg:text-base text-xs">대전역 성심당</td>
            <td className="border-r lg:text-base text-xs">1</td>
            <td className="border-r lg:text-base text-xs">1</td>
            <td className="bg-green-100 text-center lg:text-base text-xs hover:bg-green-300">
              <Link to={`/`}>보기</Link>
            </td>
          </tr>{" "}
        </tbody>
      </table>
    </div>
  );
}
