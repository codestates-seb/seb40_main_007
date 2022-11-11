package codestates.main007.comment;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class CommentController {
    @PostMapping("/boards/{board-id}/comments")
    public ResponseEntity postComment(@PathVariable("board-id") long boardId,
                                    @RequestBody CommentMockUpDto.input post) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/comments/{comment-id}")
    public ResponseEntity patchComment(@PathVariable("comment-id") long commentId,
                                    @RequestBody CommentMockUpDto.input patch) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/comments/{comment-id}")
    public ResponseEntity deleteComment(@PathVariable("comment-id") long commentId) {

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
