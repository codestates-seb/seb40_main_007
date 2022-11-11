package codestates.main007.comments;

import java.time.LocalDateTime;

public interface CommentMapper {
    default Comment commentDtoToComment(CommentDto.Input commentDto) {
        Comment comment = Comment.builder()
                .comment(commentDto.getComment())
                .createdAt(LocalDateTime.now())
                .modifiedAt(LocalDateTime.now())
                .build();

        return comment;
    }
}
