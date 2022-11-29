package codestates.main007.dto;

import codestates.main007.board.BoardDto;
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
}
