package codestates.main007.boardPlanner;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardPlannerMapper {
    default List<Integer> DtoToMap(BoardPlannerDto.PriorityPatch priorityPatchDto){
        List<Integer> priorities = priorityPatchDto.getPriorities();
        return priorities;
    }
}
