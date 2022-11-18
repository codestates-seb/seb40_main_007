package codestates.main007.tag;

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
        private String detailTag;
        private List<String> moodTag;
        private String priceTag;
    }
}


