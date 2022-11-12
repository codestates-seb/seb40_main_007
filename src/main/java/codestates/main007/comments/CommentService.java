package codestates.main007.comments;

import codestates.main007.member.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;

    public void save(Comment comment) {
        commentRepository.save(comment);
    }

    public void update(Member member, CommentDto.Input patchDto, long commentId) {
        Member writer = find(commentId).getWriter();
        if (member != writer) {
            //todo: 에러 발생 로직 작성자가 아닙니다
        }

        Comment comment = find(commentId);
        comment.patchComment(patchDto.getComment());
        commentRepository.save(comment);
    }

    public Comment find(long commentId) {
        return commentRepository.findById(commentId)
                .orElseThrow(() -> new NullPointerException("해당 댓글이 존재하지 않습니다."));
    }

    public void delete(Member member, long commentId) {
        Member writer = find(commentId).getWriter();
        if (member != writer) {
            //todo: 에러 발생 로직 작성자가 아닙니다
        }

        commentRepository.deleteById(commentId);
    }
}

