package codestates.main007.member;


import codestates.main007.auth.util.CustomAuthorityUtils;
import codestates.main007.exception.BusinessLogicException;
import codestates.main007.exception.ExceptionCode;
import codestates.main007.board.Board;
import codestates.main007.board.BoardRepository;
import codestates.main007.comments.Comment;
import codestates.main007.comments.CommentRepository;
import codestates.main007.member.query.MemberScore;
import codestates.main007.member.query.MemberStation;
import codestates.main007.service.RandomAvatarService;
import codestates.main007.service.RandomNamingService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.Optional;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final RandomNamingService namingService;
    private final RandomAvatarService avatarService;


    public Member save(MemberDto.Signup signupDto){
        verifyExistEmail(signupDto.getEmail());
        String encryptedPassword = passwordEncoder.encode(signupDto.getPassword());
        List<String> roles = authorityUtils.createRoles(signupDto.getEmail());

        Member createdMember = Member.builder()
                .email(signupDto.getEmail())
                .name(namingService.genName())
                .avatar(avatarService.genAvatar())
                .password(encryptedPassword)
                .roles(roles)
                .build();

        return memberRepository.save(createdMember);
    }

    public void update(String accessToken, MemberDto.Patch patchDto) {
        Member member = findByAccessToken(accessToken);
        member.patchMember(patchDto.getName(), patchDto.getAvatar(), patchDto.getPassword());
        memberRepository.save(member);
    }

    public Member find(long memberId) {
        return memberRepository.findById(memberId)
                .orElseThrow(() -> new NullPointerException("해당 멤버가 존재하지 않습니다."));
    }


    private void verifyExistEmail(String email){
        Optional<Member> member = memberRepository.findByEmail(email);
        if(member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    public Member findByAccessToken(String accessToken) {
        //todo: 액세스 토큰을 이용하여 멤버 찾는 로직

        //임시 리턴값
        return find(1);
    }

    public void verifyPassword(String accessToken, String password) {
        // todo: 패스워드 검증 로직 작성 (틀릴 경우 에러)
    }

    public List<Board> findMyPage(String accessToken) {
        Member member = findByAccessToken(accessToken);

        return boardRepository.findByWriter(member);
    }

    public List<Board> findMyPageByStation(String accessToken, long stationId) {
        Member member = findByAccessToken(accessToken);

        return boardRepository.findByWriterAndStationId(member, stationId);
    }

    public List<Comment> findMyComments(String accessToken) {
        Member member = findByAccessToken(accessToken);

        return commentRepository.findByWriter(member);
    }

    public int findMyScore(Member member) {
        int totalScore = 0;

        List<MemberScore> scores = boardRepository.findScoreByWriter(member);
        for (MemberScore s : scores) {
            totalScore += s.getScore();
        }
        return totalScore;
    }

    public List<Long> findMyStations(Member member) {
        List<Long> myStations = new ArrayList<>();

        List<MemberStation> stations = boardRepository.findStationIdByWriter(member);
        for (MemberStation ms : stations) {
            if (!myStations.contains(ms.getStationId())) {
                myStations.add(ms.getStationId());
            }
        }
        return myStations;
    }
}
