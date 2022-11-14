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
    private final BoardMapper boardMapper;
    private final MemberService memberService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void postBoard(@RequestHeader(name = "Authorization") String accessToken,
                          @RequestBody BoardDto.Input postDto) {

        Board board = boardMapper.boardDtoToBoard(postDto);
        boardService.save(accessToken, board);
    }

    @PatchMapping("/{board-id}")
    @ResponseStatus(HttpStatus.OK)
    public void patchBoard(@RequestHeader(name = "Authorization") String accessToken,
                           @PathVariable("board-id") long boardId,
                           @RequestBody BoardDto.Input patchDto) {

        boardService.update(accessToken, boardId, patchDto);
    }

    @DeleteMapping("/{board-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBoard(@RequestHeader(name = "Authorization") String accessToken,
                            @PathVariable("board-id") long boardId) {

        boardService.delete(accessToken, boardId);
    }

    @GetMapping("/{board-id}")
    @ResponseStatus(HttpStatus.OK)
    public BoardDto.DetailResponse getBoard(@RequestHeader(name = "Authorization") String accessToken,
                                            @PathVariable("board-id") long boardId) {
        Board board = boardService.find(boardId);
        Member member = memberService.findByAccessToken(accessToken);

        boolean isDibs = boardService.checkDibs(accessToken, boardId);
        BoardDto.DetailResponse detailResponse = boardMapper.boardToDetailResponseDto(board, isDibs, member);

        return detailResponse;
    }

    @PostMapping("{board-id}/up-vote")
    @ResponseStatus(HttpStatus.OK)
    public void upVote(@RequestHeader(name = "Authorization") String accessToken,
                       @PathVariable("board-id") long boardId) {

        boardService.upVote(accessToken, boardId);
    }

    @PostMapping("{board-id}/down-vote")
    @ResponseStatus(HttpStatus.OK)
    public void downVote(@RequestHeader(name = "Authorization") String accessToken,
                         @PathVariable("board-id") long boardId) {

        boardService.downVote(accessToken, boardId);
    }

    @PostMapping("{board-id}/dibs")
    @ResponseStatus(HttpStatus.OK)
    public BoardDto.Dibs dibs(@RequestHeader(name = "Authorization") String accessToken,
                              @PathVariable("board-id") long boardId) {

        boolean isDibs = boardService.dibs(accessToken, boardId);
        return boardMapper.isDibsToDibsDto(isDibs);
    }
}
