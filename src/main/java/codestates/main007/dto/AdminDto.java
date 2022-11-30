package codestates.main007.dto;

import codestates.main007.board.dto.BoardDto;
import lombok.Builder;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Getter
@Builder
public class AdminDto {
    private int todayBoard;
    private int monthBoard;
    private int totalBoard;
    private int totalMember;
    private List<BoardDto.Reported> reportedBoards;
    private List<Integer> stationCount;
    private List<BoardDto.HighLowScoreResponse> highScoreBoards;
    private List<BoardDto.HighLowScoreResponse> lowScoreBoards;
    private WeekBoardDto BoardsOfThisWeek;
}
