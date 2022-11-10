package codestates.main007.login;

import codestates.main007.member.MockUpDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.List;

@Controller
public class LoginController {
    @GetMapping("/checkPassword")
    public ResponseEntity getMyPage(@RequestHeader String authorization,
                                    @RequestBody String password) {

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
