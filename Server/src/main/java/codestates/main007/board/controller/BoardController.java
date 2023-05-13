package codestates.main007.board.controller;

import codestates.main007.board.dto.BoardDto;
import codestates.main007.board.mapper.BoardMapper;
import codestates.main007.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.locationtech.jts.io.ParseException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/boards")
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
    private final BoardMapper boardMapper;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void postBoard(@RequestHeader(name = "Authorization") String accessToken,
                          @RequestPart("data") BoardDto.Input postDto,
                          @RequestPart("files") List<MultipartFile> images) throws IOException, ParseException {

        boardService.save(accessToken, postDto, images);
    }

    @PatchMapping("/{board-id}")
    @ResponseStatus(HttpStatus.OK)
    public void patchBoard(@RequestHeader(name = "Authorization") String accessToken,
                           @PathVariable("board-id") long boardId,
                           @RequestPart("files") List<MultipartFile> images,
                           @RequestPart("data") BoardDto.Patch patchDto) throws IOException, ParseException {

        boardService.update(accessToken, boardId, patchDto, images);
    }

    @DeleteMapping("/{board-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBoard(@RequestHeader(name = "Authorization") String accessToken,
                            @PathVariable("board-id") long boardId) {

        boardService.delete(accessToken, boardId);
    }

    @GetMapping("/{board-id}")
    @ResponseStatus(HttpStatus.OK)
    public BoardDto.DetailResponse getBoard(@RequestHeader(name = "Authorization", required = false) String accessToken,
                                            @PathVariable("board-id") long boardId) {
        BoardDto.DetailResponse detailResponse = boardService.getDetailPage(boardId, accessToken);

        return detailResponse;
    }
    // 형 변환을위해 잠시 사용
//    @GetMapping("/point")
//    @ResponseStatus(HttpStatus.OK)
//    public void changePoint() throws ParseException {
//        boardService.changePoint();
//    }

    @PostMapping("{board-id}/up-vote")
    @ResponseStatus(HttpStatus.OK)
    public BoardDto.ScoreStatus upVote(@RequestHeader(name = "Authorization") String accessToken,
                                       @PathVariable("board-id") long boardId) {

        return BoardDto.ScoreStatus.builder().scoreStatus(boardService.upVote(accessToken, boardId)).build();
    }

    @PostMapping("{board-id}/down-vote")
    @ResponseStatus(HttpStatus.OK)
    public BoardDto.ScoreStatus downVote(@RequestHeader(name = "Authorization") String accessToken,
                                         @PathVariable("board-id") long boardId) {

        return BoardDto.ScoreStatus.builder().scoreStatus(boardService.downVote(accessToken, boardId)).build();
    }

    @PostMapping("{board-id}/dibs")
    @ResponseStatus(HttpStatus.OK)
    public BoardDto.Dibs dibs(@RequestHeader(name = "Authorization") String accessToken,
                              @PathVariable("board-id") long boardId) {

        boolean isDibs = boardService.dibs(accessToken, boardId);
        return boardMapper.isDibsToDibsDto(isDibs);
    }

    @PostMapping("{board-id}/report/{report-id}")
    @ResponseStatus(HttpStatus.OK)
    public void report(@RequestHeader(name = "Authorization") String accessToken,
                       @PathVariable("board-id") long boardId,
                       @PathVariable("report-id") long reportId) {

        boardService.report(accessToken, boardId, reportId);
    }
}
