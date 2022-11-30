package codestates.main007.planner.dto;

import codestates.main007.board.dto.BoardDto;
import codestates.main007.tag.dto.TagDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

public class PlannerDto {
    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Input {
        private String plannerName;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MyPlannerResponse {
        private long plannerId;
        private String plannerName;
        List<BoardDto.boardsResponse> boards;
        private List<Time> timeBetweenBoards;
        private int wholeTime;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MyPlannersResponse {
        private long plannerId;
        private String plannerName;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Board{
        private long boardId;
        private String title;
        private String review;
        private double star;
        private String thumbnail;
        private long stationId;
        private long categoryId;
        private String address;
        private int upScore;
        private int downScore;
        private TagDto.Response tags;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Time{
        private String type;
        private int time;
    }
}
