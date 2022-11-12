package codestates.main007.member;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    private final MemberMapper memberMapper;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public void postMember(@RequestBody MemberDto.Signup signupDto) {
        Member member = memberMapper.signupDtoToMember(signupDto);

        memberService.save(member);
    }

    @GetMapping("/verification")
    @ResponseStatus(HttpStatus.OK)
    public void checkPassword(@RequestHeader(name = "Authorization") String accessToken,
                              @RequestHeader(name = "Password") String password) {
        memberService.verifyPassword(accessToken,password);
        // todo : 패스워드 검증 로직 (틀릴 경우 에러)
    }

    @PostMapping("/find-password")
    @ResponseStatus(HttpStatus.OK)
    public void findPassword(@RequestBody MemberDto.Email email) {
        memberService.sendPassword(email.getEmail());
    }

    @GetMapping("/{member-id}/my-page")
    @ResponseStatus(HttpStatus.OK)
    public void getMyPage(@RequestHeader(name = "Authorization") String accessToken,
                          @PathVariable("member-id") long memberId) {
        // todo: 병합 후 보드 서비스에서 가져오기

        System.out.println("mypage");
    }

    @GetMapping("/{member-id}/my-page/{station-id}")
    @ResponseStatus(HttpStatus.OK)
    public void getMyPageByStation(@RequestHeader(name = "Authorization") String accessToken,
                                   @PathVariable("station-id") long stationId,
                                   @PathVariable("member-id") long memberId) {
        // todo: 병합 후 보드 서비스에서 가져오기
        System.out.println(stationId);
    }

    @GetMapping("/{member-id}/my-page/comments")
    @ResponseStatus(HttpStatus.OK)
    public void getMyComments(@RequestHeader(name = "Authorization") String accessToken,
                              @PathVariable("member-id") long memberId) {
        // todo: 병합 후 보드 서비스에서 가져오기
    }

    @GetMapping("/{member-id}/my-page/map")
    @ResponseStatus(HttpStatus.OK)
    public void getMyMap(@RequestHeader(name = "Authorization") String accessToken,
                         @PathVariable("member-id") long memberId) {
        // todo: 병합 후 보드 서비스에서 가져오기
    }

    @GetMapping("/{member-id}/info")
    @ResponseStatus(HttpStatus.OK)
    public void getMyInfo(@RequestHeader(name = "Authorization") String accessToken,
                          @PathVariable("member-id") long memberId) {
        // todo: 병합 후 보드 서비스에서 가져오기
    }

    @PatchMapping("/{member-id}")
    @ResponseStatus(HttpStatus.OK)
    public void patchMyInfo(@RequestHeader(name = "Authorization") String accessToken,
                            @PathVariable("member-id") long memberId,
                            @RequestBody MemberDto.Patch patchDto) {
        memberService.update(memberId, patchDto);
    }

}
