package codestates.main007.dto;

import lombok.Getter;

@Getter
public class SingleResponseDto<T> {
    private final T items;
    public SingleResponseDto(T items) {
        this.items = items;
    }

    public static <T> SingleResponseDto<T> of(T items) {
        return new SingleResponseDto<>(items);
    }


}
