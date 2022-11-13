package codestates.main007;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class Main007Application {

	public static void main(String[] args) {
		SpringApplication.run(Main007Application.class, args);
	}

}
