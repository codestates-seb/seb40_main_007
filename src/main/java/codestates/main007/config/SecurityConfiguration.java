package codestates.main007.config;

import codestates.main007.auth.filter.JwtAuthenticationFilter;
import codestates.main007.auth.filter.JwtVerificationFilter;
import codestates.main007.auth.handler.MemberAccessDeniedHandler;
import codestates.main007.auth.handler.MemberAuthenticationEntryPoint;
import codestates.main007.auth.handler.MemberAuthenticationFailureHandler;
import codestates.main007.auth.handler.OAuthMemberAuthenticationSuccessHandler;
import codestates.main007.auth.jwt.JwtTokenizer;
import codestates.main007.auth.util.CustomAuthorityUtils;
import codestates.main007.auth.util.YeogiyoOAuth2Provider;
import codestates.main007.member.MemberService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;

@Configuration
public class SecurityConfiguration {
//    @Value("${spring.security.oauth2.client.registration.kakao.clientId}")
//    private String kakaoClientId;
//    @Value("${spring.security.oauth2.client.registration.kakao.clientSecret}")
//    private String kakaoClientSecret;
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberService memberService;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils, MemberService memberService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()//csrf 일단 비활성화
                .cors(Customizer.withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                                .antMatchers(POST, "/login").permitAll()
                                .antMatchers(POST, "/members/signup").permitAll()
                                .antMatchers(GET, "/{station-id}").permitAll()
                        //todo:계속 추가예정
                )
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuthMemberAuthenticationSuccessHandler(jwtTokenizer, authorityUtils, memberService)));
        return http.build();
    }

    @Bean
    public ClientRegistrationRepository clientRegistrationRepository(OAuth2ClientProperties oAuth2ClientProperties,
                                                                     @Value("${spring.security.oauth2.client.registration.google.clientId}") String googleClientId,
                                                                     @Value("${spring.security.oauth2.client.registration.google.clientSecret}") String googleClientSecret,
                                                                     @Value("${spring.security.oauth2.client.registration.naver.clientId}") String naverClientId,
                                                                     @Value("${spring.security.oauth2.client.registration.naver.clientSecret}") String naverClientSecret
                                                                     //String kakaoClientId,
                                                                     //String kakaoClientSecret
    ) {
        List<ClientRegistration> registrations = oAuth2ClientProperties
                .getRegistration().keySet().stream()
                .map(client -> getRegistration(oAuth2ClientProperties, client))
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        registrations.add(YeogiyoOAuth2Provider.NAVER.getBuilder("naver")
                .clientId(naverClientId)
                .clientSecret(naverClientSecret)
                .jwkSetUri("temp")
                .build());
//        registrations.add(YeogiyoOAuth2Provider.KAKAO.getBuilder("kakao")
//                .clientId(kakaoClientId)
//                .clientSecret(kakaoClientSecret)
//                .jwkSetUri("temp")
//                .build());

        return new InMemoryClientRegistrationRepository(registrations);
    }
    private ClientRegistration getRegistration(OAuth2ClientProperties clientProperties, String client) {
        if("google".equals(client)) {
            OAuth2ClientProperties.Registration registration = clientProperties.getRegistration().get("google");
            return CommonOAuth2Provider.GOOGLE.getBuilder(client)
                    .clientId(registration.getClientId())
                    .clientSecret(registration.getClientSecret())
                    .scope("email", "profile")
                    .build();
        }
        return null;
    }
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "PUT", "DELETE", "HEAD"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setExposedHeaders(List.of("*"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new OAuthMemberAuthenticationSuccessHandler(jwtTokenizer, authorityUtils, memberService));
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder
                    .addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }
}
