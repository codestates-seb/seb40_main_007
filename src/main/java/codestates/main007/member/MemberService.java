package codestates.main007.member;


import codestates.main007.auth.jwt.JwtTokenizer;
import codestates.main007.auth.util.CustomAuthorityUtils;
import codestates.main007.boardMember.BoardMember;
import codestates.main007.boardMember.BoardMemberRepository;
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
import codestates.main007.service.RandomPasswordService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    private final BoardMemberRepository boardMemberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final RandomNamingService namingService;
    private final RandomAvatarService avatarService;
    private final RandomPasswordService randomPasswordService;
    private final JwtTokenizer jwtTokenizer;

    public Member save(MemberDto.Signup signupDto) {
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
        member.patchMember(patchDto.getName(), patchDto.getAvatar(), patchDto.getPassword(), passwordEncoder);
        memberRepository.save(member);
    }

    public Member find(long memberId) {
        return memberRepository.findById(memberId)
                .orElseThrow(() -> new NullPointerException("해당 멤버가 존재하지 않습니다."));
    }

    public Member findByEmail(String email) {
        return memberRepository.findByEmail(email)
                .orElseThrow(() -> new NullPointerException("해당 멤버가 존재하지 않습니다."));
    }


    private void verifyExistEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    public Member findByAccessToken(String accessToken) {
        // todo: 정식 리턴 값
//        long userId = jwtTokenizer.getUserId(accessToken);
        //return find(userId);

        // 임시 리턴값
        return find(1);
    }

    public String findPassword(String email) {
        Member member = findByEmail(email);

        String password = randomPasswordService.genPassword();

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

    public List<Board> findMyMap(String accessToken) {
        Member member = findByAccessToken(accessToken);

        return boardRepository.findByWriter(member);
    }

    public List<Board> findMyMapByStation(String accessToken, long stationId) {
        Member member = findByAccessToken(accessToken);

        return boardRepository.findByWriterAndStationId(member,stationId);
    }


    public Page<Board> findMyPage(String accessToken, int page, int size, Sort sort) {
        Member member = findByAccessToken(accessToken);

        return boardRepository.findByWriter(member,
                PageRequest.of(page, size, sort));
    }

    public Page<Board> findMyPageByStation(String accessToken, long stationId, int page, int size, Sort sort) {
        Member member = findByAccessToken(accessToken);

        return boardRepository.findByStationIdAndWriter(stationId, member,
                PageRequest.of(page, size, sort));
    }

    public Page<Comment> findMyComments(String accessToken, int page, int size, Sort sort) {
        Member member = findByAccessToken(accessToken);

        return commentRepository.findByWriter(member, PageRequest.of(page, size, sort));
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

    public Page<Board> findMyDibsByStation(String accessToken, long stationId, int page, int size, Sort sort) {
        Member member = findByAccessToken(accessToken);
        List<BoardMember> boardMembers = boardMemberRepository.findByMemberAndDibsTrue(member);
        List<Long> boardIds = new ArrayList<>();

        for (BoardMember boardMember : boardMembers) {
            Board board = boardMember.getBoard();
            if (board.getStationId() == stationId) {
                boardIds.add(board.getBoardId());
            }
        }

        return boardRepository.findAllByBoardIdIn(boardIds,
                PageRequest.of(page, size, sort));
    }

    public Page<Board> findMyDibs(String accessToken, int page, int size, Sort sort) {
        Member member = findByAccessToken(accessToken);
        List<BoardMember> boardMembers = boardMemberRepository.findByMemberAndDibsTrue(member);
        List<Long> boardIds = new ArrayList<>();

        for (BoardMember boardMember : boardMembers) {
            Board board = boardMember.getBoard();
            boardIds.add(board.getBoardId());
        }

        return boardRepository.findAllByBoardIdIn(boardIds,
                PageRequest.of(page, size, sort));
    }

    public void deleteMember(String accessToken, String password){
        verifyPassword(accessToken, password);
        Member member = findByAccessToken(accessToken);

        memberRepository.delete(member);
    }
}
