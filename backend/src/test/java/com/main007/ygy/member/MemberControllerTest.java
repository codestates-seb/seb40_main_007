package com.main007.ygy.member;

import com.google.gson.Gson;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.Arrays;
import java.util.List;

import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.requestHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MemberController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
@WithMockUser
public class MemberControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @Test
    @DisplayName("member컨트롤러 테스트")
    void getMyPageTest() throws Exception {
        long memberId = 1;

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/members/{member_id}/myPage",memberId)
                                .accept(MediaType.APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-my-page",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("memberID").description("멤버 식별자 ID")
                        ),
                        requestHeaders(
                          headerWithName("authentication").description("사용자 인증 정보")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("items").type(JsonFieldType.ARRAY).description("게시글 리스트"),
                                        fieldWithPath("items[].boardId").type(JsonFieldType.NUMBER).description("게시글 식별자 ID"),
                                        fieldWithPath("items[].title").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("items[].content").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("items[].star").type(JsonFieldType.NUMBER).description("게시글 별점 정보"),
                                        fieldWithPath("items[].timeFromStation").type(JsonFieldType.NUMBER).description("역에서 부터 거리(분)"),
                                        fieldWithPath("owner").type(JsonFieldType.ARRAY).description("작성자 정보"),
                                        fieldWithPath("owner[].memberName").type(JsonFieldType.STRING).description("작성자 이름"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("게시글 생성 일자"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("게시글 생성 일자"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("게시글 생성 일자")
//                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("게시글 생성 일자"),
//                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("게시글 수정 일자"),
//                                        fieldWithPath("category").type(JsonFieldType.STRING).description("게시글 분류"),
//                                        fieldWithPath("stationId").type(JsonFieldType.NUMBER).description("역 식별자 ID"),
//                                        fieldWithPath("horizontal").type(JsonFieldType.NUMBER).description("게시글 좌표 정보 - 위도"),
//                                        fieldWithPath("vertical").type(JsonFieldType.NUMBER).description("게시글 좌표 정보 - 경도"),
//                                        fieldWithPath("score").type(JsonFieldType.STRING).description("게시글 평점"),
//                                        fieldWithPath("viewCount").type(JsonFieldType.ARRAY).description("게시글 조회수"),
                                )
                        )
                ));
    }
}
