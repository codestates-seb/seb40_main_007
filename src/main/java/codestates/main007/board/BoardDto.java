package codestates.main007.board;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

public class BoardDto {
    @Getter
    @Builder
    public static class Input{
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
    public static class DetailResponse{
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
        // todo: tag 추가필요, 작성자 추가 필요, 이미지 추가필요
    }

    @Getter
    @Builder
    public static class Dibs{
        private boolean dibs;
    }
}
