package codestates.main007.board;

import codestates.main007.member.Member;
import codestates.main007.member.query.MemberScore;
import codestates.main007.member.query.MemberStation;
import codestates.main007.tag.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByWriter(Member member);

    List<Board> findByAddressAndStationIdAndCategoryId(String address, long stationId, long categoryId);

    List<Board> findByStationIdAndCategoryId(long stationId, long categoryId);

    List<Board> findByWriterAndStationId(Member member,long stationId);

    Integer countByWriter(Member member);

    List<MemberScore> findScoreByWriter(Member member);

    List<MemberStation> findStationIdByWriter(Member member);

    Page<Board> findByStationId(long stationId, Pageable pageable);

    Page<Board> findByStationIdAndCategoryId(long stationId, long categoryId, Pageable pageable);

    Page<Board> findByStationIdAndCategoryIdAndTags(long stationId, long categoryId, Tag tag, Pageable pageable);

    List<Board> findAllByBoardIdIn(List<Long> boardIds);

    //삭제예정
//    Page<Board> findByWriter(Member member, Pageable pageable);
//    Page<Board> findByStationIdAndWriter(long stationId, Member member, Pageable pageable);


}
