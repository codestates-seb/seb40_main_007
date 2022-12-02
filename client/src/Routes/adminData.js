import Header from "../components/Header";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import {
  stationCount,
  highScoreBoards,
  lowScoreBoards,
  boardsOfThisWeek,
  thisWeek,
} from "../atoms/adminPage/data";
import Footer from "../components/Footer";
import StationData from "../components/adminData/StationData";
import WeekData from "../components/adminData/WeekData";
import HighScoreData from "../components/adminData/HighScoreData";
import LowScoreData from "../components/adminData/LowScoreData";
import axios from "axios";
import { accessToken, isAdmin } from "../atoms/loginData";
import AdminTab from "../components/AdminTab";
import AdminIssue from "../components/AdminIssue";

export default function adminData() {
  const [stationCnt, setStationCnt] = useRecoilState(stationCount);
  const [boardsWeek, setBoardsWeek] = useRecoilState(boardsOfThisWeek);
  const [week, setThisWeek] = useRecoilState(thisWeek);
  const [, setHighBoards] = useRecoilState(highScoreBoards);
  const [, setLowBoards] = useRecoilState(lowScoreBoards);
  const [TOKEN] = useRecoilState(accessToken);
  const [admin] = useRecoilState(isAdmin);
  const navigtion = useNavigate();
  useEffect(() => {
    if (!admin) {
      navigtion("/");
    } else {
      const config = {
        headers: { Authorization: TOKEN },
      };
      axios
        .get(`${process.env.REACT_APP_URL}/adminPage`, config)
        .then((reponse) => {
          console.log(reponse);
          setStationCnt(reponse.data.stationCount);
          setBoardsWeek(reponse.data.boardsOfThisWeek);
          setThisWeek(reponse.data.thisWeek);
          setHighBoards(reponse.data.highScoreBoards);
          setLowBoards(reponse.data.lowScoreBoards);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div className="w-full bg-[rgba(235,235,235,0.34)]">
      <Header />
      <AdminTab />
      <AdminIssue />
      <div className="max-w-6xl pt-20 m-auto gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 pb-52">
          <StationData stationCntdata={stationCnt} />
          <WeekData boardsWeek={boardsWeek} week={week} />
          <HighScoreData />
          <LowScoreData />
        </div>
      </div>
      <Footer />
    </div>
  );
}
