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
        List<String> first = Arrays.asList("고독한", "마스터", "멋진", "아름다운", "발랄한", "즐거운", "부유한");
        List<String> last = Arrays.asList("여행가", "탐험가", "방랑자", "정복자", "대식가", "미식가", "빈털털이");
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
