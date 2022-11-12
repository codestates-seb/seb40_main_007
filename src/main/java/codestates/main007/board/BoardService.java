package codestates.main007.board;

import codestates.main007.member.Member;
import codestates.main007.member.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;

    private final MemberService memberService;

    public void save(String accessToken, Board board) {
        Member writer = memberService.findByAccessToken(accessToken);
        board.setWriter(writer);

        boardRepository.save(board);
    }

    public void update(String accessToken, long boardId, BoardDto.Input patch) {
        Board updatedBoard = find(boardId);
        Member member = memberService.findByAccessToken(accessToken);

        Member writer = updatedBoard.getWriter();
        if (member != writer) {
            //todo: 에러 발생 로직 작성자가 아닙니다
        }

        updatedBoard.patchBoard(patch.getTitle(),
                patch.getReview(),
                patch.getStar(),
                patch.getLatitude(),
                patch.getLongitude(),
                patch.getStationId(),
                patch.getCategoryId(),
                patch.getAddress());

        boardRepository.save(updatedBoard);
    }

    public void delete(String accessToken, long boardId) {
        Member writer = find(boardId).getWriter();
        Member member = memberService.findByAccessToken(accessToken);

        if (member != writer) {
            //todo: 에러 발생 로직 작성자가 아닙니다
        }

        boardRepository.deleteById(boardId);
    }

    public Board find(long boardId) {
        return boardRepository.findById(boardId)
                .orElseThrow(() -> new NullPointerException("해당 게시글이 존재하지 않습니다."));
    }

    public List<Board> findByMember(Member member) {
        return boardRepository.findByWriter(member);
    }

    public boolean findIsDibs(String accessToken, long boardId) {
        Member member = memberService.findByAccessToken(accessToken);
        //todo: 이 멤버가 해당 글을 찜했는지 여부 확인하여 리턴

        // 임시 리턴값
        return true;
    }

    public boolean dibs(String accessToken, long boardId) {
        Member member = memberService.findByAccessToken(accessToken);
        //todo: 찜 기능 추가

        // 임시 리턴값
        return true;
    }

    public void upVote(String accessToken, long boardId) {
        Board board = find(boardId);
        Member member = memberService.findByAccessToken(accessToken);
        //todo : 추천 기능 추가
    }

    public void downVote(String accessToken, long boardId) {
        Board board = find(boardId);
        Member member = memberService.findByAccessToken(accessToken);
        //todo : 비추천 기능 추가
    }
}
