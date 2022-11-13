package codestates.main007.member;


import codestates.main007.auth.jwt.JwtTokenizer;
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
import lombok.SneakyThrows;
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
    private final JwtTokenizer jwtTokenizer;


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

    public Member findByEmail(String email){
        return memberRepository.findByEmail(email)
                .orElseThrow(() -> new NullPointerException("해당 멤버가 존재하지 않습니다."));
    }


    private void verifyExistEmail(String email){
        Optional<Member> member = memberRepository.findByEmail(email);
        if(member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    public Member findByAccessToken(String accessToken) {
        // todo: 정식 리턴 값
//        long userId = jwtTokenizer.getUserId(accessToken);
        //return find(userId);

        // 임시 리턴값
        return find(4);
    }

    public String findPassword(String email){
        Member member = findByEmail(email);

        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();

        String password = random.ints(leftLimit,rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        member.resetPassword(passwordEncoder.encode(password));
        memberRepository.save(member);

        return password;
    }

    @SneakyThrows
    public void verifyPassword(String accessToken, String password) {
        Member member = findByAccessToken(accessToken);

        if (!passwordEncoder.matches(password, member.getPassword())) {
            throw new Exception("비밀번호가 다릅니다.");
        }
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
