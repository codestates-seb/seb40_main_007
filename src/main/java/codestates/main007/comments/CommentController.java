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
                          @RequestBody CommentDto.Input postDto){
        Comment comment = this.commentMapper.commentDtoToComment(postDto);

        this.commentService.save(comment);
    }


}
