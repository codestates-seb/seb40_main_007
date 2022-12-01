package codestates.main007.boardPlanner.controller;

import codestates.main007.boardPlanner.dto.BoardPlannerDto;
import codestates.main007.boardPlanner.service.BoardPlannerService;
import codestates.main007.dto.SingleResponseDto;
import codestates.main007.planner.dto.PlannerDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/boardplanners")
public class BoardPlannerController {
    private final BoardPlannerService boardPlannerService;
    @PostMapping("/{board-id}/{planner-id}")
    @ResponseStatus(HttpStatus.CREATED)
    public SingleResponseDto<PlannerDto.MyPlannerWithBoards> postBoardPlanner(@RequestHeader(name = "Authorization") String accessToken,
                                                                              @PathVariable("board-id") long boardId,
                                                                              @PathVariable("planner-id") long plannerId) {

        return SingleResponseDto.of(boardPlannerService.save(accessToken, boardId, plannerId));
    }

    @PatchMapping("/{planner-id}")
    @ResponseStatus(HttpStatus.OK)
    public PlannerDto.MyPlannerResponse patchPriority(@RequestHeader(name = "Authorization") String accessToken,
                                                      @PathVariable("planner-id") long plannerId,
                                                      @RequestBody BoardPlannerDto.PriorityPatch priorityPatchDto) throws InterruptedException {
        return boardPlannerService.updatePriority(accessToken, plannerId, priorityPatchDto);
    }
}
