package codestates.main007.auth.handler;

import codestates.main007.member.Member;
import codestates.main007.member.MemberService;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
public class MemberLogoutHandler implements LogoutHandler {
    private final MemberService memberService;

    public MemberLogoutHandler(MemberService memberService) {
        this.memberService = memberService;
    }

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        Member member = (Member) authentication.getPrincipal();
        memberService.deleteRefreshToken(member.getMemberId());
        //memberService.deleteRefreshToken(memberId);
    }
}
