package codestates.main007.comments;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper commentMapper;

    @PostMapping("/boards/{board-id}/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public void postComment(@RequestHeader(name = "Authorization")String accessToken,
                          @PathVariable("board-id") long boardID,
                          @RequestBody CommentDto.Input postDto){
        // todo: boardID 와 연관관계 설정
        Comment comment = this.commentMapper.commentDtoToComment(postDto);

        this.commentService.save(comment);
    }

    @PatchMapping("/comments/{comment-id}")
    @ResponseStatus(HttpStatus.OK)
    public void patchComment(@RequestHeader(name = "Authorization")String accessToken,
                            @PathVariable("comment-id") long commentId,
                            @RequestBody CommentDto.Input patchDto){
        // todo: boardID 와 연관관계 설정
        this.commentService.update(patchDto, commentId);
    }

    @DeleteMapping("/comments/{comment-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@RequestHeader(name = "Authorization")String accessToken,
                             @PathVariable("comment-id") long commentId
                             ){
        // todo: boardID 와 연관관계 설정
        this.commentService.delete(commentId);
    }

}
