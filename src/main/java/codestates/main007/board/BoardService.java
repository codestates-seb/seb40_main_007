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

    public void delete(Member member, long boardId) {
        Member writer = find(boardId).getWriter();
        if (member != writer) {
            //todo: 에러 발생 로직 작성자가 아닙니다
        }

        boardRepository.deleteById(boardId);
    }

    public Board find(long boardId) {
        return boardRepository.findById(boardId)
                .orElseThrow(() -> new NullPointerException("해당 게시글이 존재하지 않습니다."));
    }

    public boolean findIsDibs(Member member, long boardId) {
        //todo: 이 멤버가 해당 글을 찜했는지 여부 확인하여 리턴

        // 임시 리턴값
        return true;
    }

    public boolean dibs(Member member, long boardId){
        //todo: 찜 기능 추가

        // 임시 리턴값
        return true;
    }

    public void upVote(Member member,long boardId){
        Board board = find(boardId);

        //todo : 추천 기능 추가
    }

    public void downVote(Member member,long boardId){
        Board board = find(boardId);

        //todo : 비추천 기능 추가
    }
}
