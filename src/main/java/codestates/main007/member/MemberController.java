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
import org.springframework.web.multipart.MultipartFile;


import javax.mail.MessagingException;
import java.io.IOException;
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

    @GetMapping("/info")
    @ResponseStatus(HttpStatus.OK)
    public MemberDto.HeaderInfo findInfo(@RequestHeader(name = "Authorization") String accessToken) {
        MemberDto.HeaderInfo info = memberMapper.memberToHeaderInfo(memberService.findByAccessToken(accessToken));

        return info;
    }

    @PostMapping("/find-password")
    @ResponseStatus(HttpStatus.OK)
    public void findPassword(@RequestBody MemberDto.Email email) throws MessagingException {
        String password = memberService.findPassword(email.getAddress());

        emailService.findPassword(email.getAddress(), password);

        log.info("이메일 전송이 완료되었습니다.");
    }

    @GetMapping("/my-page")
    @ResponseStatus(HttpStatus.OK)
    public List<MemberDto.MyPage> getMyPage(@RequestHeader(name = "Authorization") String accessToken) {
        Member member = memberService.findByAccessToken(accessToken);
        List<Board> boards = boardRepository.findByWriter(member);

        List<MemberDto.MyPage> memberDtos = memberMapper.boardsToMyPages(boards);
        return memberService.setIsDibsToMyPage(accessToken, memberDtos);
    }

    @GetMapping("/my-page/{station-id}")
    @ResponseStatus(HttpStatus.OK)
    public List<MemberDto.MyPage> getMyPageByStation(@RequestHeader(name = "Authorization") String accessToken,
                             @PathVariable("station-id") long stationId) {
        Member member = memberService.findByAccessToken(accessToken);
        List<Board> boards = boardRepository.findByWriterAndStationId(member,stationId);

        List<MemberDto.MyPage> memberDtos = memberMapper.boardsToMyPages(boards);
        return memberService.setIsDibsToMyPage(accessToken, memberDtos);
    }

    @GetMapping("/my-page/comments")
    @ResponseStatus(HttpStatus.OK)
    public PageDto getMyComments(@RequestHeader(name = "Authorization") String accessToken,
                                 @RequestParam int page,
                                 @RequestParam int size) {
        Page<Comment> commentPage = memberService.findMyComments(accessToken, page - 1, size, Sort.by("commentId").descending());
        List<Comment> comments = commentPage.getContent();

        return new PageDto(memberMapper.commentsToMyComments(comments), commentPage);
    }

    @GetMapping("/my-page/dibs")
    @ResponseStatus(HttpStatus.OK)
    public PageDto getMyDibs(@RequestHeader(name = "Authorization") String accessToken,
                             @RequestParam int page,
                             @RequestParam int size) {
        Page<Board> boardPage = memberService.findMyDibs(accessToken, page - 1, size, Sort.by("boardId").descending());
        List<Board> boards = boardPage.getContent();

        return new PageDto(memberMapper.boardsToMyPages(boards), boardPage);
    }

    @GetMapping("/my-page/dibs/{station-id}")
    @ResponseStatus(HttpStatus.OK)
    public PageDto getMyDibsByStation(@RequestHeader(name = "Authorization") String accessToken,
                                      @PathVariable("station-id") long stationId,
                                      @RequestParam int page,
                                      @RequestParam int size) {
        Page<Board> boardPage = memberService.findMyDibsByStation(accessToken, stationId, page - 1, size, Sort.by("boardId").descending());
        List<Board> boards = boardPage.getContent();

        return new PageDto(memberMapper.boardsToMyPages(boards), boardPage);
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
                            @RequestBody MemberDto.Patch patchDto) throws IOException {

        memberService.update(accessToken, patchDto);
    }

    // 삭제된 메서드들
//    @GetMapping("/my-page/map")
//    @ResponseStatus(HttpStatus.OK)
//    public MultiResponseDto getMyMap(@RequestHeader(name = "Authorization") String accessToken) {
//        List<Board> boards = memberService.findMyMap(accessToken);
//        List<MemberDto.MyMap> myMaps = memberMapper.boardsToMyMaps(boards);
//
//        return new MultiResponseDto<>(myMaps);
//    }
//
//    @GetMapping("/my-page/{station-id}")
//    @ResponseStatus(HttpStatus.OK)
//    public PageDto getMyPage(@RequestHeader(name = "Authorization") String accessToken,
//                             @PathVariable("station-id") long stationId,
//                             @RequestParam int page,
//                             @RequestParam int size) {
//        Page<Board> boardPage = memberService.findMyPageByStation(accessToken, stationId, page - 1, size, Sort.by("boardId").descending());
//        if (stationId == 0) {
//            boardPage = memberService.findMyPage(accessToken, page - 1, size, Sort.by("boardId").descending());
//        }
//        List<Board> boards = boardPage.getContent();
//
//        return new PageDto(memberMapper.boardsToMyPages(boards), boardPage);
//    }

    @PostMapping("/avatar")
    @ResponseStatus(HttpStatus.OK)
    public void patchMyAvatar(@RequestHeader(name = "Authorization") String accessToken,
                            @RequestPart("file") MultipartFile image) throws IOException {

        memberService.updateAvatar(accessToken,image);
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void withdrawal(@RequestHeader(name = "Authorization") String accessToken,
                            @RequestBody MemberDto.Password passwordDto) {

        memberService.deleteMember(accessToken, passwordDto.getPassword());
    }
}
