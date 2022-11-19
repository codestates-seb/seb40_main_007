package codestates.main007.planner;

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
            @RequestHeader(name = "Authorization") String accessToken) throws IOException {

        plannerService.save(accessToken);
    }

    @PatchMapping("/{planner-id}")
    @ResponseStatus(HttpStatus.OK)
    public void patchPlanner(@RequestHeader(name = "Authorization") String accessToken,
                           @PathVariable("planner-id") long plannerId,
                           @RequestBody PlannerDto.Patch patchDto) {

        plannerService.update(accessToken, plannerId, patchDto);
    }
}
