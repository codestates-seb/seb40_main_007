package codestates.main007.board;

import codestates.main007.member.Member;
import org.springframework.stereotype.Service;

@Service
public class BoardService {
    private final BoardRepository boardRepository;

    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    public void save(Board board) {

        boardRepository.save(board);
    }

    public void update(Member member, long boardId, BoardDto.Input patch) {
        Board updatedBoard = find(boardId);

        if (member.getMemberId()!=updatedBoard.getWriter().getMemberId()){
            //todo: 에러 발생 로직
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
        boardRepository.deleteById(boardId);
    }

    public Board find(long boardId) {
        return boardRepository.findById(boardId)
                .orElseThrow(() -> new NullPointerException("해당 게시글이 존재하지 않습니다."));
    }

    public boolean findIsDibs(String accessToken, long boardId) {
        //todo: 액세스토큰으로 찾은 유저가 해당 글을 찜했는지 여부 확인하여 리턴

        // 임시 리턴값
        return true;
    }
}
