package codestates.main007;

import codestates.main007.board.*;
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
    public PageDto getBoardByCategory(@RequestHeader(name = "Authorization") String accessToken,
                                      @PathVariable("station-id") long stationId,
                                      @PathVariable("category-id") long categoryId,
                                      @PathVariable String sort,
                                      @RequestParam int page,
                                      @RequestParam int size) {
        if (sort.equals("default")){
            sort = "boardId";
        }
        Page<Board> boardPage = boardService.findBoardPage(stationId, categoryId, page - 1, size,Sort.by(sort).descending());
        List<Board> boards = boardService.findBoards(stationId, categoryId, Sort.by(sort).descending());

        return new PageDto(boardMapper.boardsToBoardsResponse(boards), boardPage);
    }

//    @GetMapping("/{station-id}/{category-id}/{sort}/search")
//    @ResponseStatus(HttpStatus.OK)
//    public PageDto getAllBoardSearch(@RequestHeader(name = "Authorization") String accessToken,
//                                     @PathVariable("station-id") long stationId,
//                                     @PathVariable("category-id") long categoryId,
//                                     @PathVariable String sort,
//                                     @RequestParam("tag") String tag,
//                                     @RequestParam int page,
//                                     @RequestParam int size) {
//        if (sort.equals("default")){
//            sort = "boardId";
//        }
//
//    }
}
