package codestates.main007.member;

import codestates.main007.board.Board;
import codestates.main007.comments.Comment;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    default Member signupDtoToMember(MemberDto.Signup signupDto) {
        Member member = Member.builder()
                .email(signupDto.getEmail())
                .password(signupDto.getPassword())
                // todo:랜덤 네이밍 서비스 추가
                .name("임시 네임")
                // todo: 기본 프로필 이미지 서비스 추가
                .avatar("임시 이미지 주소")
                .build();
        return member;
    }

    default List<MemberDto.MyPage> boardsToMyPages(List<Board> boards) {
        List<MemberDto.MyPage> myPages = new ArrayList<>();
        for (Board board : boards) {
            MemberDto.MyPage myPage = MemberDto.MyPage.builder()
                    .boardId(board.getBoardId())
                    .star(board.getStar())
                    .title(board.getTitle())
                    .review(board.getReview())
                    .timeFromStation(board.getTimeFromStation())
                    .build();

            myPages.add(myPage);
        }

        return myPages;
    }

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
}
