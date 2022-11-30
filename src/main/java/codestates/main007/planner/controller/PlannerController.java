package codestates.main007.planner.controller;

import codestates.main007.dto.MultiResponseDto;
import codestates.main007.planner.dto.PlannerDto;
import codestates.main007.planner.service.PlannerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/planners")
@RequiredArgsConstructor
public class PlannerController {
    private final PlannerService plannerService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MultiResponseDto<PlannerDto.MyPlannersResponse> postPlanner(
            @RequestHeader(name = "Authorization") String accessToken,
            @RequestBody PlannerDto.Input inputDto) throws IOException {

        return MultiResponseDto.of(plannerService.save(accessToken, inputDto));
    }

    @PatchMapping("/{planner-id}")
    @ResponseStatus(HttpStatus.OK)
    public MultiResponseDto<PlannerDto.MyPlannersResponse> patchPlanner(@RequestHeader(name = "Authorization") String accessToken,
                                                                        @PathVariable("planner-id") long plannerId,
                                                                        @RequestBody PlannerDto.Input patchDto) {

        return MultiResponseDto.of(plannerService.update(accessToken, plannerId, patchDto));
    }

    @GetMapping("/{planner-id}")
    @ResponseStatus(HttpStatus.OK)
    public PlannerDto.MyPlannerResponse getMyPlannerPage(@RequestHeader(name = "Authorization") String accessToken,
                                                         @PathVariable("planner-id") long plannerId)
            throws InterruptedException {

        return plannerService.getMyPlannerPage(accessToken, plannerId);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public MultiResponseDto<PlannerDto.MyPlannersResponse>
    getMyPlanners(@RequestHeader(name = "Authorization") String accessToken) {

        return MultiResponseDto.of(plannerService.getMyPlanners(accessToken));
    }

    @DeleteMapping("/{planner-id}")
    @ResponseStatus(HttpStatus.OK)
    public MultiResponseDto<PlannerDto.MyPlannersResponse> deletePlanner(@RequestHeader(name = "Authorization") String accessToken,
                                                                         @PathVariable("planner-id") long plannerId) {

        return MultiResponseDto.of(plannerService.delete(accessToken, plannerId));
    }
}
