package codestates.main007.tag.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class TagDto {
    String tagName;

    @Getter
    @Builder
    public static class Response {
        private long detailTag;
        private List<Long> moodTag;
        private long priceTag;
    }
}


