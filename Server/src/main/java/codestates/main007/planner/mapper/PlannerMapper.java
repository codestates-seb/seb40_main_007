package codestates.main007.planner.mapper;

import codestates.main007.planner.dto.PlannerDto;
import codestates.main007.planner.entity.Planner;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PlannerMapper {
    Planner inputDtoToentity(PlannerDto.Input inputDto);

    List<PlannerDto.MyPlannersResponse> entityListToResponseDtoList(List<Planner> planners);
}
