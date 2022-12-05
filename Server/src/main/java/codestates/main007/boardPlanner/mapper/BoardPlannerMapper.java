package codestates.main007.boardPlanner.mapper;

import codestates.main007.boardPlanner.dto.BoardPlannerDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardPlannerMapper {
    default List<Integer> DtoToMap(BoardPlannerDto.PriorityPatch priorityPatchDto){
        List<Integer> priorities = priorityPatchDto.getPriorities();
        return priorities;
    }
}
