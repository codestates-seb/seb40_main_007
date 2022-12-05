package codestates.main007.boardNotice.repository;

import codestates.main007.board.entity.Board;
import codestates.main007.boardNotice.entity.BoardNotice;
import codestates.main007.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardNoticeRepository extends JpaRepository<BoardNotice, Long> {
    List<BoardNotice> findByBoardMemberId(long boardMemberId);

    void deleteBySenderAndBoardAndNotice(Member sender, Board board, String notice);
}
