package codestates.main007.board;

import codestates.main007.member.Member;
import codestates.main007.member.query.MemberScore;
import codestates.main007.member.query.MemberStation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByWriter(Member member);

    Page<Board> findByWriter(Member member, Pageable pageable);

    Integer countByWriter(Member member);

    List<MemberScore> findScoreByWriter(Member member);

    List<MemberStation> findStationIdByWriter(Member member);

    Page<Board> findByStationIdAndCategoryId(long stationId, long categoryId, Pageable pageable);

    Page<Board> findByStationIdAndWriter(long stationId, Member member, Pageable pageable);
}
