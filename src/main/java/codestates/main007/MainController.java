package codestates.main007;

import codestates.main007.board.*;
import codestates.main007.dto.PageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class MainController {
    private final BoardRepository boardRepository;
    private final BoardService boardService;
    private final BoardMapper boardMapper;

    @GetMapping("/{station-id}/{category-id}")
    @ResponseStatus(HttpStatus.OK)
    public PageDto getBoardByCategory(@RequestHeader(name = "Authorization") String accessToken,
                                      @PathVariable("station-id") long stationId,
                                      @PathVariable("category-id") long categoryId,
                                      @RequestParam int page,
                                      @RequestParam int size) {
        Page<Board> boardPage = boardService.findBoardPage(stationId, categoryId, page - 1, size);
        List<Board> boards = boardService.findBoards(stationId, categoryId);



        return new PageDto(boardMapper.boardsToBoardsResponse(boards), boardPage);
    }

    @GetMapping("/{station-id}/{category-id}/score")
    @ResponseStatus(HttpStatus.OK)
    public void getAllBoardSortByScore(@RequestHeader(name = "Authorization") String accessToken,
                                       @PathVariable("station-id") long stationId,
                                       @PathVariable("category-id") long categoryId) {
        //todo
    }

    @GetMapping("/{station-id}/{category-id}/date")
    @ResponseStatus(HttpStatus.OK)
    public void getAllBoardSortByDate(@RequestHeader(name = "Authorization") String accessToken,
                                      @PathVariable("station-id") long stationId,
                                      @PathVariable("category-id") long categoryId) {
        //todo
    }

    @GetMapping("/{station-id}/{category-id}/distance")
    @ResponseStatus(HttpStatus.OK)
    public void getAllBoardSortByDistance(@RequestHeader(name = "Authorization") String accessToken,
                                          @PathVariable("station-id") long stationId,
                                          @PathVariable("category-id") long categoryId) {
        //todo
    }

    @GetMapping("/{station-id}/{category-id}/search")
    @ResponseStatus(HttpStatus.OK)
    public void getAllBoardSearch(@RequestHeader(name = "Authorization") String accessToken,
                                  @PathVariable("station-id") long stationId,
                                  @PathVariable("category-id") long categoryId,
                                  @RequestParam("tag") String tag) {
        //todo
    }
}
