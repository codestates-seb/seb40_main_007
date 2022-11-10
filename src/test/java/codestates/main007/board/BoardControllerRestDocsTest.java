package codestates.main007.board;

import codestates.main007.tag.Tag;
import codestates.main007.tag.TagDto;
import com.google.gson.Gson;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.requestHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(BoardController.class)
@AutoConfigureRestDocs
public class BoardControllerRestDocsTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private Gson gson;

    @Test
    @DisplayName("board 게시 테스트")
    public void postBoardTest() throws Exception {
        BoardMockUpDto.Post post = BoardMockUpDto.Post.builder()
                .address("서울로 152")
                .star(5.0d)
                .tags(List.of(new TagDto.Response(new Tag(1,"한식"))))
                .title("title")
                .latitude(1231.12312d)
                .longitude(1231.1521d)
                .review("review")
                .station("서울역")
                .category("맛집")
                .thumbNail("썸네일")
                .build();
        String content = gson.toJson(post);

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.post("/boards")
                                .header("Authorization", "token")
                                .accept(APPLICATION_JSON)
                                .contentType(APPLICATION_JSON)
                                .content(content)
                );
        actions
                .andExpect(status().isCreated())
                .andDo(document(
                        "post-board",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("boardId").type(JsonFieldType.NUMBER).description("게시글 식별자 ID"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("review").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("star").type(JsonFieldType.NUMBER).description("게시글 별점 정보"),
                                        fieldWithPath("thumbNail").type(JsonFieldType.STRING).description("게시글 썸네일"),
                                        fieldWithPath("timeFromStation").type(JsonFieldType.STRING).description("역에서 부터 거리(분)"),
                                        fieldWithPath("dibs").type(JsonFieldType.BOOLEAN).description("게시글 찜 여부"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("게시글 생성 시간")
                                )
                        )
                ));
    }
    @Test
    @DisplayName("board 조회 테스트")
    public void getBoardTest() throws Exception {
        long id = 1;
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/boards/{board-Id}", id)
                                .param("stationId", String.valueOf(1))
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-board",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("board-Id").description("멤버 식별자 ID")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("boardId").type(JsonFieldType.NUMBER).description("게시글 식별자 ID").ignored(),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("review").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("star").type(JsonFieldType.NUMBER).description("게시글 별점 정보"),
                                        fieldWithPath("thumbNail").type(JsonFieldType.STRING).description("게시글 썸네일"),
                                        fieldWithPath("station").type(JsonFieldType.STRING).description("근처 기차역"),
                                        fieldWithPath("category").type(JsonFieldType.STRING).description("게시글 카테고리"),
                                        fieldWithPath("tags").type(JsonFieldType.ARRAY).description("게시글 태그들"),
                                        fieldWithPath("tags[].tag.id").type(JsonFieldType.NUMBER).description("게시글 태그 ID"),
                                        fieldWithPath("tags[].tag.tagString").type(JsonFieldType.STRING).description("게시글 태그이름"),
                                        fieldWithPath("address").type(JsonFieldType.STRING).description("도로명주소"),
                                        fieldWithPath("timeFromStation").type(JsonFieldType.STRING).description("역에서 부터 거리(분)"),
                                        fieldWithPath("dibs").type(JsonFieldType.BOOLEAN).description("게시글 찜 여부"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("게시글 생성시간")
                                )
                        )
                ));
    }
    @Test
    @DisplayName("boards 조회 테스트")
    public void getBoardsTest() throws Exception {
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/boards")
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-board",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("게시글 목록"),
                                        fieldWithPath("data[].boardId").type(JsonFieldType.NUMBER).description("게시글 식별자 ID").ignored(),
//                                        fieldWithPath("data[].author").type(JsonFieldType.ARRAY).description("게시글 본문 내용"),
//                                        fieldWithPath("data[].author[].memberId").type(JsonFieldType.NUMBER).description("작성자 ID"),
//                                        fieldWithPath("data[].author[].~~~").type(JsonFieldType.ARRAY).description("게시글 본문 내용"),
                                        fieldWithPath("data[].title").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("data[].review").type(JsonFieldType.STRING).description("게시글 본문 내용"),
                                        fieldWithPath("data[].star").type(JsonFieldType.NUMBER).description("게시글 별점 정보"),
                                        fieldWithPath("data[].thumbNail").type(JsonFieldType.STRING).description("게시글 썸네일"),
                                        fieldWithPath("data[].timeFromStation").type(JsonFieldType.STRING).description("역에서 부터 거리(분)"),
                                        fieldWithPath("data[].dibs").type(JsonFieldType.BOOLEAN).description("게시글 찜 여부"),
                                        fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("게시글 생성시간")
                                )
                        )
                ));
    }
}