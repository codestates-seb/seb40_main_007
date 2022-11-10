package codestates.main007.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

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
                // cors를 허용하는 기본 설정으로 적용
                .cors(withDefaults())
                // 우리 학습과정에선 배우지 않은 내용 : 그냥 disable 하자
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http
                .formLogin()
//                .loginPage("/loginPage")
//                .defaultSuccessUrl("/")
                .and()
                .httpBasic().disable()
                .exceptionHandling()
//                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
//                .accessDeniedHandler(new UserAccessDeniedHandler())
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
}
