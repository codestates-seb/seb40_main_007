package codestates.main007.boardPlanner.service;

import codestates.main007.board.entity.Board;
import codestates.main007.board.mapper.BoardMapper;
import codestates.main007.board.service.BoardService;
import codestates.main007.boardPlanner.dto.BoardPlannerDto;
import codestates.main007.boardPlanner.entity.BoardPlanner;
import codestates.main007.boardPlanner.mapper.BoardPlannerMapper;
import codestates.main007.boardPlanner.repository.BoardPlannerRepository;
import codestates.main007.exception.ExceptionCode;
import codestates.main007.member.service.MemberService;
import codestates.main007.planner.dto.PlannerDto;
import codestates.main007.planner.entity.Planner;
import codestates.main007.planner.repository.PlannerRepository;
import codestates.main007.planner.service.PlannerService;
import codestates.main007.service.DistanceMeasuringService;
import codestates.main007.time.entity.Time;
import codestates.main007.time.service.TimeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;


@Service
@Transactional
@RequiredArgsConstructor
public class BoardPlannerService {
    private final BoardService boardService;
    private final PlannerService plannerService;
    private final MemberService memberService;
    private final TimeService timeService;
    private final DistanceMeasuringService distanceMeasuringService;
    private final BoardPlannerRepository boardPlannerRepository;

    private final PlannerRepository plannerRepository;
    private final BoardPlannerMapper boardPlannerMapper;
    private final BoardMapper boardMapper;

    public List<PlannerDto.MyPlannerWithBoards> save(String accessToken, long boardId, long plannerId) throws InterruptedException {
        Board board = boardService.find(boardId);
        Planner planner = plannerService.find(plannerId);
        BoardPlanner createdBoardPlanner = BoardPlanner.builder()
                .board(boardService.find(boardId))
                .planner(plannerService.find(plannerId))
                .priority((int) boardId)
                .build();
        if (memberService.findByAccessToken(accessToken).equals(plannerService.find(plannerId).getMember())) {
            if (planner.getBoardPlanners().size() >= 10) {
                throw new ResponseStatusException(ExceptionCode.PLANNER_SATURATED.getStatus(), ExceptionCode.PLANNER_SATURATED.getMessage(), new IllegalArgumentException());
            } else {

                List<BoardPlanner> list = boardPlannerRepository.findAllByBoardAndPlanner(board, planner);
                if (list.isEmpty()) {
                    boardPlannerRepository.save(createdBoardPlanner);
                    boardPlannerRepository.flush();
                } else {
                    throw new ResponseStatusException(ExceptionCode.BOARDPLANNER_EXISTS.getStatus(), ExceptionCode.BOARDPLANNER_EXISTS.getMessage(), new IllegalArgumentException());
                }
            }
        } else {
            throw new ResponseStatusException(ExceptionCode.MEMBER_UNAUTHORIZED.getStatus(), ExceptionCode.MEMBER_UNAUTHORIZED.getMessage(), new IllegalArgumentException());
        }
        List<Long> boardIds = planner.getBoardPlanners().stream()
                .map(boardPlanner -> boardPlanner.getBoard().getBoardId())
                .collect(Collectors.toList());
        if (boardIds.size() > 1){
            Long fromId = boardIds.get(boardIds.size() - 1);
            Board fromBoard = boardService.find(fromId);
            if (board.getStationId()==fromBoard.getStationId()){
                PlannerDto.Time timeType = distanceMeasuringService.getPlannerTime(fromBoard.getLatitude(),board.getLatitude(),fromBoard.getLongitude(),board.getLongitude());
                timeService.save(fromId,boardId,timeType.getTime(),timeType.getType());
            } else {
                timeService.save(fromId,boardId,0 ,"train");
            }

        }

        boardIds.add(createdBoardPlanner.getBoard().getBoardId());
        List<PlannerDto.MyPlannerWithBoards> responses = plannerService.getMyPlannerWithBoards(accessToken);
        PlannerDto.MyPlannerWithBoards response = PlannerDto.MyPlannerWithBoards.builder()
                .plannerId(plannerId)
                .plannerName(planner.getPlannerName())
                .boardIds(boardIds)
                .build();
        for (int i = 0; i < responses.size(); i++) {
            if (responses.get(i).getPlannerId() == plannerId) {
                responses.set(i, response);
            }
        }
        return responses;
    }


    public PlannerDto.MyPlannerResponse updatePriority(String accessToken,
                                                       long plannerId,
                                                       BoardPlannerDto.PriorityPatch priorityPatchDto) throws InterruptedException {
        if (memberService.findByAccessToken(accessToken).equals(plannerService.find(plannerId).getMember())) {
            List<Long> boardIds = plannerService.find(plannerId).getBoardPlanners().stream()
                    .map(boardPlanner -> boardPlanner.getBoard().getBoardId())
                    .collect(Collectors.toList());
            List<Integer> priorities = boardPlannerMapper.DtoToMap(priorityPatchDto);
            for (long boardId : boardIds) {
                if (!priorities.contains((int) boardId)) {
                    boardPlannerRepository.deleteById(boardPlannerRepository.findBoardPlannerByBoardAndPlanner(
                            boardService.find(boardId),
                            plannerService.find(plannerId)).getBoardPlannerId());
                }
            }
            boardPlannerRepository.flush();
            for (int i = 0; i < priorities.size(); i++) {
                BoardPlanner boardPlanner = boardPlannerRepository.findBoardPlannerByBoardAndPlanner(
                        boardService.find(priorities.get(i))
                        , plannerService.find(plannerId));
                boardPlanner.setPriority(i);
                boardPlannerRepository.save(boardPlanner);
            }
            Planner planner = plannerService.find(plannerId);
            List<BoardPlanner> boardPlanners = boardPlannerRepository.findAllByPlanner(planner);
            return getMyPlannerResponse(plannerId, planner, boardPlanners);
        } else
            throw new ResponseStatusException(ExceptionCode.MEMBER_UNAUTHORIZED.getStatus(), ExceptionCode.MEMBER_UNAUTHORIZED.getMessage(), new IllegalArgumentException());
    }

    private PlannerDto.MyPlannerResponse getMyPlannerResponse(long plannerId, Planner planner, List<BoardPlanner> boardPlanners) throws InterruptedException {
        List<PlannerDto.Time> timeList = plannerService.getTimeBetweenBoardsList(
                boardPlanners.stream()
                        .sorted(Comparator.comparing(BoardPlanner::getPriority))
                        .map(BoardPlanner::getBoard)
                        .collect(Collectors.toList()));
        return plannerService.getMyPlannerResponse(plannerId, planner, timeList, boardMapper);
    }

    public BoardPlanner find(long boardPlannerId) {
        return boardPlannerRepository.findById(boardPlannerId)
                .orElseThrow(() -> new ResponseStatusException(ExceptionCode.BOARDPLANNER_NOT_FOUND.getStatus(), ExceptionCode.BOARDPLANNER_NOT_FOUND.getMessage(), new IllegalArgumentException()));
    }
}
