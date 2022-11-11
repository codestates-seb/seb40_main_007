package codestates.main007.board;

import org.springframework.stereotype.Service;

@Service
public class BoardService {
    private final BoardRepository boardRepository;

    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    public void save(Board board) {

        this.boardRepository.save(board);
    }

    public void update(long boardId, Board board) {
        Board updatedBoard = find(boardId);

        updatedBoard.patchBoard(board.getTitle(),
                board.getReview(),
                board.getStar(),
                board.getLatitude(),
                board.getLongitude(),
                board.getStationId(),
                board.getCategoryId(),
                board.getAddress());

        this.boardRepository.save(updatedBoard);
    }

    public void delete(long boardId) {
        this.boardRepository.deleteById(boardId);
    }

    public Board find(long boardId) {
        return this.boardRepository.findById(boardId)
                .orElseThrow(() -> new NullPointerException("해당 게시글이 존재하지 않습니다."));
    }
}
