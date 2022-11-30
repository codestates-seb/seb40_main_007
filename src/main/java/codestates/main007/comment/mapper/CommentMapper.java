package codestates.main007.comment.mapper;

import codestates.main007.comment.dto.CommentDto;
import codestates.main007.comment.entity.Comment;
import codestates.main007.exception.member.dto.MemberDto;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    default Comment commentDtoToComment(CommentDto.Input commentDto) {
        return Comment.builder()
                .comment(commentDto.getComment())
                .createdAt(LocalDateTime.now())
                .modifiedAt(LocalDateTime.now())
                .build();
    }

    default List<CommentDto.Response> commentsToResponses(List<Comment> comments){
        List<CommentDto.Response> responses = new ArrayList<>();
        for (Comment comment : comments){
            MemberDto.Writer writer = MemberDto.Writer.builder()
                    .memberId(comment.getWriter().getMemberId())
                    .name(comment.getWriter().getName())
                    .avatar(comment.getWriter().getAvatar())
                    .build();

            CommentDto.Response response = CommentDto.Response
                    .builder()
                    .commentId(comment.getCommentId())
                    .comment(comment.getComment())
                    .createdAt(comment.getCreatedAt())
                    .writer(writer)
                    .build();

            responses.add(response);
        }
        return responses;
    }
}
