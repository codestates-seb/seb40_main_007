package codestates.main007.member.service;


import codestates.main007.auth.jwt.JwtTokenizer;
import codestates.main007.auth.util.CustomAuthorityUtils;
import codestates.main007.board.dto.BoardDto;
import codestates.main007.board.entity.Board;
import codestates.main007.board.repository.BoardRepository;
import codestates.main007.boardImage.service.ImageHandler;
import codestates.main007.boardMember.entity.BoardMember;
import codestates.main007.boardMember.repository.BoardMemberRepository;
import codestates.main007.boardNotice.entity.BoardNotice;
import codestates.main007.boardNotice.repository.BoardNoticeRepository;
import codestates.main007.comment.entity.Comment;
import codestates.main007.comment.repository.CommentRepository;
import codestates.main007.exception.ExceptionCode;
import codestates.main007.member.dto.MemberDto;
import codestates.main007.member.entity.Member;
import codestates.main007.member.query.MemberScore;
import codestates.main007.member.query.MemberStation;
import codestates.main007.member.repository.MemberRepository;
import codestates.main007.service.RandomAvatarService;
import codestates.main007.service.RandomNamingService;
import codestates.main007.service.RandomPasswordService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.*;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    private final BoardMemberRepository boardMemberRepository;
    private final BoardNoticeRepository boardNoticeRepository;
    private final CustomAuthorityUtils authorityUtils;
    private final RandomNamingService namingService;
    private final RandomAvatarService avatarService;
    private final RandomPasswordService randomPasswordService;
    private final ImageHandler imageHandler;
    private final JwtTokenizer jwtTokenizer;

    public Member save(MemberDto.Signup signupDto) {
        verifyExistEmail(signupDto.getEmail());
        String encryptedPassword = passwordEncoder().encode(signupDto.getPassword());
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

    public Member saveOAuthMember(String name, String email, String avatar) {
        Member oAuthMember = Member.builder()
                .name(name)
                .email(email)
                .avatar(avatar)
                .build();
        return memberRepository.save(oAuthMember);
    }

    public void update(String accessToken, MemberDto.Patch patchDto) {
        Member member = findByAccessToken(accessToken);
        if (memberRepository.countByName(patchDto.getName()) != 0) {
            throw new ResponseStatusException(ExceptionCode.MEMBER_EXISTS.getStatus(), ExceptionCode.MEMBER_EXISTS.getMessage(), new IllegalArgumentException());
        }
        member.patchMember(patchDto.getName(), patchDto.getPassword(), passwordEncoder());
        memberRepository.save(member);
    }

    public void updateAvatar(String accessToken, MultipartFile image) throws IOException {
        Member member = findByAccessToken(accessToken);
        String avatarUrl = imageHandler.updateAvatar(image, member);

        member.patchAvatar(avatarUrl);

        memberRepository.save(member);
    }



    public void saveRefreshToken(long memberId, String refreshToken) {
        Member member = find(memberId);
        member.patchRefreshToken(refreshToken);
        memberRepository.save(member);
    }

    public void deleteRefreshToken(String accessToken){
        Member member = findByAccessToken(accessToken);
        member.patchRefreshToken(null);
        memberRepository.save(member);
    }

    public Member find(long memberId) {
        return memberRepository.findById(memberId)
                .orElseThrow(() -> new ResponseStatusException(ExceptionCode.MEMBER_NOT_FOUND.getStatus(), ExceptionCode.MEMBER_NOT_FOUND.getMessage(), new IllegalArgumentException()));
    }

    public Member findByEmail(String email) {
        return memberRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(ExceptionCode.MEMBER_NOT_FOUND.getStatus(), ExceptionCode.MEMBER_NOT_FOUND.getMessage(), new IllegalArgumentException()));
    }

    public int countByName(String name) {
        return memberRepository.countByName(name);
    }

    public int countByEmail(String email) {
        return memberRepository.countByEmail(email);
    }


    private void verifyExistEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new ResponseStatusException(ExceptionCode.MEMBER_EXISTS.getStatus(), ExceptionCode.MEMBER_EXISTS.getMessage(), new IllegalArgumentException());
    }

    public Member findByAccessToken(String accessToken) {
        long memberId = jwtTokenizer.getUserId(accessToken);
        return find(memberId);
    }

    public String findPassword(String email) {
        Member member = findByEmail(email);

        String password = randomPasswordService.genPassword();

        member.resetPassword(passwordEncoder().encode(password));
        memberRepository.save(member);

        return password;
    }

    @SneakyThrows
    public void verifyPassword(String accessToken, String password) {
        Member member = findByAccessToken(accessToken);

        if (!passwordEncoder().matches(password, member.getPassword())) {
            throw new ResponseStatusException(ExceptionCode.MEMBER_UNAUTHORIZED.getStatus(), ExceptionCode.MEMBER_UNAUTHORIZED.getMessage(), new IllegalArgumentException());
        }
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

    public List<Board> findMyDibsByStation(String accessToken, long stationId) {
        Member member = findByAccessToken(accessToken);
        List<BoardMember> boardMembers = boardMemberRepository.findByMemberAndDibsTrue(member);
        List<Long> boardIds = new ArrayList<>();

        for (BoardMember boardMember : boardMembers) {
            Board board = boardMember.getBoard();
            if (board.getStationId() == stationId) {
                boardIds.add(board.getBoardId());
            }
        }

        return boardRepository.findAllByBoardIdIn(boardIds);
    }

    public List<Board> findMyDibs(String accessToken) {
        Member member = findByAccessToken(accessToken);
        List<BoardMember> boardMembers = boardMemberRepository.findByMemberAndDibsTrue(member);
        List<Long> boardIds = new ArrayList<>();

        for (BoardMember boardMember : boardMembers) {
            Board board = boardMember.getBoard();
            boardIds.add(board.getBoardId());
        }

        return boardRepository.findAllByBoardIdIn(boardIds);
    }

    public List<MemberDto.Notice> findMyNotice(String accessToken){
        Member member = findByAccessToken(accessToken);
        List<BoardNotice> boardNotices = boardNoticeRepository.findByMemberId(member.getMemberId());
        List<MemberDto.Notice> notices = new ArrayList<>();
        for (BoardNotice boardNotice : boardNotices){
            MemberDto.Notice notice = MemberDto.Notice.builder()
                    .senderName(boardNotice.getSender().getName())
                    .boardId(boardNotice.getBoard().getBoardId())
                    .notice(boardNotice.getNotice())
                    .build();

            notices.add(notice);
        }
        return notices;
    }

    public List<MemberDto.MyPage> setIsDibsToMyPage(String accessToken, List<MemberDto.MyPage> memberDtos) {
        Member member = findByAccessToken(accessToken);
        for (MemberDto.MyPage myPage : memberDtos) {
            Board board = boardRepository.findById(myPage.getBoardId()).get();
            boolean isDibs = false;
            Optional<BoardMember> boardMember = boardMemberRepository.findByMemberAndBoard(member, board);
            if (boardMember.isPresent()) {
                isDibs = boardMember.get().isDibs();
            }
            myPage.setDibs(isDibs);
        }
        return memberDtos;
    }

    public void deleteMember(String accessToken) {
        Member member = findByAccessToken(accessToken);

        memberRepository.delete(member);
    }
    public void dropMember(String accessToken, long memberId) {
        if (memberId<=5 && memberId>0){
            throw new ResponseStatusException(ExceptionCode.ADMIN_ACCOUNT.getStatus(), ExceptionCode.ADMIN_ACCOUNT.getMessage(), new IllegalArgumentException());
        }
        Member member = findByAccessToken(accessToken);
        if (member.getMemberId() != 1 && member.getMemberId() != 2 && member.getMemberId() != 3 && member.getMemberId() != 4 && member.getMemberId() != 5) {
            throw new ResponseStatusException(ExceptionCode.MEMBER_UNAUTHORIZED.getStatus(), ExceptionCode.MEMBER_UNAUTHORIZED.getMessage(), new IllegalArgumentException());
        }
        Member dropMember = find(memberId);

        memberRepository.delete(dropMember);
    }

    public List<Member> findAllMembers() {
        return memberRepository.findAll();
    }

    public void verifyAdmin(String accessToken) {
        Member member = findByAccessToken(accessToken);
        if (member.getMemberId() != 1 && member.getMemberId() != 2 && member.getMemberId() != 3 && member.getMemberId() != 4 && member.getMemberId() != 5) {
            throw new ResponseStatusException(ExceptionCode.MEMBER_UNAUTHORIZED.getStatus(), ExceptionCode.MEMBER_UNAUTHORIZED.getMessage(), new IllegalArgumentException());
        }
    }

    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
    public Member findVerifiedMember(String refreshToken) {
        Optional<Member> optionalMember =
                memberRepository.findByRefreshToken(refreshToken);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new ResponseStatusException(ExceptionCode.MEMBER_NOT_FOUND.getStatus(), ExceptionCode.MEMBER_NOT_FOUND.getMessage(), new IllegalArgumentException()));
        return findMember;
    }

    public String reissueAccessToken(String refreshToken){
        refreshToken = refreshToken.replace("Bearer ", "");
        Member member = findVerifiedMember(refreshToken);
        String accessToken = delegateAccessToken(member);
        return "Bearer "+ accessToken;
    }

    private String delegateAccessToken(Member member) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", member.getEmail());
        claims.put("memberId", member.getMemberId());
        claims.put("roles", member.getRoles());

        String subject = member.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }
}
