package codestates.main007;

import codestates.main007.board.*;
import codestates.main007.dto.AdminDto;
import codestates.main007.dto.PageDto;
import codestates.main007.member.Member;
import codestates.main007.member.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class MainController {
    private final BoardService boardService;
    private final MemberService memberService;
    private final BoardMapper boardMapper;

    @GetMapping("/{station-id}/{category-id}/{sort}")
    @ResponseStatus(HttpStatus.OK)
    public PageDto getBoardByCategory(@RequestHeader(name = "Authorization", required = false) String accessToken,
                                      @PathVariable("station-id") long stationId,
                                      @PathVariable("category-id") long categoryId,
                                      @PathVariable String sort,
                                      @RequestParam int page,
                                      @RequestParam int size) {
        Sort defaultSort = Sort.by(sort).descending();
        if (sort.equals("default")) {
            defaultSort = Sort.by("boardId").descending();
        } else if (sort.equals("date")) {
            defaultSort = Sort.by("createdAt").descending();
        } else if (sort.equals("time")) {
            defaultSort = Sort.by("timeFromStation").ascending();
        }
        Page<Board> boardPage = boardService.findBoardPage(stationId, categoryId, page - 1, size, defaultSort);
        List<Board> boards = boardPage.getContent();
        List<BoardDto.boardsResponse> responses = boardMapper.boardsToBoardsResponse(boards);

        if (accessToken != null) {
            responses = boardService.listCheckDibs(accessToken, responses);
        }

        return new PageDto(responses, boardPage);
    }

    @GetMapping("/{station-id}/{category-id}/{sort}/search")
    @ResponseStatus(HttpStatus.OK)
    public PageDto getBoardByTag(@RequestHeader(name = "Authorization", required = false) String accessToken,
                                 @PathVariable("station-id") long stationId,
                                 @PathVariable("category-id") long categoryId,
                                 @PathVariable String sort,
                                 @RequestParam int page,
                                 @RequestParam int size,
                                 @RequestParam("tag") long tagId) {
        Sort defaultSort = Sort.by(sort).descending();
        if (sort.equals("default")) {
            defaultSort = Sort.by("boardId").descending();
        } else if (sort.equals("date")) {
            defaultSort = Sort.by("createdAt").descending();
        } else if (sort.equals("time")) {
            defaultSort = Sort.by("timeFromStation").ascending();
        }
        Page<Board> boardPage = boardService.findBoardPageByTag(stationId, categoryId, page - 1, size, defaultSort, tagId);
        List<Board> boards = boardPage.getContent();
        List<BoardDto.boardsResponse> responses = boardMapper.boardsToBoardsResponse(boards);

        if (accessToken != null) {
            responses = boardService.listCheckDibs(accessToken, responses);
        }

        return new PageDto(responses, boardPage);
    }

    @GetMapping("/admin")
    @ResponseStatus(HttpStatus.OK)
    public AdminDto getAdminPage(@RequestHeader(name = "Authorization") String accessToken) {
        List<Member> totalMembers = memberService.findAllMembers();
        List<Board> totalBoards = boardService.findAllBoards();
        int todayBoard = 0;
        int monthBoard = 0;
        for (Board board : totalBoards) {
            LocalDateTime dayDate1 = board.getCreatedAt().truncatedTo(ChronoUnit.DAYS);
            LocalDateTime dayDate2 = LocalDateTime.now().truncatedTo(ChronoUnit.DAYS);

            int compareResultDay = dayDate1.compareTo(dayDate2);
            if (compareResultDay == 0) {
                todayBoard++;
            }
            LocalDateTime dayMonth1 = board.getCreatedAt().truncatedTo(ChronoUnit.MONTHS);
            LocalDateTime dayMonth2 = LocalDateTime.now().truncatedTo(ChronoUnit.MONTHS);
            int compareResultMonth = dayMonth1.compareTo(dayMonth2);
            if (compareResultMonth == 0) {
                monthBoard++;
            }
        }
        return AdminDto.builder()
                .totalBoard(totalBoards.size())
                .todayBoard(todayBoard)
                .monthBoard(monthBoard)
                .totalMember(totalMembers.size())
                .build();
    }
}
