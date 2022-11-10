package codestates.main007.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                //동일 출처로부터 들어오는 request만 페이지 렌더링을 허용
                .headers().frameOptions().sameOrigin()
                .and()
                // 현재 : csrf 공격에 대한 설정 비활성화
                .csrf().disable()
                .cors()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http
                .formLogin()
//                .loginPage("/loginPage")
//                .defaultSuccessUrl("/")
                .and()
                .httpBasic().disable()
                .exceptionHandling()
                // 인증이 안됐을 때
//                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .and()
                // 필터 적용
//                .apply(new CustomFilterConfigure())
//                .and()
                .authorizeHttpRequests(authorize -> authorize
//                         권한 설정
                                .antMatchers("/").hasRole("USER")
//                                .anyRequest().permitAll()
                )
//                .oauth2Login(oauth2 ->oauth2
//                        .successHandler(new OAuth2SuccessHandler(jwtTokenizer, userService))
//                )
                .logout()
                .logoutUrl("/users/logout")
                .logoutSuccessUrl("/")
        ;

        return http.build();
    }

    //
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        // 모든 출처에 대해 스크립트기반의 HTTP 통신을 허용
        configuration.setAllowedOrigins(Arrays.asList("*"));
        // 파라미터로 지정한 HTTP Method에 대한 HTTP 통신을 허용
        configuration.setAllowedMethods(Arrays.asList("*"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        // 패턴에 해당하는 URL에 해당 CORS 정책을 적용한다.
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
