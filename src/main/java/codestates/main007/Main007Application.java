package codestates.main007;

import codestates.main007.tag.Tag;
import codestates.main007.tag.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@RequiredArgsConstructor
@EnableAsync
public class Main007Application implements CommandLineRunner {
	private final TagRepository tagRepository;
	public static void main(String[] args) {
		SpringApplication.run(Main007Application.class, args);
	}

	@Override
	public void run(String[] args){
		final List<Tag> tags = Arrays.asList(
				new Tag("한식"),
				new Tag("중식"),
				new Tag("양식"),
				new Tag("일식"),
				new Tag("분식"),
				new Tag("디저트"),
				new Tag("호텔"),
				new Tag("모텔"),
				new Tag("펜션"),
				new Tag("캠핑"),
				new Tag("자연"),
				new Tag("문화"),
				new Tag("유적"),
				new Tag("공연"),
				new Tag("놀거리"),
				new Tag("디테일임시1"),
				new Tag("디테일임시2"),
				new Tag("디테일임시3"),
				new Tag("디테일임시4"),
				new Tag("디테일임시5"),
				new Tag("무료"),
				new Tag("만원 이하"),
				new Tag("만원 초과 2만원 이하"),
				new Tag("만원 초과 3만원 이하"),
				new Tag("2만원 초과 3만원 이하"),
				new Tag("3만원 초과 4만원 이하"),
				new Tag("3만원 초과 5만원 이하"),
				new Tag("4만원 초과 5만원 이하"),
				new Tag("5만원 이하"),
				new Tag("5만원 초과"),
				new Tag("5만원 초과 10만원 이하"),
				new Tag("10만원 초과"),
				new Tag("10만원 초과 15만원 이하"),
				new Tag("15만원 초과 20만원 이하"),
				new Tag("20만원 초과"),
				new Tag("가격대 임시1"),
				new Tag("가격대 임시2"),
				new Tag("가격대 임시3"),
				new Tag("가격대 임시4"),
				new Tag("가격대 임시5"),
				new Tag("아늑한"),
				new Tag("활기찬"),
				new Tag("정겨운"),
				new Tag("깔끔한"),
				new Tag("뷰가 좋은"),
				new Tag("분위기임시1"),
				new Tag("분위기임시2"),
				new Tag("분위기임시3"),
				new Tag("분위기임시4"),
				new Tag("분위기임시5")
		);
		for (Tag tag : tags){
			if (tagRepository.findByTagName(tag.getTagName()).isEmpty()){
				tagRepository.save(tag);
			}
		}
	}

}
