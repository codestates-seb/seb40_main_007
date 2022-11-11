package codestates.main007.board;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/boards")
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
    private final BoardMapper boardMapper;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
//    public void postBoard(@RequestHeader(name = "Authorization")String accessToken,
//                          @RequestBody BoardDto.Post postDto){
    public void postBoard(@RequestBody BoardDto.Input postDto){
        Board board = this.boardMapper.boardDtoToBoard(postDto);
        this.boardService.save(board);
    }

    @PatchMapping("/{board-id}")
    @ResponseStatus(HttpStatus.OK)
//    public void patchBoard(@RequestHeader(name = "Authorization")String accessToken,
//                          @PathVariable("board-id") long boardId ,
//                          @RequestBody BoardDto.Post postDto){
    public void patchBoard(@PathVariable("board-id") long boardId ,
                           @RequestBody BoardDto.Input patchDto){
        this.boardService.update(boardId, patchDto);
    }

    @DeleteMapping("/{board-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
//    public void deleteBoard(@RequestHeader(name = "Authorization")String accessToken,
//            @PathVariable("board-id") long boardId){
    public void deleteBoard(@PathVariable("board-id") long boardId){
        this.boardService.delete(boardId);
    }

    @GetMapping("/{board-id}")
    @ResponseStatus(HttpStatus.OK)
//        public void getBoard(@RequestHeader(name = "Authorization")String accessToken,
//            @PathVariable("board-id") long boardId){
    public BoardDto.DetailResponse getBoard(@PathVariable("board-id") long boardId){
        Board board = this.boardService.find(boardId);

        BoardDto.DetailResponse detailResponse = this.boardMapper.boardToDetailResponseDto(board);

        return detailResponse;
    }
}
