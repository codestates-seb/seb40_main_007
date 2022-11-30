package codestates.main007.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.ArrayList;

@Getter
@Builder
public class WeekBoardDto {
    private ArrayList<String> thisWeek;
    private ArrayList<Integer> boardsOfThisWeek;
}
