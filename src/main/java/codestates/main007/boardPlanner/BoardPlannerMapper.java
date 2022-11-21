package codestates.main007.boardPlanner;

import org.mapstruct.Mapper;

import java.util.Map;

@Mapper(componentModel = "spring")
public interface BoardPlannerMapper {
    default Map<Long,Integer> DtoToMap(BoardPlannerDto.PriorityPatch priorityPatchDto){
        Map<Long,Integer> map = priorityPatchDto.getPriorities();
        return map;
    }
}
