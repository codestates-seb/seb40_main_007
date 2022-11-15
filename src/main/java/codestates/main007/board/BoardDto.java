package codestates.main007.board;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

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
        // todo: tag 추가필요, 이미지 추가 필요
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
        private LocalDateTime createdAt;
        private BoardDto.Writer writer;
        // todo: tag 추가필요, 이미지 추가필요
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
        // todo: tag 추가필요, 이미지 추가필요

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
    public static class Writer {
        private long memberId;
        private String name;
        private String avatar;
    }
}
