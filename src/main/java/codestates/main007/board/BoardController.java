package codestates.main007.board;

import codestates.main007.tag.Tag;
import codestates.main007.tag.TagDto;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/boards")
@ResponseStatus(HttpStatus.CREATED)
public class BoardController {
    @PostMapping
    public BoardMockUpDto.Response postBoard(@RequestHeader(name = "Authorization") String token,
                         @RequestBody BoardMockUpDto.Post boardPostDto) {
        BoardMockUpDto.Response boardResponseDto = BoardMockUpDto.Response.builder()
                .title(boardPostDto.getTitle())
                .review(boardPostDto.getReview())
                .star(boardPostDto.getStar())
                .thumbNail(boardPostDto.getThumbNail())
                .timeFromStation("역 5분 거리")
                .dibs(true)
                .createdAt(LocalDateTime.now())
                .boardId(1)
                .build();
        return boardResponseDto;
    }

    @GetMapping("/{board-id}")
    @ResponseStatus(HttpStatus.OK)
    public BoardMockUpDto.DetailResponse getBoard(@PathVariable("board-id") long boardId,
                                   @RequestHeader(name = "Authorization") String token) {
        BoardMockUpDto.DetailResponse boardDetailResponseDto = BoardMockUpDto.DetailResponse.builder()
                .title("title")
                .review("review")
                .star(5.0d)
                .thumbNail("썸네일")
                .station("서울역")
                .category("맛집")
                .tags(List.of(new TagDto.Response(new Tag(1,"한식")),new TagDto.Response(new Tag(2,"따뜻한 분위기"))))
                .address("서울역길 152")
                .timeFromStation("5분정도걸리나")
                .dibs(true)
                .createdAt(LocalDateTime.now())
                .build();
        return boardDetailResponseDto;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public BoardMockUpDto.MultiResponseDto<BoardMockUpDto.Response> getBoards() {
        BoardMockUpDto.Response boardResponseDto1 = BoardMockUpDto.Response.builder()
                . boardId(1)
                .title("title")
                .review("review")
                .star(5.0f)
                .thumbNail("썸네일")
                .timeFromStation("역 5분 거리")
                .dibs(true)
                .createdAt(LocalDateTime.now())
                .build();
        BoardMockUpDto.Response boardResponseDto2 = BoardMockUpDto.Response.builder()
                .boardId(2)
                .title("title2")
                .review("review2")
                .star(5.0f)
                .thumbNail("썸네일2")
                .timeFromStation("역 6분 거리")
                .dibs(true)
                .createdAt(LocalDateTime.now())
                .build();
        BoardMockUpDto.MultiResponseDto<BoardMockUpDto.Response> multiResponseDto
                = BoardMockUpDto.MultiResponseDto.<BoardMockUpDto.Response>builder()
                .data(List.of(boardResponseDto1,boardResponseDto2))
                .build();
        return multiResponseDto;
    }

    @DeleteMapping("/{board-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    void deleteQuestion(@PathVariable(name = "board-id") Long boardId,
                        @RequestHeader(name = "Authorization") String token) {
    }
}
