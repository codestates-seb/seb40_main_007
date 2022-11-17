package codestates.main007.boardImage;

import codestates.main007.board.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardImageRepository extends JpaRepository<BoardImage,Long> {
    BoardImage save(BoardImage boardPicture);

    List<BoardImage> findAllByBoard(Board board);
}
