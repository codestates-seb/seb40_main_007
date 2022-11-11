package codestates.main007.comments;

import org.mapstruct.Mapper;

import java.time.LocalDateTime;

@Mapper(componentModel = "spring")
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
