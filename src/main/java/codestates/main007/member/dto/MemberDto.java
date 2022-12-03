package codestates.main007.member.dto;

import codestates.main007.tag.dto.TagDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
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
        private double latitude;
        private double longitude;
        private String thumbnail;
        private long categoryId;
        private int timeFromStation;
        private boolean dibs;
        private int upScore;
        private int downScore;
        private int score;
        private LocalDateTime createdAt;
        private TagDto.Response tags;

        public void setDibs(boolean isDibs){
            this.dibs = isDibs;
        }
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
    public static class Password {
        private String password;
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
    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class HeaderInfo {
        private long memberId;
        private String name;
        private String avatar;
        private String email;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Notice {
        private long boardId;
        private String senderName;
        private String notice;
    }

    @Getter
    @Builder
    public static class Writer {
        private long memberId;
        private String name;
        private String avatar;
    }
    // 삭제 예정
//    @Getter
//    @Builder
//    @NoArgsConstructor
//    @AllArgsConstructor
//    public static class MyMap {
//        private long boardId;
//        private String thumbnail;
//        private double latitude;
//        private double longitude;
//    }
//
//    @Getter
//    @Builder
//    @NoArgsConstructor
//    @AllArgsConstructor
//    public static class MyPage {
//        private long boardId;
//        private String title;
//        private String review;
//        private double star;
//        private int timeFromStation;
//    }
}
