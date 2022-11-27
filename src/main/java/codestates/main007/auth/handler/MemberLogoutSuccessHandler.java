package codestates.main007.auth.handler;

import codestates.main007.member.Member;
import codestates.main007.member.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class MemberLogoutSuccessHandler implements LogoutSuccessHandler {
    private final MemberService memberService;

    public MemberLogoutSuccessHandler(MemberService memberService) {
        this.memberService = memberService;
    }

    @Override
    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException{
        //로그아웃시 MemberDB에서 RefreshToken삭제
        log.info("Loged out successfully!");
    }

}
