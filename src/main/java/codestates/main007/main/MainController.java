package codestates.main007.main;

import codestates.main007.tag.Tag;
import codestates.main007.tag.TagDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class MainController {
    @GetMapping("/{station-id}/{category-id}")
    public ResponseEntity getMainPage(@PathVariable("station-id") long stationId,
                                      @PathVariable("category-id") long categoryId,
                                      @RequestHeader String authorization) {
        MainMockUpDto.Response dto = MainMockUpDto.Response.builder()
                .boardId(1)
                .title("title")
                .review("review")
                .star(4.5)
                .dibs(true)
                .tags(List.of(new TagDto.Response(new Tag(1, "한식"))))
                .thumbNail("s3.thumbnail.com")
                .timeFromStation(5)
                .latitude(100.1010101)
                .longitude(100.1010101)
                .build();
        MainMockUpDto.MultiResponse response = MainMockUpDto.MultiResponse.
                builder().items(List.of(dto)).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{station-id}/{category-id}/score")
    public ResponseEntity getMainPageSortByScore(@PathVariable("station-id") long stationId,
                                                 @PathVariable("category-id") long categoryId,
                                                 @RequestHeader String authorization) {
        MainMockUpDto.Response dto = MainMockUpDto.Response.builder()
                .boardId(1)
                .title("title")
                .review("review")
                .star(4.5)
                .dibs(true)
                .tags(List.of(new TagDto.Response(new Tag(1, "한식"))))
                .thumbNail("s3.thumbnail.com")
                .timeFromStation(5)
                .latitude(100.1010101)
                .longitude(100.1010101)
                .build();

        MainMockUpDto.MultiResponse response = MainMockUpDto.MultiResponse.
                builder().items(List.of(dto)).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{station-id}/{category-id}/date")
    public ResponseEntity getMainPageSortByDate(@PathVariable("station-id") long stationId,
                                                @PathVariable("category-id") long categoryId,
                                                @RequestHeader String authorization) {
        MainMockUpDto.Response dto = MainMockUpDto.Response.builder()
                .boardId(1)
                .title("title")
                .review("review")
                .star(4.5)
                .dibs(true)
                .tags(List.of(new TagDto.Response(new Tag(1, "한식"))))
                .thumbNail("s3.thumbnail.com")
                .timeFromStation(5)
                .latitude(100.1010101)
                .longitude(100.1010101)
                .build();

        MainMockUpDto.MultiResponse response = MainMockUpDto.MultiResponse.
                builder().items(List.of(dto)).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{station-id}/{category-id}/distance")
    public ResponseEntity getMainPageSortByDistance(@PathVariable("station-id") long stationId,
                                                    @PathVariable("category-id") long categoryId,
                                                    @RequestHeader String authorization) {
        MainMockUpDto.Response dto = MainMockUpDto.Response.builder()
                .boardId(1)
                .title("title")
                .review("review")
                .star(4.5)
                .dibs(true)
                .tags(List.of(new TagDto.Response(new Tag(1, "한식"))))
                .thumbNail("s3.thumbnail.com")
                .timeFromStation(5)
                .latitude(100.1010101)
                .longitude(100.1010101)
                .build();

        MainMockUpDto.MultiResponse response = MainMockUpDto.MultiResponse.
                builder().items(List.of(dto)).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{station-id}/{category-id}/search")
    public ResponseEntity getMainPageSortByDistance(@PathVariable("station-id") long stationId,
                                                    @PathVariable("category-id") long categoryId,
                                                    @RequestHeader String authorization,
                                                    @RequestParam("tag") String tagString) {

        MainMockUpDto.Response dto = MainMockUpDto.Response.builder()
                .boardId(1)
                .title("title")
                .review("review")
                .star(4.5)
                .dibs(true)
                .tags(List.of(new TagDto.Response(new Tag(1, "한식")),new TagDto.Response(new Tag(2, "맛집")),new TagDto.Response(new Tag(3, "아늑한 분위기"))))
                .thumbNail("s3.thumbnail.com")
                .timeFromStation(5)
                .latitude(100.1010101)
                .longitude(100.1010101)
                .build();

        MainMockUpDto.MultiResponse response = MainMockUpDto.MultiResponse.
                builder().items(List.of(dto)).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
