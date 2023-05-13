package codestates.main007.member.controller;

import codestates.main007.board.entity.Board;
import codestates.main007.board.repository.BoardRepository;
import codestates.main007.board.service.BoardService;
import codestates.main007.boardNotice.service.BoardNoticeService;
import codestates.main007.comment.entity.Comment;
import codestates.main007.comment.repository.CommentRepository;
import codestates.main007.dto.MultiResponseDto;
import codestates.main007.dto.PageDto;
import codestates.main007.member.entity.Member;
import codestates.main007.member.dto.MemberDto;
import codestates.main007.member.mapper.MemberMapper;
import codestates.main007.member.service.MemberService;
import codestates.main007.service.EmailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    private final BoardNoticeService boardNoticeService;

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

    @GetMapping("/header")
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
        List<Board> boards = boardRepository.findByWriterAndStationId(member, stationId);

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
    public List<MemberDto.MyPage> getMyDibs(@RequestHeader(name = "Authorization") String accessToken) {
        List<Board> boards = memberService.findMyDibs(accessToken);

        List<MemberDto.MyPage> memberDtos = memberMapper.boardsToMyPages(boards);
        return memberService.setIsDibsToMyPage(accessToken, memberDtos);
    }

    @GetMapping("/my-page/dibs/{station-id}")
    @ResponseStatus(HttpStatus.OK)
    public List<MemberDto.MyPage> getMyDibsByStation(@RequestHeader(name = "Authorization") String accessToken,
                                                     @PathVariable("station-id") long stationId) {
        List<Board> boards = memberService.findMyDibsByStation(accessToken, stationId);

        List<MemberDto.MyPage> memberDtos = memberMapper.boardsToMyPages(boards);
        return memberService.setIsDibsToMyPage(accessToken, memberDtos);
    }

    @GetMapping("/info")
    @ResponseStatus(HttpStatus.OK)
    public MemberDto.Info getMyInfo(@RequestHeader(name = "Authorization") String accessToken) {

        return memberService.getMyInfo(accessToken);
    }

    @GetMapping("/notice")
    @ResponseStatus(HttpStatus.OK)
    public MultiResponseDto<MemberDto.Notice> getMyNotice(@RequestHeader(name = "Authorization") String accessToken) {

        return MultiResponseDto.of(memberService.findMyNotice(accessToken));
    }

    @DeleteMapping("/notice/{board-id}/{sender-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void getMyNoticePage(@RequestHeader(name = "Authorization") String accessToken,
                                @PathVariable("board-id") long boardId,
                                @PathVariable("sender-id") long senderId,
                                @RequestHeader(name = "Notice") String notice) {
        Member sender = memberService.find(senderId);
        boardNoticeService.delete(boardId, sender, notice);
    }

    @PatchMapping
    @ResponseStatus(HttpStatus.OK)
    public void patchMyInfo(@RequestHeader(name = "Authorization") String accessToken,
                            @RequestBody MemberDto.Patch patchDto) throws IOException {

        memberService.update(accessToken, patchDto);
    }

    @PostMapping("/refresh-token")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity<String> validateRefreshToken(@RequestHeader(name = "RefreshToken") String refreshToken) {
        String reissuedToken = memberService.reissueAccessToken(refreshToken);
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Authorization", reissuedToken);
        return ResponseEntity.ok()
                .headers(responseHeaders)
                .body("AccessToken reissued!");
    }

    @PostMapping("/logout")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void logout(@RequestHeader(name = "Authorization") String accessToken) {

        memberService.deleteRefreshToken(accessToken);
    }

    @PatchMapping("/avatar")
    @ResponseStatus(HttpStatus.OK)
    public void patchMyAvatar(@RequestHeader(name = "Authorization") String accessToken,
                              @RequestPart("file") MultipartFile image) throws IOException {
        memberService.updateAvatar(accessToken, image);
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void withdrawal(@RequestHeader(name = "Authorization") String accessToken) {

        memberService.deleteMember(accessToken);
    }
}
