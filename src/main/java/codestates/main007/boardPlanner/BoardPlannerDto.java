package codestates.main007.boardPlanner;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Map;

public class BoardPlannerDto {
    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PriorityPatch {
        private Map<Long, Integer> priorities;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PriorityResponse {
        private Map<Long, Integer> priorities;
    }
}
