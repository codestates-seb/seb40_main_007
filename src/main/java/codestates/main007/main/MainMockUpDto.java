package codestates.main007.main;

import codestates.main007.tag.TagDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

public class MainMockUpDto {
    @Builder
    @Getter
    public static class Response{
        private long boardId;
        private String title;
        private String review;
        private double star;
        private String thumbNail;
        private int timeFromStation;
        private boolean dibs;
        private List<TagDto.Response> tags;
        private double latitude;
        private double longitude;
    }

    @Builder
    @Getter
    public static class MultiResponse<T>{
        List<T> items;
    }
}
