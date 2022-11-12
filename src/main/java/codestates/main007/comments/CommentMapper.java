package codestates.main007.comments;

import codestates.main007.board.Board;
import codestates.main007.member.Member;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    default Comment commentDtoToComment(Member member, Board board, CommentDto.Input commentDto) {
        Comment comment = Comment.builder()
                .writer(member)
                .board(board)
                .comment(commentDto.getComment())
                .createdAt(LocalDateTime.now())
                .modifiedAt(LocalDateTime.now())
                .build();

        return comment;
    }
}
