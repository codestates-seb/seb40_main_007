package codestates.main007.service;

import codestates.main007.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class RandomNamingService {
    private String firstName;
    private String lastName;
    private int number;

    private final MemberRepository memberRepository;

    public String genName() {
        List<String> first = Arrays.asList("민트", "아보카도", "통후추", "간장", "레몬");
        List<String> last = Arrays.asList("볶음밥", "김치찜", "비빔면", "감자칩", "초콜릿");
        Collections.shuffle(first);
        Collections.shuffle(last);

        this.firstName = first.get(0);
        this.lastName = last.get(0);
        this.number = 1;

        String newName = firstName + " " + lastName + " " + number;
        while (memberRepository.countByName(newName) != 0) {
            newName = countUp();
        }

        return newName;
    }

    public String countUp() {
        this.number++;
        return firstName + " " + lastName + " " + number;
    }
}
