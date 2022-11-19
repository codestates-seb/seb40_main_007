package codestates.main007.boardPlanner;

import codestates.main007.board.BoardDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class BoardPlannerController {
    private final BoardPlannerService boardPlannerService;
    @PostMapping("/boards/{board-id}/{planner-id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void postBoardPlanner(@RequestHeader(name = "Authorization") String accessToken,
                          @RequestPart("data") BoardDto.Input postDto,
                          @RequestParam("board-id") long boardId,
                          @RequestParam("planner-id") long plannerId) throws IOException {

        boardPlannerService.save(accessToken, boardId, plannerId);
    }
}
