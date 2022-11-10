package codestates.main007.member;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.Arrays;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.requestHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MemberController.class)
@AutoConfigureRestDocs
@WithMockUser
public class MemberControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;
    private ObjectMapper objectMapper;

    @Test
    @DisplayName("마이페이지-게시글 테스트")
    void getMyPageTest() throws Exception {
        long id = 1;

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/members/{memberId}/myPages", id)
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-my-page",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("memberId").description("멤버 식별자 ID")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("items").type(JsonFieldType.ARRAY).description("게시글 리스트"),
                                        fieldWithPath("items[].boardId").type(JsonFieldType.NUMBER).description("게시글 식별자 ID"),
                                        fieldWithPath("items[].title").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("items[].content").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("items[].star").type(JsonFieldType.NUMBER).description("게시글 별점 정보"),
                                        fieldWithPath("items[].timeFromStation").type(JsonFieldType.NUMBER).description("역에서 부터 거리(분)")
//                                        fieldWithPath("totalBoard").type(JsonFieldType.NUMBER).description("총 게시글 수"),
//                                        fieldWithPath("totalComment").type(JsonFieldType.NUMBER).description("총 댓글 수"),
//                                        fieldWithPath("score").type(JsonFieldType.NUMBER).description("총 추천 수")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("마이페이지-게시글-역 분류 테스트")
    void getMyPageByStationTest() throws Exception {
        long id = 1;

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/members/{memberId}/myPage", id)
                                .param("stationId", String.valueOf(1))
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-my-page-by-station",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("memberId").description("멤버 식별자 ID")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        requestParameters(
                                parameterWithName("stationId").description("역 식별자 ID")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("items").type(JsonFieldType.ARRAY).description("게시글 리스트"),
                                        fieldWithPath("items[].boardId").type(JsonFieldType.NUMBER).description("게시글 식별자 ID"),
                                        fieldWithPath("items[].title").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("items[].content").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("items[].star").type(JsonFieldType.NUMBER).description("게시글 별점 정보"),
                                        fieldWithPath("items[].timeFromStation").type(JsonFieldType.NUMBER).description("역에서 부터 거리(분)")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("마이페이지-댓글 테스트")
    void getMyComments() throws Exception {
        long id = 1;

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/members/{memberId}/myPage/comments", id)
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-my-comments",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("memberId").description("멤버 식별자 ID")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("items").type(JsonFieldType.ARRAY).description("게시글 리스트"),
                                        fieldWithPath("items[].commentId").type(JsonFieldType.NUMBER).description("댓글 식별자 ID"),
                                        fieldWithPath("items[].boardId").type(JsonFieldType.NUMBER).description("해당 댓글이 쓰여진 게시글 ID"),
                                        fieldWithPath("items[].title").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("items[].comment").type(JsonFieldType.STRING).description("게시글 본문 내용")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("마이페이지-지도 테스트")
    void getMyMaps() throws Exception {
        long id = 1;

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/members/{memberId}/myPage/map", id)
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-my-map",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("memberId").description("멤버 식별자 ID")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("items").type(JsonFieldType.ARRAY).description("게시글 리스트"),
                                        fieldWithPath("items[].boardId").type(JsonFieldType.NUMBER).description("게시글 식별자 ID"),
                                        fieldWithPath("items[].thumbnailUrl").type(JsonFieldType.STRING).description("사진의 썸네일 주소"),
                                        fieldWithPath("items[].latitude").type(JsonFieldType.NUMBER).description("위도"),
                                        fieldWithPath("items[].longitude").type(JsonFieldType.NUMBER).description("경도")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("내 정보 테스트")
    void getMyInfo() throws Exception {
        long id = 1;

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/members/{memberId}/info", id)
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-my-info",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("memberId").description("멤버 식별자 ID")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("totalBoard").type(JsonFieldType.NUMBER).description("총 게시글 수"),
                                        fieldWithPath("totalComment").type(JsonFieldType.NUMBER).description("총 댓글 수"),
                                        fieldWithPath("score").type(JsonFieldType.NUMBER).description("총 추천 수")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("정보 수정 테스트")
    void patchMemberInfoTest() throws Exception {
        long id = 1;
        MockUpDto.updateDto updateDto = new MockUpDto.updateDto();
        updateDto.setName("new Name");
        updateDto.setAvatar("new Avatar.url");
        updateDto.setPassword("new password");
        String content = gson.toJson(updateDto);

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.patch("/members/{member_id}", id)
                                .header("Authorization", "accessToken")
                                .content(content)
                                .contentType(APPLICATION_JSON)
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "patch-info",
                        preprocessRequest(prettyPrint()),
                        pathParameters(
                                parameterWithName("member_id").description("멤버 식별자 ID")
                        ),
                        requestFields(
                                fieldWithPath("name").type(JsonFieldType.STRING).description("새 이름"),
                                fieldWithPath("avatar").type(JsonFieldType.STRING).description("새 프로필 이미지"),
                                fieldWithPath("password").type(JsonFieldType.STRING).description("새 패스워드")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        )
                ));
    }
}
