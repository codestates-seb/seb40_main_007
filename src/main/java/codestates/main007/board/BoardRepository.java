package codestates.main007.board;

import codestates.main007.member.Member;
import codestates.main007.member.query.MemberScore;
import codestates.main007.member.query.MemberStation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByWriter(Member member);

    List<Board> findByWriterAndStationId(Member member, long StationId);

    Integer countByWriter(Member member);

    List<MemberScore> findScoreByWriter(Member member);

    List<MemberStation> findStationIdByWriter(Member member);
}
