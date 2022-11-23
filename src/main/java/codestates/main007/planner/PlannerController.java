package codestates.main007.planner;

import codestates.main007.dto.MultiResponseDto;
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
    public void postPlanner(
            @RequestHeader(name = "Authorization") String accessToken,
            @RequestBody PlannerDto.Input inputDto) throws IOException {

        plannerService.save(accessToken, inputDto);
    }

    @PatchMapping("/{planner-id}")//일단 이름만 바꿀 수 있음.
    @ResponseStatus(HttpStatus.OK)
    public void patchPlanner(@RequestHeader(name = "Authorization") String accessToken,
                             @PathVariable("planner-id") long plannerId,
                             @RequestBody PlannerDto.Input patchDto) {

        plannerService.update(accessToken, plannerId, patchDto);
    }

    @GetMapping("/{planner-id}")
    @ResponseStatus(HttpStatus.OK)
    public PlannerDto.MyPlannerResponse getMyPlannerPage(@RequestHeader(name = "Authorization") String accessToken,
                                                         @PathVariable("planner-id") long plannerId) throws InterruptedException {

        return plannerService.getMyPlannerPage(accessToken, plannerId);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public MultiResponseDto<PlannerDto.MyPlannersResponse>
    getMyPlanners(@RequestHeader(name = "Authorization") String accessToken) {

        return MultiResponseDto.of(plannerService.getMyPlanners(accessToken));
    }

    @DeleteMapping("/{planner-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePlanner(@RequestHeader(name = "Authorization") String accessToken,
                              @PathVariable("planner-id") long plannerId) throws IOException {

        plannerService.deletePlanner(accessToken, plannerId);
    }
}
