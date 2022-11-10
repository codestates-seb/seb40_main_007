package codestates.main007.main;

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
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MainController.class)
@AutoConfigureRestDocs
@WithMockUser
public class MainControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @Test
    @DisplayName("메인페이지-게시글 리스트")
    void getMyPageTest() throws Exception {
        long stationId = 1;
        long categoryId = 1;

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/{station-id}/{category-id}", stationId,categoryId)
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-main-page",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("station-id").description("역 식별자 ID"),
                                parameterWithName("category-id").description("카테고리 식별자 ID")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("items").type(JsonFieldType.ARRAY).description("게시글 리스트"),
                                        fieldWithPath("items[].boardId").type(JsonFieldType.NUMBER).description("게시글 식별자 ID"),
                                        fieldWithPath("items[].title").type(JsonFieldType.STRING).description("게시글 본문 제목"),
                                        fieldWithPath("items[].review").type(JsonFieldType.STRING).description("게시글 본문 리뷰 내용"),
                                        fieldWithPath("items[].star").type(JsonFieldType.NUMBER).description("게시글 별점 정보"),
                                        fieldWithPath("items[].dibs").type(JsonFieldType.BOOLEAN).description("게시글 찜 여부"),
                                        fieldWithPath("items[].tags").type(JsonFieldType.ARRAY).description("태그 리스트"),
                                        fieldWithPath("items[].tags[].tag.id").type(JsonFieldType.NUMBER).description("게시글 태그 ID"),
                                        fieldWithPath("items[].tags[].tag.tagString").type(JsonFieldType.STRING).description("게시글 태그이름"),
                                        fieldWithPath("items[].thumbNail").type(JsonFieldType.STRING).description("thumbnail 이미지 Url"),
                                        fieldWithPath("items[].timeFromStation").type(JsonFieldType.NUMBER).description("역에서 부터 거리(분)"),
                                        fieldWithPath("items[].latitude").type(JsonFieldType.NUMBER).description("위도"),
                                        fieldWithPath("items[].longitude").type(JsonFieldType.NUMBER).description("경도")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("메인페이지-게시글 리스트-추천정렬")
    void getMyPageScoreTest() throws Exception {
        long stationId = 1;
        long categoryId = 1;

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/{station-id}/{category-id}/score", stationId,categoryId)
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-main-page-score",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("station-id").description("역 식별자 ID"),
                                parameterWithName("category-id").description("카테고리 식별자 ID")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("items").type(JsonFieldType.ARRAY).description("게시글 리스트"),
                                        fieldWithPath("items[].boardId").type(JsonFieldType.NUMBER).description("게시글 식별자 ID"),
                                        fieldWithPath("items[].title").type(JsonFieldType.STRING).description("게시글 본문 제목"),
                                        fieldWithPath("items[].review").type(JsonFieldType.STRING).description("게시글 본문 리뷰 내용"),
                                        fieldWithPath("items[].star").type(JsonFieldType.NUMBER).description("게시글 별점 정보"),
                                        fieldWithPath("items[].dibs").type(JsonFieldType.BOOLEAN).description("게시글 찜 여부"),
                                        fieldWithPath("items[].tags").type(JsonFieldType.ARRAY).description("태그 리스트"),
                                        fieldWithPath("items[].tags[].tag.id").type(JsonFieldType.NUMBER).description("게시글 태그 ID"),
                                        fieldWithPath("items[].tags[].tag.tagString").type(JsonFieldType.STRING).description("게시글 태그이름"),
                                        fieldWithPath("items[].thumbNail").type(JsonFieldType.STRING).description("thumbnail 이미지 Url"),
                                        fieldWithPath("items[].timeFromStation").type(JsonFieldType.NUMBER).description("역에서 부터 거리(분)"),
                                        fieldWithPath("items[].latitude").type(JsonFieldType.NUMBER).description("위도"),
                                        fieldWithPath("items[].longitude").type(JsonFieldType.NUMBER).description("경도")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("메인페이지-게시글 리스트-최신정렬")
    void getMyPageDateTest() throws Exception {
        long stationId = 1;
        long categoryId = 1;

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/{station-id}/{category-id}/date", stationId,categoryId)
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-main-page-date",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("station-id").description("역 식별자 ID"),
                                parameterWithName("category-id").description("카테고리 식별자 ID")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("items").type(JsonFieldType.ARRAY).description("게시글 리스트"),
                                        fieldWithPath("items[].boardId").type(JsonFieldType.NUMBER).description("게시글 식별자 ID"),
                                        fieldWithPath("items[].title").type(JsonFieldType.STRING).description("게시글 본문 제목"),
                                        fieldWithPath("items[].review").type(JsonFieldType.STRING).description("게시글 본문 리뷰 내용"),
                                        fieldWithPath("items[].star").type(JsonFieldType.NUMBER).description("게시글 별점 정보"),
                                        fieldWithPath("items[].dibs").type(JsonFieldType.BOOLEAN).description("게시글 찜 여부"),
                                        fieldWithPath("items[].tags").type(JsonFieldType.ARRAY).description("태그 리스트"),
                                        fieldWithPath("items[].tags[].tag.id").type(JsonFieldType.NUMBER).description("게시글 태그 ID"),
                                        fieldWithPath("items[].tags[].tag.tagString").type(JsonFieldType.STRING).description("게시글 태그이름"),
                                        fieldWithPath("items[].thumbNail").type(JsonFieldType.STRING).description("thumbnail 이미지 Url"),
                                        fieldWithPath("items[].timeFromStation").type(JsonFieldType.NUMBER).description("역에서 부터 거리(분)"),
                                        fieldWithPath("items[].latitude").type(JsonFieldType.NUMBER).description("위도"),
                                        fieldWithPath("items[].longitude").type(JsonFieldType.NUMBER).description("경도")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("메인페이지-게시글 리스트-거리정렬")
    void getMyPageDistanceTest() throws Exception {
        long stationId = 1;
        long categoryId = 1;

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/{station-id}/{category-id}/distance", stationId,categoryId)
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-main-page-distance",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("station-id").description("역 식별자 ID"),
                                parameterWithName("category-id").description("카테고리 식별자 ID")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("items").type(JsonFieldType.ARRAY).description("게시글 리스트"),
                                        fieldWithPath("items[].boardId").type(JsonFieldType.NUMBER).description("게시글 식별자 ID"),
                                        fieldWithPath("items[].title").type(JsonFieldType.STRING).description("게시글 본문 제목"),
                                        fieldWithPath("items[].review").type(JsonFieldType.STRING).description("게시글 본문 리뷰 내용"),
                                        fieldWithPath("items[].star").type(JsonFieldType.NUMBER).description("게시글 별점 정보"),
                                        fieldWithPath("items[].dibs").type(JsonFieldType.BOOLEAN).description("게시글 찜 여부"),
                                        fieldWithPath("items[].tags").type(JsonFieldType.ARRAY).description("태그 리스트"),
                                        fieldWithPath("items[].tags[].tag.id").type(JsonFieldType.NUMBER).description("게시글 태그 ID"),
                                        fieldWithPath("items[].tags[].tag.tagString").type(JsonFieldType.STRING).description("게시글 태그이름"),
                                        fieldWithPath("items[].thumbNail").type(JsonFieldType.STRING).description("thumbnail 이미지 Url"),
                                        fieldWithPath("items[].timeFromStation").type(JsonFieldType.NUMBER).description("역에서 부터 거리(분)"),
                                        fieldWithPath("items[].latitude").type(JsonFieldType.NUMBER).description("위도"),
                                        fieldWithPath("items[].longitude").type(JsonFieldType.NUMBER).description("경도")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("메인페이지-게시글 리스트-태그검색")
    void getMyPageTagTest() throws Exception {
        long stationId = 1;
        long categoryId = 1;

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/{station-id}/{category-id}/search", stationId,categoryId)
                                .param("tag",String.valueOf(1))
                                .param("tag",String.valueOf(2))
                                .param("tag",String.valueOf(3))
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-main-page-tag",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("station-id").description("역 식별자 ID"),
                                parameterWithName("category-id").description("카테고리 식별자 ID")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        requestParameters(
                                parameterWithName("tag").description("태그 식별자 ID")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("items").type(JsonFieldType.ARRAY).description("게시글 리스트"),
                                        fieldWithPath("items[].boardId").type(JsonFieldType.NUMBER).description("게시글 식별자 ID"),
                                        fieldWithPath("items[].title").type(JsonFieldType.STRING).description("게시글 본문 제목"),
                                        fieldWithPath("items[].review").type(JsonFieldType.STRING).description("게시글 본문 리뷰 내용"),
                                        fieldWithPath("items[].star").type(JsonFieldType.NUMBER).description("게시글 별점 정보"),
                                        fieldWithPath("items[].dibs").type(JsonFieldType.BOOLEAN).description("게시글 찜 여부"),
                                        fieldWithPath("items[].tags").type(JsonFieldType.ARRAY).description("태그 리스트"),
                                        fieldWithPath("items[].tags[].tag.id").type(JsonFieldType.NUMBER).description("게시글 태그 ID"),
                                        fieldWithPath("items[].tags[].tag.tagString").type(JsonFieldType.STRING).description("게시글 태그이름"),
                                        fieldWithPath("items[].thumbNail").type(JsonFieldType.STRING).description("thumbnail 이미지 Url"),
                                        fieldWithPath("items[].timeFromStation").type(JsonFieldType.NUMBER).description("역에서 부터 거리(분)"),
                                        fieldWithPath("items[].latitude").type(JsonFieldType.NUMBER).description("위도"),
                                        fieldWithPath("items[].longitude").type(JsonFieldType.NUMBER).description("경도")
                                )
                        )
                ));
    }

}
