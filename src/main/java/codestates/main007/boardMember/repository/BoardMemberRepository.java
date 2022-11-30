package codestates.main007.boardMember.repository;

import codestates.main007.board.entity.Board;
import codestates.main007.boardMember.entity.BoardMember;
import codestates.main007.exception.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BoardMemberRepository extends JpaRepository<BoardMember, Long> {
    Optional<BoardMember> findByMemberAndBoard(Member member, Board board);

    List<BoardMember> findByMemberAndDibsTrue(Member member);

    List<BoardMember> findAllByBoard(Board board);
}
