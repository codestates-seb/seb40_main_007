package codestates.main007.board;

import codestates.main007.boardMember.BoardMemberService;
import codestates.main007.member.Member;
import codestates.main007.member.MemberService;
import codestates.main007.service.DistanceMeasuringService;
import codestates.main007.station.Station;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;
    private final MemberService memberService;
    private final DistanceMeasuringService distanceService;

    private final BoardMemberService boardMemberService;

    public void save(String accessToken, Board board) {
        Member writer = memberService.findByAccessToken(accessToken);
        board.setWriter(writer);

        Station station = new Station((int) board.getStationId());
        double startLat = station.getLatitude();
        double startLong = station.getLongitude();
        double endLat = board.getLatitude();
        double endLong = board.getLongitude();

        board.setTimeFromStation(distanceService.getTime(startLat, startLong, endLat, endLong));

        boardRepository.save(board);
    }

    public void update(String accessToken, long boardId, BoardDto.Input patch) {
        Board updatedBoard = find(boardId);

        updatedBoard.patchBoard(patch.getTitle(),
                patch.getReview(),
                patch.getStar(),
                patch.getLatitude(),
                patch.getLongitude(),
                patch.getStationId(),
                patch.getCategoryId(),
                patch.getAddress());

        if (patch.getLatitude() != null || patch.getLongitude() != null) {
            Station station = new Station((int) updatedBoard.getStationId());
            double startLat = station.getLatitude();
            double startLong = station.getLongitude();
            double endLat = updatedBoard.getLatitude();
            double endLong = updatedBoard.getLongitude();

            updatedBoard.setTimeFromStation(distanceService.getTime(startLat, startLong, endLat, endLong));
        }

        boardRepository.save(updatedBoard);
    }

    public void delete(String accessToken, long boardId) {
        Member writer = find(boardId).getWriter();
        Member member = memberService.findByAccessToken(accessToken);

        boardRepository.deleteById(boardId);
    }

    public Board find(long boardId) {
        return boardRepository.findById(boardId)
                .orElseThrow(() -> new NullPointerException("해당 게시글이 존재하지 않습니다."));
    }

    public Page<Board> findBoardPage(long stationId, long categoryId, int page, int size, Sort sort) {
        return boardRepository.findByStationIdAndCategoryId(stationId, categoryId,
                PageRequest.of(page, size, sort));
    }

    public boolean checkDibs(String accessToken, long boardId) {
        Member member = memberService.findByAccessToken(accessToken);

        return boardMemberService.checkDibs(member, find(boardId));
    }

    public boolean dibs(String accessToken, long boardId) {
        Member member = memberService.findByAccessToken(accessToken);
        //todo: 찜 기능 추가

        // 임시 리턴값
        return true;
    }

    public void upVote(String accessToken, long boardId) {
        Board board = find(boardId);
        Member member = memberService.findByAccessToken(accessToken);
        //todo : 추천 기능 추가
    }

    public void downVote(String accessToken, long boardId) {
        Board board = find(boardId);
        Member member = memberService.findByAccessToken(accessToken);
        //todo : 비추천 기능 추가
    }
}
