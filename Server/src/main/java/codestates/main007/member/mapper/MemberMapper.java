package codestates.main007.member.mapper;

import codestates.main007.board.entity.Board;
import codestates.main007.comment.entity.Comment;
import codestates.main007.member.dto.MemberDto;
import codestates.main007.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    default List<MemberDto.MyComment> commentsToMyComments(List<Comment> comments) {
        List<MemberDto.MyComment> myComments = new ArrayList<>();
        for (Comment comment : comments) {
            MemberDto.MyComment myComment = MemberDto.MyComment.builder()
                    .commentId(comment.getCommentId())
                    .boardId(comment.getBoard().getBoardId())
                    .title(comment.getBoard().getTitle())
                    .comment(comment.getComment())
                    .thumbnail(comment.getBoard().getThumbnail())
                    .build();
            myComments.add(myComment);
        }

        return myComments;
    }

    default MemberDto.HeaderInfo memberToHeaderInfo(Member member) {
        return MemberDto.HeaderInfo
                .builder()
                .memberId(member.getMemberId())
                .avatar(member.getAvatar())
                .name(member.getName())
                .email(member.getEmail())
                .build();
    }

    default List<MemberDto.MyPage> boardsToMyPages(List<Board> boards) {
        List<MemberDto.MyPage> myPages = new ArrayList<>();
        for (Board board : boards) {
            MemberDto.MyPage myPage = MemberDto.MyPage.builder()
                    .boardId(board.getBoardId())
                    .title(board.getTitle())
                    .review(board.getReview())
                    .star(board.getStar())
                    .latitude(board.getGeography().getY())
                    .longitude(board.getGeography().getX())
                    .thumbnail(board.getThumbnail())
                    .categoryId(board.getCategoryId())
                    .timeFromStation(board.getTimeFromStation())
                    .upScore(board.getUpScore())
                    .downScore(board.getDownScore())
                    .score(board.getScore())
                    .createdAt(board.getCreatedAt())
                    .tags(board.getTagDto())
                    .build();
            myPages.add(myPage);
        }
        return myPages;
    }
}
