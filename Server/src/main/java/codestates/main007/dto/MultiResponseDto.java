package codestates.main007.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private final List<T> items;

    public MultiResponseDto(List<T> items) {
        this.items = items;
    }

    public static <T> MultiResponseDto<T> of(List<T> items) {
        return new MultiResponseDto<>(items);
    }
}
