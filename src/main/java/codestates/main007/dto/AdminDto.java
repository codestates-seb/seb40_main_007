package codestates.main007.dto;

import codestates.main007.board.dto.BoardDto;
import codestates.main007.board.dto.BoardOfWeek;
import codestates.main007.board.dto.BoardOfWeekDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

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
    private BoardOfWeek BoardsOfThisWeek;
}
