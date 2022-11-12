package codestates.main007.member;

import codestates.main007.auth.util.CustomAuthorityUtils;
import codestates.main007.exception.BusinessLogicException;
import codestates.main007.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public Member saveMember(Member member){
        verifyExistEmail(member.getEmail());
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        List<String> roles = authorityUtils.createRoles(member.getEmail());

        Member createdMember = Member.builder()
                .password(encryptedPassword)
                .roles(roles)
                .build();

        return memberRepository.save(createdMember);
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

    private void verifyExistEmail(String email){
        Optional<Member> member = memberRepository.findByEmail(email);
        if(member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}
