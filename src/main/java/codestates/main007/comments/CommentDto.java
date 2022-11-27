package codestates.main007.comments;

import codestates.main007.member.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

public class CommentDto {
    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Input {
        private String comment;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private long commentId;
        private String comment;
        private MemberDto.Writer writer;
        private LocalDateTime createdAt;
    }
}
