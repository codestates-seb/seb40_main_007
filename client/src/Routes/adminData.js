import Header from "../components/Header";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  stationCount,
  highScoreBoards,
  lowScoreBoards,
  boardsOfThisWeek,
} from "../atoms/adminPage/data";
import Footer from "../components/Footer";
import StationData from "../components/adminData/StationData";
import WeekData from "../components/adminData/WeekData";
import HighScoreData from "../components/adminData/HighScoreData";
import LowScoreData from "../components/adminData/LowScoreData";
import axios from "axios";
import { accessToken } from "../atoms/loginData";

export default function adminData() {
  const [stationCnt, setStationCnt] = useRecoilState(stationCount);
  const [boardsWeek, setBoardssWeek] = useRecoilState(boardsOfThisWeek);
  const [, setHighBoards] = useRecoilState(highScoreBoards);
  const [, setLowBoards] = useRecoilState(lowScoreBoards);
  const [TOKEN] = useRecoilState(accessToken);

  useEffect(() => {
    console.log("받아왕야지..?");
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios
      .get(`${process.env.REACT_APP_URL}/adminPage`, config)
      .then((reponse) => {
        console.log(reponse);
        setStationCnt(reponse.data.stationCount);
        setBoardssWeek(reponse.data.boardsOfThisWeek);
        setHighBoards(reponse.data.highScoreBoards);
        setLowBoards(reponse.data.lowScoreBoards);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full bg-[rgba(235,235,235,0.34)]">
      <Header />
      <div className="max-w-6xl pt-20 border m-auto gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 pb-52">
          <StationData stationCntdata={stationCnt} />
          <WeekData boardsWeek={boardsWeek} />
          <HighScoreData />
          <LowScoreData />
        </div>
      </div>
      <Footer />
    </div>
  );
}
