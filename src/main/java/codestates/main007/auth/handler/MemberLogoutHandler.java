package codestates.main007.auth.handler;

import codestates.main007.member.MemberService;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
public class MemberLogoutHandler extends SecurityContextLogoutHandler {
    private final MemberService memberService;

    public MemberLogoutHandler(MemberService memberService) {
        this.memberService = memberService;
    }

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        String memberId= response.getHeader("MemberId");
        //memberService.deleteRefreshToken(memberId);
        super.logout(request, response, authentication);
    }
}
