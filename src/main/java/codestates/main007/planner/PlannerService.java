package codestates.main007.planner;

import codestates.main007.board.Board;
import codestates.main007.exception.BusinessLogicException;
import codestates.main007.exception.ExceptionCode;
import codestates.main007.member.MemberService;
import codestates.main007.service.DistanceMeasuringService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;

@Service
@Transactional
@RequiredArgsConstructor
public class PlannerService {
    private final PlannerRepository plannerRepository;
    private final MemberService memberService;
    private final DistanceMeasuringService distanceMeasuringService;

    public void save(String accessToken) throws IOException {
        Planner createdPlanner = Planner.builder()
                .plannerName("MyPlanner" + (plannerRepository.findAll().size() + 1))
                .member(memberService.findByAccessToken(accessToken))
                .build();
        plannerRepository.save(createdPlanner);
    }
    public void update(String accessToken, long plannerId, PlannerDto.Patch patchDto) {
        if(memberService.findByAccessToken(accessToken).equals(find(plannerId).getMember())){
            Planner updatedPlanner = find(plannerId);
            updatedPlanner.patchPlanner(patchDto.getPlannerName());
            plannerRepository.save(updatedPlanner);
        }
        else throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
    }
    public Planner find(long plannerId) {
        return plannerRepository.findById(plannerId)
                .orElseThrow(() -> new NullPointerException("해당 플래너가 존재하지 않습니다."));
    }

    public int getTimeBetweenBoards(Board from, Board to) {
        return distanceMeasuringService.getTime(from.getLatitude(),
                from.getLongitude(),
                to.getLatitude(),
                to.getLongitude());
    }
}
