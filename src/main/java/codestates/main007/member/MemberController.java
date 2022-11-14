package codestates.main007.member;

import codestates.main007.board.Board;
import codestates.main007.board.BoardRepository;
import codestates.main007.comments.Comment;
import codestates.main007.comments.CommentRepository;
import codestates.main007.dto.MultiResponseDto;
import codestates.main007.dto.PageDto;
import codestates.main007.service.EmailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    private final MemberService memberService;
    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    private final MemberMapper memberMapper;
    private final EmailService emailService;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public void postMember(@RequestBody MemberDto.Signup signupDto) {

        memberService.save(signupDto);
    }

    @GetMapping("/verification")
    @ResponseStatus(HttpStatus.OK)
    public void checkPassword(@RequestHeader(name = "Authorization") String accessToken,
                              @RequestHeader(name = "Password") String password) {
        memberService.verifyPassword(accessToken, password);
    }

    @PostMapping("/find-password")
    @ResponseStatus(HttpStatus.OK)
    public void findPassword(@RequestBody MemberDto.Email email) {
        String password = memberService.findPassword(email.getAddress());

        emailService.findPassword(email.getAddress(), password);

        log.info("이메일 전송이 완료되었습니다.");
    }

    @GetMapping("/my-page/{station-id}")
    @ResponseStatus(HttpStatus.OK)
    public PageDto getMyPage(@RequestHeader(name = "Authorization") String accessToken,
                             @PathVariable("station-id") long stationId,
                             @RequestParam int page,
                             @RequestParam int size) {
        Page<Board> boardPage = memberService.findMyPageByStation(accessToken, stationId, page - 1, size, Sort.by("boardId").descending());
        if (stationId == 0) {
            boardPage = memberService.findMyPage(accessToken, page - 1, size, Sort.by("boardId").descending());
        }
        List<Board> boards = boardPage.getContent();

        return new PageDto(memberMapper.boardsToMyPages(boards), boardPage);
    }

    @GetMapping("/my-page/comments")
    @ResponseStatus(HttpStatus.OK)
    public PageDto getMyComments(@RequestHeader(name = "Authorization") String accessToken,
                                          @RequestParam int page,
                                          @RequestParam int size) {
        Page<Comment> commentPage = memberService.findMyComments(accessToken, page-1, size, Sort.by("commentId").descending());
        List<Comment> comments = commentPage.getContent();

        return new PageDto(memberMapper.commentsToMyComments(comments),commentPage);
    }

    @GetMapping("/my-page/map")
    @ResponseStatus(HttpStatus.OK)
    public MultiResponseDto getMyMap(@RequestHeader(name = "Authorization") String accessToken) {
        List<Board> boards = memberService.findMyMap(accessToken);
        List<MemberDto.MyMap> myMaps = memberMapper.boardsToMyMaps(boards);

        return new MultiResponseDto<>(myMaps);
    }

    @GetMapping("/info")
    @ResponseStatus(HttpStatus.OK)
    public MemberDto.Info getMyInfo(@RequestHeader(name = "Authorization") String accessToken) {
        Member member = memberService.findByAccessToken(accessToken);

        int totalBoard = boardRepository.countByWriter(member);
        int totalComment = commentRepository.countByWriter(member);
        int score = memberService.findMyScore(member);
        List<Long> myStations = memberService.findMyStations(member);

        MemberDto.Info myInfo = MemberDto.Info.builder()
                .totalBoard(totalBoard)
                .totalComment(totalComment)
                .score(score)
                .visitedStations(myStations)
                .build();

        return myInfo;
    }

    @PatchMapping
    @ResponseStatus(HttpStatus.OK)
    public void patchMyInfo(@RequestHeader(name = "Authorization") String accessToken,
                            @RequestBody MemberDto.Patch patchDto) {

        memberService.update(accessToken, patchDto);
    }
}
