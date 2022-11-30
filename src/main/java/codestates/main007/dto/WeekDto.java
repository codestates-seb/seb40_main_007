package codestates.main007.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.ArrayList;

@Getter
@Builder
public class WeekDto {
    private ArrayList<String> thisWeek;
}
