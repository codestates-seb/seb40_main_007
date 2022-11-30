package codestates.main007.main.controller;

import codestates.main007.board.dto.BoardDto;
import codestates.main007.board.entity.Board;
import codestates.main007.board.mapper.BoardMapper;
import codestates.main007.board.service.BoardService;
import codestates.main007.dto.PageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class MainController {
    private final BoardService boardService;
    private final BoardMapper boardMapper;

    @GetMapping("/{station-id}/{category-id}/{sort}")
    @ResponseStatus(HttpStatus.OK)
    public PageDto getBoardByCategory(@RequestHeader(name = "Authorization", required = false) String accessToken,
                                      @PathVariable("station-id") long stationId,
                                      @PathVariable("category-id") long categoryId,
                                      @PathVariable String sort,
                                      @RequestParam int page,
                                      @RequestParam int size) {
        Sort defaultSort = Sort.by(sort).descending();
        if (sort.equals("default")) {
            defaultSort = Sort.by("boardId").descending();
        } else if (sort.equals("date")) {
            defaultSort = Sort.by("createdAt").descending();
        } else if (sort.equals("time")) {
            defaultSort = Sort.by("timeFromStation").ascending();
        }
        Page<Board> boardPage = boardService.findBoardPage(stationId, categoryId, page - 1, size, defaultSort);
        List<Board> boards = boardPage.getContent();
        List<BoardDto.boardsResponse> responses = boardMapper.boardsToBoardsResponse(boards);

        if (accessToken != null) {
            responses = boardService.listCheckDibs(accessToken, responses);
        }

        return new PageDto(responses, boardPage);
    }

    @GetMapping("/{station-id}/{category-id}/{sort}/search")
    @ResponseStatus(HttpStatus.OK)
    public PageDto getBoardByTag(@RequestHeader(name = "Authorization", required = false) String accessToken,
                                 @PathVariable("station-id") long stationId,
                                 @PathVariable("category-id") long categoryId,
                                 @PathVariable String sort,
                                 @RequestParam int page,
                                 @RequestParam int size,
                                 @RequestParam("tag") long tagId) {
        Sort defaultSort = Sort.by(sort).descending();
        if (sort.equals("default")) {
            defaultSort = Sort.by("boardId").descending();
        } else if (sort.equals("date")) {
            defaultSort = Sort.by("createdAt").descending();
        } else if (sort.equals("time")) {
            defaultSort = Sort.by("timeFromStation").ascending();
        }
        Page<Board> boardPage = boardService.findBoardPageByTag(stationId, categoryId, page - 1, size, defaultSort, tagId);
        List<Board> boards = boardPage.getContent();
        List<BoardDto.boardsResponse> responses = boardMapper.boardsToBoardsResponse(boards);

        if (accessToken != null) {
            responses = boardService.listCheckDibs(accessToken, responses);
        }

        return new PageDto(responses, boardPage);
    }
}
