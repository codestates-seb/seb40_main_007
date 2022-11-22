package codestates.main007.boardPlanner;

import codestates.main007.board.Board;
import codestates.main007.board.BoardMapper;
import codestates.main007.board.BoardService;
import codestates.main007.exception.BusinessLogicException;
import codestates.main007.exception.ExceptionCode;
import codestates.main007.member.MemberService;
import codestates.main007.planner.Planner;
import codestates.main007.planner.PlannerDto;
import codestates.main007.planner.PlannerMapper;
import codestates.main007.planner.PlannerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardPlannerService {
    private final BoardService boardService;
    private final PlannerService plannerService;
    private final MemberService memberService;
    private final BoardPlannerRepository boardPlannerRepository;
    private final BoardPlannerMapper boardPlannerMapper;
    private final PlannerMapper plannerMapper;
    private final BoardMapper boardMapper;

    public void save(String accessToken, long boardId, long plannerId) {
        if (memberService.findByAccessToken(accessToken).equals(plannerService.find(plannerId).getMember())) {
            BoardPlanner boardPlanner = BoardPlanner.builder()
                    .board(boardService.find(boardId))
                    .planner(plannerService.find(plannerId))
                    .build();
            boardPlannerRepository.save(boardPlanner);
        } else throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
    }

    public PlannerDto.MyPlannerResponse updateTempPriority(String accessToken,
                                                           long plannerId,
                                                           BoardPlannerDto.PriorityPatch priorityPatchDto) {
        List<Long> boardPlannerIds = plannerService.find(plannerId).getBoardPlanners().stream()
                .map(BoardPlanner::getBoardPlannerId)
                .collect(Collectors.toList());
        if (memberService.findByAccessToken(accessToken).equals(plannerService.find(plannerId).getMember())) {
            Map<Long, Integer> priorities = boardPlannerMapper.DtoToMap(priorityPatchDto);
            Planner planner = plannerService.find(plannerId);
            List<BoardPlanner> boardPlanners = plannerService.find(plannerId).getBoardPlanners();
            for (BoardPlanner boardPlanner : boardPlanners) {
                boardPlanner.setPriority(priorities.get(boardPlanner.getBoardPlannerId()));
            }
            return getMyPlannerResponse(plannerId, planner, boardPlanners);
        } else throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
    }

    public PlannerDto.MyPlannerResponse updatePriority(String accessToken,
                                                       long plannerId,
                                                       BoardPlannerDto.PriorityPatch priorityPatchDto) {
        List<Long> boardPlannerIds = plannerService.find(plannerId).getBoardPlanners().stream()
                .map(BoardPlanner::getBoardPlannerId)
                .collect(Collectors.toList());
        if (memberService.findByAccessToken(accessToken).equals(plannerService.find(plannerId).getMember())) {
            Map<Long, Integer> priorities = boardPlannerMapper.DtoToMap(priorityPatchDto);
            for (long boardPlannerId : boardPlannerIds) {
                BoardPlanner boardPlanner = find(boardPlannerId);
                boardPlanner.setPriority(priorities.get(boardPlannerId));
                boardPlannerRepository.save(boardPlanner);
            }
            Planner planner = plannerService.find(plannerId);
            List<BoardPlanner> boardPlanners = plannerService.find(plannerId).getBoardPlanners();
            return getMyPlannerResponse(plannerId, planner, boardPlanners);
        } else throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
    }

    private PlannerDto.MyPlannerResponse getMyPlannerResponse(long plannerId, Planner planner, List<BoardPlanner> boardPlanners) {
        PlannerDto.MyPlannerResponse myPlannerResponseDto = PlannerDto.MyPlannerResponse.builder()
                .plannerId(plannerId)
                .plannerName(planner.getPlannerName())
                .boards(boardMapper.boardsToBoardsResponse(planner.getBoardPlanners().stream()
                                .sorted(Comparator.comparing(BoardPlanner::getPriority))
                        .map(BoardPlanner::getBoard)
                        .collect(Collectors.toList()))
                )
                .timeBetweenBoards(
                        plannerService.getTimeBetweenBoardsList(
                                boardPlanners.stream()
                                        .sorted(Comparator.comparing(BoardPlanner::getPriority))
                                        .map(boardPlanner -> {
                                            Board board = boardPlanner.getBoard();
                                            return board;
                                        })
                                        .collect(Collectors.toList())
                        )
                ).build();
        return myPlannerResponseDto;
    }

    public void deleteBoardPlanner(String accessToken, long boardPlannerId) throws IOException {
        BoardPlanner boardPlanner = find(boardPlannerId);
        boardPlannerRepository.delete(boardPlanner);
    }

    public BoardPlanner find(long boardPlannerId) {
        return boardPlannerRepository.findById(boardPlannerId)
                .orElseThrow(() -> new NullPointerException("해당 플래너가 존재하지 않습니다."));
    }
}
