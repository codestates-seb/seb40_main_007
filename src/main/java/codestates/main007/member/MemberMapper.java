package codestates.main007.member;

import codestates.main007.board.Board;
import codestates.main007.comments.Comment;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
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

    default List<MemberDto.MyMap> boardsToMyMaps(List<Board> boards) {
        List<MemberDto.MyMap> myMaps = new ArrayList<>();
        for (Board board : boards) {
            MemberDto.MyMap myMap = MemberDto.MyMap.builder()
                    .boardId(board.getBoardId())
                    .thumbnail(board.getThumbnail())
                    .latitude(board.getLatitude())
                    .longitude(board.getLongitude())
                    .build();

            myMaps.add(myMap);
        }

        return myMaps;
    }
}
