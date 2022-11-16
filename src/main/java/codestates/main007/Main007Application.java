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
				new Tag("가성비"),
				new Tag("분위기굿"),
				new Tag("미슐랭급"),
				new Tag("아늑함"),
				new Tag("넓은"),
				new Tag("수영장"),
				new Tag("뷰맛집"),
				new Tag("셀카존"),
				new Tag("무료체험"),
				new Tag("가족체험")
		);
		for (Tag tag : tags){
			if (tagRepository.findByTagString(tag.getTagString()).isEmpty()){
				tagRepository.save(tag);
			}
		}
	}

}
