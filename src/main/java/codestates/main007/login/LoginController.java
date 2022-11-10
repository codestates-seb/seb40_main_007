package codestates.main007.login;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;


@Controller
public class LoginController {
    @GetMapping("/check-password")
    public ResponseEntity checkPassword(@RequestHeader String authorization,
                                    @RequestHeader String password) {

        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginMockUpDto.loginDto loginDto) {
        LoginMockUpDto.response response = new LoginMockUpDto.response();
        response.setName("김코딩");
        response.setMemberId(1);
        response.setAvatar("s3.avatar.com");

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "accessToken");

        return new ResponseEntity<>(response,headers, HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity signUp(@RequestBody LoginMockUpDto.loginDto loginDto){

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/find-password")
    public ResponseEntity findPassword(@RequestBody LoginMockUpDto.email emailDto){

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
