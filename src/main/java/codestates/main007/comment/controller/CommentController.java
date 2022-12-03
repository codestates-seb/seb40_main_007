package codestates.main007.comment.controller;

import codestates.main007.comment.entity.Comment;
import codestates.main007.comment.dto.CommentDto;
import codestates.main007.comment.mapper.CommentMapper;
import codestates.main007.comment.service.CommentService;
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
    public void postComment(@RequestHeader(name = "Authorization") String accessToken,
                            @PathVariable("board-id") long boardId,
                            @RequestBody CommentDto.Input postDto) {
        Comment comment = commentMapper.commentDtoToComment(postDto);

        commentService.save(accessToken, boardId, postDto);
    }

    @PatchMapping("/comments/{comment-id}")
    @ResponseStatus(HttpStatus.OK)
    public void patchComment(@RequestHeader(name = "Authorization") String accessToken,
                             @PathVariable("comment-id") long commentId,
                             @RequestBody CommentDto.Input patchDto) {

        commentService.update(accessToken, patchDto, commentId);
    }

    @DeleteMapping("/comments/{comment-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@RequestHeader(name = "Authorization") String accessToken,
                              @PathVariable("comment-id") long commentId) {

        commentService.delete(accessToken, commentId);
    }

}
