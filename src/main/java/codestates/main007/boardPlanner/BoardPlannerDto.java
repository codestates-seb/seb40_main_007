package codestates.main007.boardPlanner;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

public class BoardPlannerDto {
    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PriorityPatch {
        private List<Integer> priorities;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PriorityResponse {
        private List<Integer> priorities;
    }
}
