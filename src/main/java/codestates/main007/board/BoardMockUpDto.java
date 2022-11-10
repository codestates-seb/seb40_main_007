package codestates.main007.board;

import codestates.main007.tag.TagDto;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

public class BoardMockUpDto {

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Post {
        private String title;
        private String review;
        private double star;
        private String thumbNail;
        private double latitude;
        private double longitude;
        private String station;
        private String category;
        private List<TagDto.Response> tags;
        private String address;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response{
        private long boardId;
        private String title;
        private String review;
        private double star;
        private String thumbNail;
        private String timeFromStation;//ex)'역 5분 거리'
        private boolean dibs;
        private LocalDateTime createdAt;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class DetailResponse{
        private String title;
        private String review;
        private float star;
        private String thumbNail;
        private double latitude;
        private double longitude;
        private String station;
        private String category;
        private List<TagDto.Response> tags;
        private String address;
    }

    @Getter
    @Builder
    public static class MultiResponseDto<T> {
        private List<T> data;

        private MultiResponseDto(List<T> data) {
            this.data = data;
        }
        public static <T> MultiResponseDto<T> of(List<T> data) {
            return new MultiResponseDto<>(data);
        }
    }
}
