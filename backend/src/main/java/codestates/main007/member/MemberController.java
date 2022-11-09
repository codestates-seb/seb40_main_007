package codestates.main007.member;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MemberController {
    @GetMapping("/members/{memberId}/myPage")
    public ResponseEntity getMyPage(@PathVariable long memberId) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/members/{memberId}/myPage")
    public ResponseEntity getMyPageByStation(@PathVariable long memberId,
                                             @RequestParam String station) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/members/{memberId}/myPage/comments")
    public ResponseEntity getMyComments(@PathVariable long memberId) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/members/{memberId}/myPage/map")
    public ResponseEntity getMyMap(@PathVariable long memberId) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/members/{member_id}/info")
    public ResponseEntity getMyInfo(@PathVariable long memberId) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @PatchMapping("/members/{member_id}")
    public ResponseEntity patchMemberInfo(@PathVariable long memberId) {

        return new ResponseEntity(HttpStatus.OK);
    }
}
