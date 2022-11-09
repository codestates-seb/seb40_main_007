package com.main007.ygy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class YgyApplication {

	public static void main(String[] args) {
		SpringApplication.run(YgyApplication.class, args);
	}

}
