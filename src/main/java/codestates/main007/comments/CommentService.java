package codestates.main007.comments;

import codestates.main007.board.Board;
import codestates.main007.board.BoardService;
import codestates.main007.member.Member;
import codestates.main007.member.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;

    private final MemberService memberService;

    private final BoardService boardService;

    public void save(String accessToken, long boardId, Comment comment) {
        Member writer = memberService.findByAccessToken(accessToken);
        Board board = boardService.find(boardId);

        comment.setWriterAndBoard(writer, board);

        commentRepository.save(comment);
    }

    public void update(String accessToken, CommentDto.Input patchDto, long commentId) {
        Member member = memberService.findByAccessToken(accessToken);
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

    public void delete(String accessToken, long commentId) {
        Member member = memberService.findByAccessToken(accessToken);
        Member writer = find(commentId).getWriter();
        if (member != writer) {
            //todo: 에러 발생 로직 작성자가 아닙니다
        }

        commentRepository.deleteById(commentId);
    }
}

