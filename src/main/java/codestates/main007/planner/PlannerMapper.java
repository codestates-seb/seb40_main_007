package codestates.main007.planner;

import codestates.main007.board.Board;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PlannerMapper {
    PlannerDto.Board entityToResponseDto(Board board);
}
