package codestates.main007;

import codestates.main007.board.Board;
import codestates.main007.board.BoardDto;
import codestates.main007.board.BoardService;
import codestates.main007.boardMember.BoardMember;
import codestates.main007.boardMember.BoardMemberRepository;
import codestates.main007.dto.AdminDto;
import codestates.main007.member.Member;
import codestates.main007.member.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AdminController {
    private final MemberService memberService;
    private final BoardService boardService;

    private final BoardMemberRepository boardMemberRepository;

    @GetMapping("/adminPage")
    @ResponseStatus(HttpStatus.OK)
    public AdminDto getAdminPage(@RequestHeader(name = "Authorization") String accessToken) {
        memberService.verifyAdmin(accessToken);
        List<Member> totalMembers = memberService.findAllMembers();
        List<Board> totalBoards = boardService.findAllBoards();
        int todayBoard = 0;
        int monthBoard = 0;
        List<Board> reportedBoards = new ArrayList<>();
        ArrayList<Long>[] reportReason = new ArrayList[totalBoards.size()];

        for (Board board : totalBoards) {
            LocalDateTime writeDay = board.getCreatedAt().truncatedTo(ChronoUnit.DAYS);
            LocalDateTime today = LocalDateTime.now().truncatedTo(ChronoUnit.DAYS);

            int compareResultDay = today.compareTo(writeDay);
            if (compareResultDay == 0) {
                todayBoard++;
            }
            LocalDateTime monthAgo = LocalDateTime.now().minusMonths(1).truncatedTo(ChronoUnit.DAYS);

            int compareResultMonth = monthAgo.compareTo(writeDay);
            if (compareResultMonth == -1) {
                monthBoard++;
            }

            if (board.getReported()>=5){
                if (!reportedBoards.contains(board)){
                    reportedBoards.add(board);
                }
                List<BoardMember> boardMembers = boardMemberRepository.findAllByBoard(board);
                ArrayList<Long> reasons = new ArrayList<>();
                for (BoardMember boardMember : boardMembers){
                    reasons.add(boardMember.getReport());
                }
                reportReason[(int)board.getBoardId()] = reasons;
            }
        }

        List<BoardDto.Reported> reportedDtos = new ArrayList<>();
        for (Board board : reportedBoards){
            int reason1 = 0;
            int reason2 = 0;
            int reason3 = 0;
            int reason4 = 0;
            int reason5 = 0;

            ArrayList<Long> cnt = reportReason[(int)board.getBoardId()];
            for (long num : cnt){
                if (num==1){
                    reason1++;
                }else if (num==2){
                    reason2++;
                }else if (num==3){
                    reason3++;
                }else if (num==4){
                    reason4++;
                } else if (num==5) {
                    reason5++;
                }
            }

            BoardDto.ReportReasons reasons = BoardDto.ReportReasons
                    .builder()
                    .reason1(reason1)
                    .reason2(reason2)
                    .reason3(reason3)
                    .reason4(reason4)
                    .reason5(reason5)
                    .build();

            BoardDto.Reported dto = BoardDto.Reported.builder()
                    .title(board.getTitle())
                    .boardId(board.getBoardId())
                    .writer(board.getWriter().getName())
                    .writerId(board.getWriter().getMemberId())
                    .totalReport(board.getReported())
                    .reportCount(reasons)
                    .build();
            reportedDtos.add(dto);
        }



        return AdminDto.builder()
                .totalBoard(totalBoards.size())
                .todayBoard(todayBoard)
                .monthBoard(monthBoard)
                .totalMember(totalMembers.size())
                .reportedBoards(reportedDtos)
                .build();
    }
}
