package codestates.main007.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import java.util.List;

public class MemberDto {
    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Signup {
        private String email;
        private String password;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MyPage {
        private long boardId;
        private String title;
        private String review;
        private double star;
        private int timeFromStation;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MyComment {
        private long commentId;
        private long boardId;
        private String title;
        private String comment;
        private String thumbnail;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MyMap {
        private long boardId;
        private String thumbnail;
        private double latitude;
        private double longitude;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private String name;
        private String avatar;
        private String password;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Email {
        private String address;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Info {
        private int totalBoard;
        private int totalComment;
        private int score;
        private List<Long> visitedStations;
    }
}
