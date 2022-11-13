package codestates.main007.service;

import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RandomNamingService {
    private String firstName;
    private String lastName;
    private int number;

    public String genName() {
        List<String> first = Arrays.asList("민트", "아보카도", "통후추", "간장", "레몬");
        List<String> last = Arrays.asList("볶음밥", "김치찜", "비빔면", "감자칩", "초콜릿");
        Collections.shuffle(first);
        Collections.shuffle(last);

        this.firstName = first.get(0);
        this.lastName = last.get(0);
        this.number = 1;

        for (int i = 0; i < 10; i++) {
            String newName = firstName + " " + lastName + " " + number;
            // todo: 레퍼지토리에 해당 네임이 있으면
//            while (memberRepository.findByName(newName)) {
//                newName = countUp();
//            }
        }

        return firstName + " " + lastName + " " + number;
    }

    public String countUp() {
        this.number++;
        return firstName + " " + lastName + " " + number;
    }
}
