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
    @PostMapping("/boardplanners/{board-id}/{planner-id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void postBoardPlanner(@RequestHeader(name = "Authorization") String accessToken,
                          @RequestParam("board-id") long boardId,
                          @RequestParam("planner-id") long plannerId) throws IOException {

        boardPlannerService.save(accessToken, boardId, plannerId);
    }

    @PatchMapping("/boardplanners/temp/{planner-id}")
    @ResponseStatus(HttpStatus.OK)
    public PlannerDto.MyPlannerResponse patchTempPriority(@RequestHeader(name = "Authorization") String accessToken,
                                                      @PathVariable("planner-id") long plannerId,
                                                      @RequestBody BoardPlannerDto.PriorityPatch priorityPatchDto) {
        return boardPlannerService.updateTempPriority(accessToken, plannerId, priorityPatchDto);
    }

    @PatchMapping("/boardplanners/final/{planner-id}")
    @ResponseStatus(HttpStatus.OK)
    public PlannerDto.MyPlannerResponse patchPriority(@RequestHeader(name = "Authorization") String accessToken,
                                                      @PathVariable("planner-id") long plannerId,
                                                      @RequestBody BoardPlannerDto.PriorityPatch priorityPatchDto) {
        return boardPlannerService.updatePriority(accessToken, plannerId, priorityPatchDto);
    }

    @DeleteMapping("/boardplanners/{boardplanner-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePlanner(@RequestHeader(name = "Authorization") String accessToken,
                              @PathVariable("boardplanner-id") long boardPlannerId) throws IOException {

        boardPlannerService.deleteBoardPlanner(accessToken, boardPlannerId);
    }
}
