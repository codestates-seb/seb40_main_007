package codestates.main007.comment;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class CommentController {
    @PostMapping("/boards/{boardId}/comments")
    public ResponseEntity postComment(@PathVariable long boardId,
                                    @RequestBody CommentMockUpDto.input post) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/comments/{commentId}")
    public ResponseEntity patchComment(@PathVariable long commentId,
                                    @RequestBody CommentMockUpDto.input patch) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/comments/{commentId}")
    public ResponseEntity deleteComment(@PathVariable long commentId) {

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
