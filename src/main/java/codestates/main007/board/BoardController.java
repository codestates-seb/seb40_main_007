package codestates.main007.board;

import codestates.main007.member.Member;
import codestates.main007.member.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/boards")
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
    private final MemberService memberService;
    private final BoardMapper boardMapper;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void postBoard(@RequestHeader(name = "Authorization") String accessToken,
                          @RequestBody BoardDto.Input postDto) {
        Member member = memberService.findByAccessToken(accessToken);

        Board board = boardMapper.boardDtoToBoard(postDto, member);
        boardService.save(board);
    }

    @PatchMapping("/{board-id}")
    @ResponseStatus(HttpStatus.OK)
    public void patchBoard(@RequestHeader(name = "Authorization") String accessToken,
                           @PathVariable("board-id") long boardId,
                           @RequestBody BoardDto.Input patchDto) {
        Member member = memberService.findByAccessToken(accessToken);

        boardService.update(member, boardId, patchDto);
    }

    @DeleteMapping("/{board-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBoard(@RequestHeader(name = "Authorization") String accessToken,
                            @PathVariable("board-id") long boardId) {
        Member member = memberService.findByAccessToken(accessToken);

        boardService.delete(member, boardId);
    }

    @GetMapping("/{board-id}")
    @ResponseStatus(HttpStatus.OK)
    public BoardDto.DetailResponse getBoard(@RequestHeader(name = "Authorization") String accessToken,
                                            @PathVariable("board-id") long boardId) {
        Board board = boardService.find(boardId);

        Member member = memberService.findByAccessToken(accessToken);

        boolean isDibs = boardService.findIsDibs(member, boardId);
        BoardDto.DetailResponse detailResponse = boardMapper.boardToDetailResponseDto(board, isDibs);

        return detailResponse;
    }

    @PostMapping("{board-id}/up-vote")
    @ResponseStatus(HttpStatus.OK)
    public void upVote(@RequestHeader(name = "Authorization") String accessToken,
                       @PathVariable("board-id") long boardId) {
        Member member = memberService.findByAccessToken(accessToken);

        boardService.upVote(member, boardId);
    }

    @PostMapping("{board-id}/down-vote")
    @ResponseStatus(HttpStatus.OK)
    public void downVote(@RequestHeader(name = "Authorization") String accessToken,
                         @PathVariable("board-id") long boardId) {

        Member member = memberService.findByAccessToken(accessToken);

        boardService.downVote(member, boardId);
    }

    @PostMapping("{board-id}/dibs")
    @ResponseStatus(HttpStatus.OK)
    public BoardDto.Dibs dibs(@RequestHeader(name = "Authorization") String accessToken,
                              @PathVariable("board-id") long boardId) {
        Member member = memberService.findByAccessToken(accessToken);

        boolean isDibs = boardService.dibs(member, boardId);
        return boardMapper.isDibsToDibsDto(isDibs);
    }
}
