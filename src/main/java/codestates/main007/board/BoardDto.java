package codestates.main007.board;

import codestates.main007.comments.CommentDto;
import codestates.main007.member.MemberDto;
import codestates.main007.tag.TagDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

public class BoardDto {
    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Input {
        private String title;
        private String review;
        private Double star;
        private Double latitude;
        private Double longitude;
        private Long stationId;
        private Long categoryId;
        private String address;
        private List<Long> tags;
    }
    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private String title;
        private String review;
        private Double star;
        private Double latitude;
        private Double longitude;
        private Long stationId;
        private Long categoryId;
        private String address;
        private List<Long> tags;
        private List<String> images;
    }

    @Getter
    @Builder
    public static class DetailResponse {
        private long boardId;
        private String title;
        private String review;
        private double star;
        private String thumbnail;
        private long stationId;
        private long categoryId;
        private String address;
        private int timeFromStation;
        private boolean dibs;
        private int upScore;
        private int downScore;
        private int scoreStatus;
        private LocalDateTime createdAt;
        private MemberDto.Writer writer;
        private List<String> imageUrls;
        private TagDto.Response tags;
        private List<CommentDto.Response> comments;
        private List<BoardDto.aroundResponse> around;
    }

    @Getter
    @Builder
    public static class boardsResponse {
        private long boardId;
        private String title;
        private String review;
        private double star;
        private String thumbnail;
        private int timeFromStation;
        private boolean dibs;
        private String address;
        private double latitude;
        private double longitude;
        private TagDto.Response tags;

        public void setDibs(boolean newDibs){
            this.dibs = newDibs;
        }
    }

    @Getter
    @Builder
    public static class Dibs {
        private boolean dibs;
    }

    @Getter
    @Builder
    public static class ScoreStatus {
        private int scoreStatus;
    }

    @Getter
    @Builder
    public static class aroundResponse {
        private long boardId;
        private String title;
        private String review;
        private String thumbnail;
        private double star;
        private int timeFromStation;
        private boolean dibs;
    }
}
