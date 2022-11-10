package codestates.main007.board;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@Controller
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
                .build();
        return boardResponseDto;
    }

    @GetMapping("/{board-id}")
    @ResponseStatus(HttpStatus.OK)
    public BoardMockUpDto.DetailResponse getBoard(@PathVariable("board-id") long boardId,
                                   @RequestHeader(name = "Authorization") String token) {
        BoardMockUpDto.DetailResponse boardDetailResponseDto = BoardMockUpDto.DetailResponse.builder()
                .title("title")
                .title("review")
                .star(5.0f)
                .thumbNail("썸네일")
                .latitude(123.12314d)
                .longtitude(123.12123d)
                .station("서울역")
                .category("맛집")
                .tags(List.of("한식","따뜻한 분위기"))
                .address("서울역길 152")
                .build();
        return boardDetailResponseDto;
    }
}
