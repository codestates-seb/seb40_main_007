package codestates.main007.board;

import org.mapstruct.Mapper;

import java.time.LocalDateTime;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    default public Board boardDtoToBoard(BoardDto.Input boardDto){
        Board board = Board.builder()
                .title(boardDto.getTitle())
                .review(boardDto.getReview())
                .createdAt(LocalDateTime.now())
                .modifiedAt(LocalDateTime.now())
                .categoryId(boardDto.getCategoryId())
                .stationId(boardDto.getStationId())
                .latitude(boardDto.getLatitude())
                .longitude(boardDto.getLongitude())
                //todo: 이미지 처리로직, 썸네일 처리 로직
//                .images()
//                .thumbnail()
                .star(boardDto.getStar())
                .score(0)
                .viewCount(0)
                .address(boardDto.getAddress())
                // 시간 계산 로직
//                .timeFromStation()
                //todo: tag 추가 필요
                .build();
        return board;
    }

    default public BoardDto.DetailResponse boardToDetailResponseDto(Board board){
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
                        .timeFromStation(board.getTimeFromStation())
                        // todo: 찜 연관관계 설정후 추가, 작성자, 이미지
                        //.dibs()
                        .createdAt(board.getCreatedAt())
                        .build();
        return detailResponse;
    }
}