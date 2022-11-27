package codestates.main007.planner;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PlannerMapper {
    Planner inputDtoToentity(PlannerDto.Input inputDto);
    List<PlannerDto.MyPlannersResponse> entityListToResponseDtoList(List<Planner> planners);
    PlannerDto.MyPlannersResponse entityToResponseDto(Planner planner);
}
