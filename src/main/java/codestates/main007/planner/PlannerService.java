package codestates.main007.planner;

import codestates.main007.board.Board;
import codestates.main007.board.BoardMapper;
import codestates.main007.boardPlanner.BoardPlanner;
import codestates.main007.exception.BusinessLogicException;
import codestates.main007.exception.ExceptionCode;
import codestates.main007.member.Member;
import codestates.main007.member.MemberService;
import codestates.main007.service.DistanceMeasuringService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
    private final DistanceMeasuringService distanceMeasuringService;
    private final PlannerMapper plannerMapper;
    private final BoardMapper boardMapper;

    public List<PlannerDto.MyPlannersResponse> save(String accessToken, PlannerDto.Input inputDto) throws IOException {
        String plannerName = plannerMapper.inputDtoToentity(inputDto).getPlannerName();
        if(plannerRepository.findByPlannerName(plannerName).isEmpty()){
            Planner createdPlanner = Planner.builder()
                    .plannerName(plannerName)
                    .member(memberService.findByAccessToken(accessToken))
                    .build();
            plannerRepository.save(createdPlanner);

            return getMyPlanners(accessToken);
        }
        else throw new BusinessLogicException(ExceptionCode.PLANNER_EXISTS);

    }

    public List<PlannerDto.MyPlannersResponse> update(String accessToken, long plannerId, PlannerDto.Input patchDto) {
        if (memberService.findByAccessToken(accessToken).equals(find(plannerId).getMember())) {
            Planner updatedPlanner = find(plannerId);
            updatedPlanner.patchPlanner(patchDto.getPlannerName());
            plannerRepository.save(updatedPlanner);
            return getMyPlanners(accessToken);
        } else throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
    }

    public PlannerDto.MyPlannerResponse getMyPlannerPage(String accessToken, long plannerId) throws InterruptedException {
        Planner planner = find(plannerId);
        List<BoardPlanner> boardPlanners = find(plannerId).getBoardPlanners();
        List<Integer> timeList = getTimeBetweenBoardsList(
                boardPlanners.stream()
                        .sorted(Comparator.comparing(BoardPlanner::getPriority))
                        .map(BoardPlanner::getBoard)
                        .collect(Collectors.toList()));
        if (memberService.findByAccessToken(accessToken).equals(planner.getMember())) {
            return getMyPlannerResponse(plannerId, planner, timeList, boardMapper);
        } else throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
    }

    public PlannerDto.MyPlannerResponse getMyPlannerResponse(long plannerId, Planner planner, List<Integer> timeList, BoardMapper boardMapper) {
        PlannerDto.MyPlannerResponse responseDto = PlannerDto.MyPlannerResponse.builder()
                .plannerId(plannerId)
                .plannerName(planner.getPlannerName())
                .boards(boardMapper.boardsToBoardsResponse(planner.getBoardPlanners().stream()
                        .sorted(Comparator.comparing(BoardPlanner::getPriority))
                        .map(BoardPlanner::getBoard)
                        .collect(Collectors.toList()))
                )
                .timeBetweenBoards(timeList)
                .wholeTime(timeList.stream().mapToInt(t -> t).sum())
                .build();
        return responseDto;
    }

    public List<PlannerDto.MyPlannersResponse> getMyPlanners(String accessToken){
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
                .orElseThrow(() -> new NullPointerException("해당 플래너가 존재하지 않습니다."));
    }
    public List<Integer> getTimeBetweenBoardsList(List<Board> boards) throws InterruptedException {
        List<Integer> timeList = new ArrayList<>();
        for (int i = 0; i < boards.size()-1; i++) {
            timeList.add(
                    getTimeBetweenBoards(boards.get(i), boards.get(i+1))
            );
            Thread.sleep(400);
        }
        return timeList;
    }

    public int getTimeBetweenBoards(Board from, Board to) {
        return distanceMeasuringService.getTime(from.getLatitude(),
                from.getLongitude(),
                to.getLatitude(),
                to.getLongitude());
    }
}
