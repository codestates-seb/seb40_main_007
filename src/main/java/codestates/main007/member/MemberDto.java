package codestates.main007.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberDto {
    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MyPage{
        private long boardId;
        private String title;
        private String review;
        private double star;
        private int timeForStation;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post{
        @NotBlank
        @Email
        private String email;
        @NotBlank
        private String password;
    }
    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch{
        private String name;
        private String avatar;
        private String password;
    }
}
