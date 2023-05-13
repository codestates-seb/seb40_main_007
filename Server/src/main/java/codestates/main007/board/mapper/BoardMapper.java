package codestates.main007.board.mapper;

import codestates.main007.board.dto.BoardDto;
import codestates.main007.board.entity.Board;
import codestates.main007.comment.dto.CommentDto;
import codestates.main007.member.entity.Member;
import codestates.main007.member.dto.MemberDto;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardMapper {

    default BoardDto.DetailResponse boardToDetailResponseDto(Board board, boolean isDibs, Member member, List<CommentDto.Response> comments, List<String> imageUrls, int scoreStatus, List<BoardDto.aroundResponse> aroundResponses) {
        MemberDto.Writer writer = MemberDto.Writer.builder()
                .memberId(member.getMemberId())
                .name(member.getName())
                .avatar(member.getAvatar())
                .build();

        BoardDto.DetailResponse detailResponse =
                BoardDto.DetailResponse.builder()
                        .boardId(board.getBoardId())
                        .title(board.getTitle())
                        .review(board.getReview())
                        .star(board.getStar())
                        .thumbnail(board.getThumbnail())
                        .stationId(board.getStationId())
                        .categoryId(board.getCategoryId())
                        .address(board.getAddress())
                        .latitude(board.getGeography().getY())
                        .longitude(board.getGeography().getX())
                        .timeFromStation(board.getTimeFromStation())
                        .dibs(isDibs)
                        .upScore(board.getUpScore())
                        .downScore(board.getDownScore())
                        .scoreStatus(scoreStatus)
                        .createdAt(board.getCreatedAt())
                        .writer(writer)
                        .imageUrls(imageUrls)
                        .tags(board.getTagDto())
                        .comments(comments)
                        .around(aroundResponses)
                        .build();
        return detailResponse;
    }

    default BoardDto.Dibs isDibsToDibsDto(boolean isDibs) {
        return BoardDto.Dibs.builder().dibs(isDibs).build();
    }

    default List<BoardDto.boardsResponse> boardsToBoardsResponse(List<Board> boards) {
        List<BoardDto.boardsResponse> boardsResponses = new ArrayList<>();
        for (Board board : boards) {
            BoardDto.boardsResponse response = BoardDto.boardsResponse.builder()
                    .boardId(board.getBoardId())
                    .title(board.getTitle())
                    .review(board.getReview())
                    .star(board.getStar())
                    .thumbnail(board.getThumbnail())
                    .timeFromStation(board.getTimeFromStation())
                    .address(board.getAddress())
                    .latitude(board.getGeography().getY())
                    .longitude(board.getGeography().getX())
                    .tags(board.getTagDto())
                    .dibs(false)
                    .build();

            boardsResponses.add(response);
        }
        return boardsResponses;
    }

    default List<BoardDto.aroundResponse> boardsToAround(List<Board> boards, List<Boolean> booleans) {
        List<BoardDto.aroundResponse> aroundResponses = new ArrayList<>();
        for (int i = 0; i < boards.size(); i++) {
            Board board = boards.get(i);
            boolean isDib = booleans.get(i);
            BoardDto.aroundResponse aroundResponse = BoardDto.aroundResponse.builder()
                    .boardId(board.getBoardId())
                    .title(board.getTitle())
                    .review(board.getReview())
                    .thumbnail(board.getThumbnail())
                    .timeFromStation(board.getTimeFromStation())
                    .dibs(isDib)
                    .star(board.getStar())
                    .build();
            aroundResponses.add(aroundResponse);
        }
        return aroundResponses;
    }
}
