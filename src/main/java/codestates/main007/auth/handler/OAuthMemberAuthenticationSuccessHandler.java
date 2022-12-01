package codestates.main007.auth.handler;

import codestates.main007.auth.jwt.JwtTokenizer;
import codestates.main007.auth.util.CustomAuthorityUtils;
import codestates.main007.member.entity.Member;
import codestates.main007.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
public class OAuthMemberAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberService memberService;

    public OAuthMemberAuthenticationSuccessHandler(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils, MemberService memberService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        
        var oAuth2User = (OAuth2User) authentication.getPrincipal();
        String name;
        String email;
        String avatar;
        List<String> authorities;
        //Google
        if (String.valueOf(oAuth2User.getAttributes()).startsWith("{s")) {
            name = String.valueOf(oAuth2User.getAttributes().get("name"));
            email = String.valueOf(oAuth2User.getAttributes().get("email"));
            avatar = String.valueOf(oAuth2User.getAttributes().get("picture"));
            authorities = authorityUtils.createRoles(email);
        }
        //Naver
        else if (String.valueOf(oAuth2User.getAttributes()).startsWith("{r")) {
            Map<String, Object> map = (Map<String, Object>) oAuth2User.getAttributes().get("response");
            name = String.valueOf(map.get("nickname"));
            email = String.valueOf(map.get("email"));
            avatar = String.valueOf(map.get("profile_image"));
            authorities = authorityUtils.createRoles(email);
        }
        //Kakao
        else {
            Map<String, Object> map = (Map<String, Object>) oAuth2User.getAttributes().get("properties");
            Map<String, Object> emailMap = (Map<String, Object>) oAuth2User.getAttributes().get("kakao_account");
            name = String.valueOf(map.get("nickname"));
            email = String.valueOf(emailMap.get("email"));
            avatar = String.valueOf(map.get("profile_image"));
            authorities = authorityUtils.createRoles(email);
        }
        // 이메일 등록 여부 체크
        long memberId = 0;
        if (memberService.countByEmail(email) == 0) {
            int i = 1;
            while (memberService.countByName(name) != 0) {
                name += i++;
            }
            Member member = saveMember(name, email, avatar);
            memberId = member.getMemberId();
        } else {
            memberId = memberService.findByEmail(email).getMemberId();
        }
        String accessToken = delegateAccessToken(email, authorities);
        String refreshToken = delegateRefreshToken(email);

        memberService.saveRefreshToken(memberId, refreshToken);

        redirect(request, response, email, authorities, accessToken, refreshToken);

        log.info("# Authenticated successfully!");
    }

    private Member saveMember(String name, String email, String avatar) {
        return memberService.saveOAuthMember(name, email, avatar);
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, String username, List<String> authorities, String accessToken, String refreshToken) throws IOException {

        String uri = createURI(accessToken, refreshToken).toString();
        getRedirectStrategy().sendRedirect(request, response, uri);
    }

    private String delegateAccessToken(String username, List<String> authorities) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("roles", authorities);
        claims.put("memberId", memberService.findByEmail(username).getMemberId());

        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    private String delegateRefreshToken(String username) {
        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }

    private URI createURI(String accessToken, String refreshToken) {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("Authorization", "Bearer " + accessToken);
        queryParams.add("refresh_token", "Bearer " + refreshToken);

        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("pre-032-bucket.s3-website.ap-northeast-2.amazonaws.com")
                .path("callback/receive-token.html")
                .queryParams(queryParams)
                .build()
                .toUri();
    }
}
