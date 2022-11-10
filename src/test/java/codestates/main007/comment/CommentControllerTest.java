package codestates.main007.comment;

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

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.requestHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessRequest;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CommentController.class)
@AutoConfigureRestDocs
@WithMockUser
public class CommentControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @Test
    @DisplayName("댓글 등록 테스트")
    void postCommentTest() throws Exception {
        long id = 1;
        CommentMockUpDto.input post = new CommentMockUpDto.input();
        post.setContent("댓글 내용");
        String content = gson.toJson(post);

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.post("/boards/{boardId}/comments", id)
                                .header("Authorization", "accessToken")
                                .content(content)
                                .contentType(APPLICATION_JSON)
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "post-comment",
                        preprocessRequest(prettyPrint()),
                        pathParameters(
                                parameterWithName("boardId").description("게시글 식별자 ID")
                        ),
                        requestFields(
                                fieldWithPath("content").type(JsonFieldType.STRING).description("수정된 댓글 내용")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        )
                ));
    }

    @Test
    @DisplayName("댓글 수정 테스트")
    void patchCommentTest() throws Exception {
        long id = 1;
        CommentMockUpDto.input patch = new CommentMockUpDto.input();
        patch.setContent("댓글 변경 내용");
        String content = gson.toJson(patch);

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.patch("/comments/{commentId}", id)
                                .header("Authorization", "accessToken")
                                .content(content)
                                .contentType(APPLICATION_JSON)
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "patch-comment",
                        preprocessRequest(prettyPrint()),
                        pathParameters(
                                parameterWithName("commentId").description("댓글 식별자 ID")
                        ),
                        requestFields(
                                fieldWithPath("content").type(JsonFieldType.STRING).description("수정된 댓글 내용")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        )
                ));
    }

    @Test
    @DisplayName("댓글 삭제 테스트")
    void deleteCommentTest() throws Exception {
        long id = 1;

        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.delete("/comments/{commentId}", id)
                                .header("Authorization", "accessToken")
                                .accept(APPLICATION_JSON)
                );

        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "delete-comment",
                        preprocessRequest(prettyPrint()),
                        pathParameters(
                                parameterWithName("commentId").description("댓글 식별자 ID")
                        ),
                        requestHeaders(
                                headerWithName("Authorization").description("사용자 인증 정보")
                        )
                ));
    }
}
