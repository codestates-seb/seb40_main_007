package codestates.main007.boardPlanner;

import codestates.main007.board.BoardService;
import codestates.main007.exception.BusinessLogicException;
import codestates.main007.exception.ExceptionCode;
import codestates.main007.member.MemberService;
import codestates.main007.planner.PlannerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardPlannerService {
    private final BoardService boardService;
    private final PlannerService plannerService;
    private final MemberService memberService;
    private final BoardPlannerRepository boardPlannerRepository;
    public void save(String accessToken, long boardId, long plannerId){
        if(memberService.findByAccessToken(accessToken).equals(plannerService.find(plannerId).getMember())){
            BoardPlanner boardPlanner = BoardPlanner.builder()
                    .board(boardService.find(boardId))
                    .planner(plannerService.find(plannerId))
                    .build();
            boardPlannerRepository.save(boardPlanner);
        }
        else throw new BusinessLogicException(ExceptionCode.MEMBER_UNAUTHORIZED);
    }
}
