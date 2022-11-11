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
    public void postBoard(@RequestHeader(name = "Authorization")String accessToken,
                          @RequestBody BoardDto.Input postDto){
        // 토큰설정 완료되면 이거 사용
        //Member member = memberService.findByAccessToken(accessToken);

        // 그전까지 이거 사용
        Member member = memberService.find(1);

        Board board = this.boardMapper.boardDtoToBoard(postDto, member);
        this.boardService.save(board);
    }

    @PatchMapping("/{board-id}")
    @ResponseStatus(HttpStatus.OK)
    public void patchBoard(@RequestHeader(name = "Authorization")String accessToken,
                          @PathVariable("board-id") long boardId ,
                          @RequestBody BoardDto.Input patchDto){
        this.boardService.update(boardId, patchDto);
    }

    @DeleteMapping("/{board-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBoard(@RequestHeader(name = "Authorization")String accessToken,
            @PathVariable("board-id") long boardId){
        this.boardService.delete(boardId);
    }

    @GetMapping("/{board-id}")
    @ResponseStatus(HttpStatus.OK)
        public BoardDto.DetailResponse getBoard(@RequestHeader(name = "Authorization")String accessToken,
            @PathVariable("board-id") long boardId){
        Board board = this.boardService.find(boardId);

        BoardDto.DetailResponse detailResponse = this.boardMapper.boardToDetailResponseDto(board);

        return detailResponse;
    }

    @PostMapping("{board-id}/up-vote")
    @ResponseStatus(HttpStatus.OK)
    public void upVote(@RequestHeader(name = "Authorization")String accessToken,
                       @PathVariable("board-id") long boardId){
        // todo: 추천 기능
    }

    @PostMapping("{board-id}/down-vote")
    @ResponseStatus(HttpStatus.OK)
    public void downVote(@RequestHeader(name = "Authorization")String accessToken,
                       @PathVariable("board-id") long boardId){
        // todo : 비추천 기능
    }

    @PostMapping("{board-id}/dibs")
    @ResponseStatus(HttpStatus.OK)
    public void dibs(@RequestHeader(name = "Authorization")String accessToken,
                         @PathVariable("board-id") long boardId){
        //todo: 접속한 유저가 해당 게시글의 찜 눌렀는지 여부 반환
    }
}
