package codestates.main007.boardImage.repository;

import codestates.main007.board.entity.Board;
import codestates.main007.boardImage.entity.BoardImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardImageRepository extends JpaRepository<BoardImage, Long> {
    BoardImage save(BoardImage boardPicture);

    List<BoardImage> findAllByBoard(Board board);

    BoardImage findByStoredFilePath(String storedFilePath);
}
