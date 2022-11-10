package codestates.main007.member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

public class MockUpDto {
    @NoArgsConstructor
    @Getter
    @Setter
    public static class Boards {
        private List<MockUpDto.myPageResponse> items;

        public Boards(List<MockUpDto.myPageResponse> items) {
            this.items = items;

        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class myPageResponse {
        private long boardId;
        private String title;
        private String content;
        private double star;
        private int timeFromStation;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class boardToMap {
        private long boardId;
        private String thumbnailUrl;
        private double latitude;
        private double longitude;
    }

    @NoArgsConstructor
    @Getter
    @Setter
    public static class maps {
        private List<MockUpDto.boardToMap> items;

        public maps(List<MockUpDto.boardToMap> items) {
            this.items = items;

        }
    }
    @NoArgsConstructor
    @Getter
    @Setter
    public static class info {
        private int totalBoard;
        private int totalComment;
        private int score;
    }

    @NoArgsConstructor
    @Getter
    @Setter
    public static class updateDto {
        private String name;
        private String avatar;
        private String password;
    }
}
