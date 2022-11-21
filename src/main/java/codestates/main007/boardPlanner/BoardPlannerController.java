package codestates.main007.boardPlanner;

import codestates.main007.planner.PlannerDto;
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
                          @RequestParam("board-id") long boardId,
                          @RequestParam("planner-id") long plannerId) throws IOException {

        boardPlannerService.save(accessToken, boardId, plannerId);
    }

    @PatchMapping("/{planner-id}")
    @ResponseStatus(HttpStatus.OK)
    public PlannerDto.MyPlannerResponse patchPriority(@RequestHeader(name = "Authorization") String accessToken,
                                                      @PathVariable("planner-id") long plannerId,
                                                      @RequestBody BoardPlannerDto.PriorityPatch priorityPatchDto) {
        return boardPlannerService.updatePriority(accessToken, plannerId, priorityPatchDto);
    }
}
