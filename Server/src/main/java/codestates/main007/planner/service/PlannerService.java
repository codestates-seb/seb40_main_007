package codestates.main007.planner.service;

import codestates.main007.board.entity.Board;
import codestates.main007.board.mapper.BoardMapper;
import codestates.main007.board.repository.BoardRepository;
import codestates.main007.boardPlanner.entity.BoardPlanner;
import codestates.main007.exception.ExceptionCode;
import codestates.main007.member.entity.Member;
import codestates.main007.member.service.MemberService;
import codestates.main007.planner.dto.PlannerDto;
import codestates.main007.planner.entity.Planner;
import codestates.main007.planner.mapper.PlannerMapper;
import codestates.main007.planner.repository.PlannerRepository;
import codestates.main007.service.DistanceMeasuringService;
import codestates.main007.time.entity.Time;
import codestates.main007.time.service.TimeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class PlannerService {
    private final PlannerRepository plannerRepository;
    private final MemberService memberService;
    private final BoardRepository boardRepository;
    private final TimeService timeService;
    private final DistanceMeasuringService distanceMeasuringService;
    private final PlannerMapper plannerMapper;
    private final BoardMapper boardMapper;

    public List<PlannerDto.MyPlannersResponse> save(String accessToken, PlannerDto.Input inputDto) throws IOException {
        String plannerName = plannerMapper.inputDtoToentity(inputDto).getPlannerName();
        Member member = memberService.findByAccessToken(accessToken);
        if (plannerRepository.findByMemberAndPlannerName(member, plannerName).isEmpty()) {
            Planner createdPlanner = Planner.builder()
                    .plannerName(plannerName)
                    .member(member)
                    .build();
            plannerRepository.save(createdPlanner);

            return getMyPlanners(accessToken);
        } else
            throw new ResponseStatusException(ExceptionCode.PLANNER_EXISTS.getStatus(), ExceptionCode.PLANNER_EXISTS.getMessage(), new IllegalArgumentException());

    }

    public void save(Planner planner) {
        plannerRepository.save(planner);
    }


    public List<PlannerDto.MyPlannersResponse> update(String accessToken, long plannerId, PlannerDto.Input patchDto) {
        if (memberService.findByAccessToken(accessToken).equals(find(plannerId).getMember())) {
            Planner updatedPlanner = find(plannerId);
            updatedPlanner.patchPlanner(patchDto.getPlannerName());
            plannerRepository.save(updatedPlanner);
            return getMyPlanners(accessToken);
        } else
            throw new ResponseStatusException(ExceptionCode.MEMBER_UNAUTHORIZED.getStatus(), ExceptionCode.MEMBER_UNAUTHORIZED.getMessage(), new IllegalArgumentException());
    }

    public PlannerDto.MyPlannerResponse getMyPlannerPage(String accessToken, long plannerId) throws InterruptedException {
        Member member = memberService.findByAccessToken(accessToken);
        Planner planner = find(plannerId);
        List<BoardPlanner> boardPlanners = find(plannerId).getBoardPlanners();
        List<PlannerDto.Time> timeList = getTimeBetweenBoardsList(
                boardPlanners.stream()
                        .sorted(Comparator.comparing(BoardPlanner::getPriority))
                        .map(BoardPlanner::getBoard)
                        .collect(Collectors.toList()));
        if (member.equals(planner.getMember())) {
            return getMyPlannerResponse(plannerId, planner, timeList, boardMapper);
        } else
            throw new ResponseStatusException(ExceptionCode.MEMBER_UNAUTHORIZED.getStatus(), ExceptionCode.MEMBER_UNAUTHORIZED.getMessage(), new IllegalArgumentException());
    }

    public PlannerDto.MyPlannerResponse getMyPlannerResponse(long plannerId, Planner planner, List<PlannerDto.Time> timeList, BoardMapper boardMapper) {
        int wholeTme = 0;
        for (PlannerDto.Time time : timeList) {
            wholeTme += time.getTime();

        }
        PlannerDto.MyPlannerResponse responseDto = PlannerDto.MyPlannerResponse.builder()
                .plannerId(plannerId)
                .plannerName(planner.getPlannerName())
                .boards(boardMapper.boardsToBoardsResponse(planner.getBoardPlanners().stream()
                        .sorted(Comparator.comparing(BoardPlanner::getPriority))
                        .map(BoardPlanner::getBoard)
                        .collect(Collectors.toList()))
                )
                .timeBetweenBoards(timeList)
                .wholeTime(wholeTme)
                .build();
        return responseDto;
    }

    public List<PlannerDto.MyPlannerWithBoards> getMyPlannerWithBoards(String accessToken) {
        Member member = memberService.findByAccessToken(accessToken);
        List<Planner> planners = plannerRepository.findAllByMember(member);
        List<PlannerDto.MyPlannerWithBoards> responses = new ArrayList<>();
        for (int i = 0; i < planners.size(); i++) {
            PlannerDto.MyPlannerWithBoards response = PlannerDto.MyPlannerWithBoards.builder()
                    .plannerId(planners.get(i).getPlannerId())
                    .plannerName(planners.get(i).getPlannerName())
                    .boardIds(planners.get(i).getBoardPlanners().stream()
                            .map(boardPlanner -> boardPlanner.getBoard().getBoardId())
                            .collect(Collectors.toList()))
                    .build();
            responses.add(response);
        }
        return responses;
    }

    public List<PlannerDto.MyPlannersResponse> getMyPlanners(String accessToken) {
        Member member = memberService.findByAccessToken(accessToken);
        List<Planner> planners = plannerRepository.findAllByMember(member);
        return plannerMapper.entityListToResponseDtoList(planners);
    }

    public List<PlannerDto.MyPlannersResponse> delete(String accessToken, long plannerId) {
        Planner planner = find(plannerId);
        plannerRepository.delete(planner);
        return getMyPlanners(accessToken);
    }

    public Planner find(long plannerId) {
        return plannerRepository.findById(plannerId)
                .orElseThrow(() -> new ResponseStatusException(ExceptionCode.PLANNER_NOT_FOUND.getStatus(), ExceptionCode.PLANNER_NOT_FOUND.getMessage(), new IllegalArgumentException()));
    }

    public List<PlannerDto.Time> getTimeBetweenBoardsList(List<Board> boards) throws InterruptedException {
        List<PlannerDto.Time> timeList = new ArrayList<>();
        for (int i = 0; i < boards.size() - 1; i++) {
            long fromId = boards.get(i).getBoardId();
            long toId = boards.get(i + 1).getBoardId();
            Time time = timeService.find(fromId, toId);

            PlannerDto.Time timeDto = PlannerDto.Time.builder()
                    .time(time.getTime())
                    .type(time.getType())
                    .build();

            timeList.add(timeDto);
        }

        return timeList;
    }

    public PlannerDto.Time getTimeBetweenBoards(Board from, Board to) throws InterruptedException {
        return distanceMeasuringService.getPlannerTime(from.getLatitude(),
                from.getLongitude(),
                to.getLatitude(),
                to.getLongitude());
    }
}
