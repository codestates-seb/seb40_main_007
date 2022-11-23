package codestates.main007.planner;

import codestates.main007.board.BoardDto;
import codestates.main007.tag.TagDto;
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
    public static class Post {
        private Double star;
        private Double latitude;
        private Double longitude;
        private Long stationId;
        private Long categoryId;
        private String address;
    }

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
        private List<Integer> timeBetweenBoards;
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
}
