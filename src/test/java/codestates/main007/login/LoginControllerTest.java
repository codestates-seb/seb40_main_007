package codestates.main007.login;

import com.google.gson.Gson;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;


import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.restdocs.headers.HeaderDocumentation.*;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(LoginController.class)
@AutoConfigureRestDocs
@WithMockUser
public class LoginControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @Test
    @DisplayName("비밀번호 체크 테스트")
    void checkPasswordTest() throws Exception {
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/check-password")
                                .header("Authorization", "accessToken")
                                .header("password", "originPassword")
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "check-password",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보"),
                                headerWithName("password").description("검증용 기존 비밀번호")
                        )
                ));
    }

    @Test
    @DisplayName("로그인 테스트")
    void loginTest() throws Exception {
        LoginMockUpDto.loginDto loginDto = new LoginMockUpDto.loginDto();
        loginDto.setEmail("kkd@gmail.com");
        loginDto.setPassword("qwerty1234@");
        String content = gson.toJson(loginDto);

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.post("/login")
                                .content(content)
                                .contentType(APPLICATION_JSON)
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "login",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(
                                fieldWithPath("email").description("이메일"),
                                fieldWithPath("password").description("비밀번호")
                        ),
                        responseHeaders(
                                headerWithName("Authorization").description("accessToken")
                        ),
                        responseFields(
                                fieldWithPath("memberId").description("멤버 식별자 ID"),
                                fieldWithPath("name").description("멤버 닉네임"),
                                fieldWithPath("avatar").description("프로필 이미지")
                        )

                ));
    }

    @Test
    @DisplayName("회원가입 테스트")
    void signupTest() throws Exception {
        LoginMockUpDto.loginDto loginDto = new LoginMockUpDto.loginDto();
        loginDto.setEmail("kkd@gmail.com");
        loginDto.setPassword("qwerty1234@");
        String content = gson.toJson(loginDto);

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.post("/signup")
                                .content(content)
                                .contentType(APPLICATION_JSON)
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "signup",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(
                                fieldWithPath("email").description("이메일"),
                                fieldWithPath("password").description("비밀번호")
                        )
                ));
    }

    @Test
    @DisplayName("비밀번호 찾기 테스트")
    void findPasswordTest() throws Exception {
        LoginMockUpDto.email emailDto = new LoginMockUpDto.email();
        emailDto.setEmail("kkd2@gmail.com");
        String content = gson.toJson(emailDto);

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.post("/find-password")
                                .content(content)
                                .contentType(APPLICATION_JSON)
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "find-password",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(
                                fieldWithPath("email").description("이메일")
                        )
                ));
    }
}
