package codestates.main007.board.repository;

import codestates.main007.board.entity.Board;
import codestates.main007.member.entity.Member;
import codestates.main007.member.query.MemberScore;
import codestates.main007.member.query.MemberStation;
import codestates.main007.tag.entity.Tag;
import org.locationtech.jts.geom.Point;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByWriter(Member member);

    List<Board> findByAddressAndStationIdAndCategoryId(String address, long stationId, long categoryId);

    List<Board> findByStationIdAndCategoryId(long stationId, long categoryId);

    List<Board> findByWriterAndStationId(Member member, long stationId);

    Integer countByWriter(Member member);

    List<MemberScore> findScoreByWriter(Member member);

    List<MemberStation> findStationIdByWriter(Member member);

    Page<Board> findByStationId(long stationId, Pageable pageable);

    Page<Board> findByStationIdAndCategoryId(long stationId, long categoryId, Pageable pageable);

    Page<Board> findByStationIdAndCategoryIdAndTags(long stationId, long categoryId, Tag tag, Pageable pageable);

    List<Board> findAllByBoardIdIn(List<Long> boardIds);

    Integer countByStationId(long stationId);

    List<Board> findByScoreGreaterThan(int length);

    List<Board> findByScoreLessThan(int length);
    @Query(value = "SELECT * from board b where ST_Distance_Sphere(geography, b.geography = :point) <= 500", nativeQuery = true)
    List<Board> findAround(@Param("point")String point);
}
