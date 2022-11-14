package codestates.main007.boardMember;

import codestates.main007.board.Board;
import codestates.main007.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardMemberRepository extends JpaRepository<BoardMember, Long> {
    Optional<BoardMember> findByMemberAndBoard(Member member, Board board);
}
