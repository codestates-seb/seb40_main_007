package codestates.main007;

import codestates.main007.tag.entity.Tag;
import codestates.main007.tag.repository.TagRepository;
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
				new Tag(1,"한식"),
				new Tag(2,"중식"),
				new Tag(3,"양식"),
				new Tag(4,"일식"),
				new Tag(5,"분식"),
				new Tag(6,"디저트"),
				new Tag(7,"호텔"),
				new Tag(8,"모텔"),
				new Tag(9,"펜션"),
				new Tag(10,"캠핑"),
				new Tag(11,"게하"),
				new Tag(12,"자연"),
				new Tag(13,"문화"),
				new Tag(14,"유적"),
				new Tag(15,"공연"),
				new Tag(16,"놀거리"),
//				new Tag(17,"디테일임시2"),
//				new Tag(18,"디테일임시3"),
//				new Tag(19,"디테일임시4"),
//				new Tag(20,"디테일임시5"),
				new Tag(21,"무료"),
				new Tag(22,"만원 이하"),
				new Tag(23,"2만원 이하"),
				new Tag(24,"3만원 이하"),
				new Tag(25,"4만원 이하"),
				new Tag(26,"5만원 이하"),
				new Tag(27,"5만원 초과"),
				new Tag(28,"10만원 이하"),
				new Tag(29,"15만원 이하"),
				new Tag(30,"20만원 이하"),
				new Tag(31,"20만원 초과"),
//				new Tag(32,"10만원 초과"),
//				new Tag(33,"10만원 초과 15만원 이하"),
//				new Tag(34,"15만원 초과 20만원 이하"),
//				new Tag(35,"20만원 초과"),
//				new Tag(36,"가격대 임시1"),
//				new Tag(37,"가격대 임시2"),
//				new Tag(38,"가격대 임시3"),
//				new Tag(39,"가격대 임시4"),
//				new Tag(40,"가격대 임시5"),
				new Tag(41,"아늑한"),
				new Tag(42,"활기찬"),
				new Tag(43,"정겨운"),
				new Tag(44,"깔끔한"),
				new Tag(45,"뷰가 좋은")
//				new Tag(46,"분위기임시1"),
//				new Tag(47,"분위기임시2"),
//				new Tag(48,"분위기임시3"),
//				new Tag(49,"분위기임시4"),
//				new Tag(50,"분위기임시5")
		);
		for (Tag tag : tags){
			if (tagRepository.findByTagName(tag.getTagName()).isEmpty()){
				tagRepository.save(tag);
			}
		}
	}

}
