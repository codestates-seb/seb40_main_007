package codestates.main007.comments;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;

    public void save(Comment comment) {
        this.commentRepository.save(comment);
    }

    public void update(CommentDto.Input patchDto, long commentId) {
        Comment comment = find(commentId);
        comment.patchComment(patchDto.getComment());
    }

    public Comment find(long commentId) {
        return this.commentRepository.findById(commentId)
                .orElseThrow(() -> new NullPointerException("해당 댓글이 존재하지 않습니다."));
    }

    public void delete(long commentId) {
        this.commentRepository.deleteById(commentId);
    }
}

