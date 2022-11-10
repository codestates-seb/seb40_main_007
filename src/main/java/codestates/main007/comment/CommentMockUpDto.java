package codestates.main007.comment;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class CommentMockUpDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class input {
        private String content;
    }
}
