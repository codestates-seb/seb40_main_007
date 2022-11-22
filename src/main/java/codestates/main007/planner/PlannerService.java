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

    public void save(String accessToken, PlannerDto.Input inputDto) throws IOException {
        Planner createdPlanner = Planner.builder()
                .plannerName(plannerMapper.inputDtoToentity(inputDto).getPlannerName())
                .member(memberService.findByAccessToken(accessToken))
                .build();
        Member member = memberService.findByAccessToken(accessToken);
        plannerRepository.save(createdPlanner);
    }

    public void update(String accessToken, long plannerId, PlannerDto.Input patchDto) {
        if (memberService.findByAccessToken(accessToken).equals(find(plannerId).getMember())) {
            Planner updatedPlanner = find(plannerId);
            updatedPlanner.patchPlanner(patchDto.getPlannerName());
            plannerRepository.save(updatedPlanner);
        } else throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
    }

    public PlannerDto.MyPlannerResponse getMyPlannerPage(String accessToken, long plannerId) {
        Planner planner = find(plannerId);
        if (memberService.findByAccessToken(accessToken).equals(planner.getMember())) {
            PlannerDto.MyPlannerResponse responseDto = PlannerDto.MyPlannerResponse.builder()
                    .plannerId(plannerId)
                    .plannerName(planner.getPlannerName())
                    .boards(boardMapper.boardsToBoardsResponse(planner.getBoardPlanners().stream()
                            .sorted(Comparator.comparing(BoardPlanner::getPriority))
                            .map(BoardPlanner::getBoard)
                            .collect(Collectors.toList()))
                    )
                    .build();
            return responseDto;
        } else throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
    }

    public void deletePlanner(String accessToken, long plannerId) throws IOException {
        Planner planner = find(plannerId);
        plannerRepository.delete(planner);
    }

    public Planner find(long plannerId) {
        return plannerRepository.findById(plannerId)
                .orElseThrow(() -> new NullPointerException("해당 플래너가 존재하지 않습니다."));
    }
    public List<Integer> getTimeBetweenBoardsList(List<Board> boards){
        List<Integer> timeList = new ArrayList<>();
        for (int i = 0; i < boards.size()-1; i++) {
            timeList.add(
                    getTimeBetweenBoards(boards.get(i), boards.get(i+1))
            );
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
