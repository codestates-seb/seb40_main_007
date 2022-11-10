package codestates.main007.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtTokenizer jwtTokenizer) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenizer = jwtTokenizer;
    }
    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {

        // 로그인 dto를 역직렬화
        ObjectMapper objectMapper = new ObjectMapper();
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);

        // 이메일과 비밀번호를 포함한 토큰 생성
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());

        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) {
        //todo: 멤버 클래스 생성 후 작성
        //principal로부터 유저 정보 호출
//        Member member = (Member) authResult.getPrincipal();

        // 토큰 생성
//        String accessToken = delegateAccessToken(member);
//        String refreshToken = delegateRefreshToken(member);

//        response.setHeader("Authorization", "Bearer " + accessToken);
//        response.setHeader("Refresh", refreshToken);
    }

    // todo: 멤버 클래스 생성 후 작성
//    private String delegateAccessToken(Member member) {
//        Map<String, Object> claims = new HashMap<>();
//        claims.put("username", member.getEmail());
//        claims.put("roles", member.getRoles());
//
//        String subject = member.getEmail();
//        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
//
//        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
//
//        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);
//
//        return accessToken;
//    }

    // todo: 멤버 클래스 생성 후 작성
//    private String delegateRefreshToken(Member member) {
//        String subject = member.getEmail();
//        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
//        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
//
//        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);
//
//        return refreshToken;
//    }
}
