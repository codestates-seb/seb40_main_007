package codestates.main007.member;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public void save(Member member) {
        this.memberRepository.save(member);
    }

    public void update(long memberId, MemberDto.Patch patchDto) {
        Member member = find(memberId);
        member.patchMember(patchDto.getName(), patchDto.getAvatar(), patchDto.getPassword());
        this.memberRepository.save(member);
    }

    public Member find(long memberId) {
        return this.memberRepository.findById(memberId)
                .orElseThrow(() -> new NullPointerException("해당 멤버가 존재하지 않습니다."));
    }

    public void verifyPassword(String accessToken,String password){
        // todo: 패스워드 검증 로직 작성
    }

    public void  sendPassword(String email){
        //todo: 이메일로 패스워드 보내주는 로직 작성
    }
}
