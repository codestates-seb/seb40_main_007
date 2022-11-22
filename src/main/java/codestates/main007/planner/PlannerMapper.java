package codestates.main007.planner;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PlannerMapper {
    Planner inputDtoToentity(PlannerDto.Input inputDto);
}
