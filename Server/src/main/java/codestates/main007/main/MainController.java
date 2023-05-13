package codestates.main007.main;

import codestates.main007.board.service.BoardService;
import codestates.main007.dto.PageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping
@RequiredArgsConstructor
public class MainController {
    private final BoardService boardService;

    @GetMapping("/{station-id}/{category-id}/{sort}")
    @ResponseStatus(HttpStatus.OK)
    public PageDto getBoardByCategory(@RequestHeader(name = "Authorization", required = false) String accessToken,
                                      @PathVariable("station-id") long stationId,
                                      @PathVariable("category-id") long categoryId,
                                      @PathVariable String sort,
                                      @RequestParam int page,
                                      @RequestParam int size) {
        return boardService.getByCategory(sort, page, size, stationId, categoryId, accessToken);
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

        return boardService.getByTag(sort, page, size, stationId, categoryId, tagId, accessToken);
    }
}
