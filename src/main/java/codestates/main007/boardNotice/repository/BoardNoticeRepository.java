package codestates.main007.boardNotice.repository;

import codestates.main007.boardNotice.entity.BoardNotice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardNoticeRepository extends JpaRepository<BoardNotice, Long> {
}
