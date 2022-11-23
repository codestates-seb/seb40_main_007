package codestates.main007.board;

import codestates.main007.comments.CommentDto;
import codestates.main007.comments.CommentMapper;
import codestates.main007.member.Member;
import codestates.main007.member.MemberService;
import lombok.RequiredArgsConstructor;
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
    private final CommentMapper commentMapper;
    private final MemberService memberService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void postBoard(@RequestHeader(name = "Authorization") String accessToken,
                          @RequestPart("data") BoardDto.Input postDto,
                          @RequestPart("files") List<MultipartFile> images) throws IOException {

        boardService.save(accessToken, postDto, images);
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
    public BoardDto.DetailResponse getBoard(@RequestHeader(name = "Authorization", required = false) String accessToken,
                                            @PathVariable("board-id") long boardId) {
        Board board = boardService.find(boardId);

        BoardDto.DetailResponse detailResponse = BoardDto.DetailResponse.builder().build();
        // 식당,숙소의 경우 주소가 동일한 경우만 추출
        if (board.getCategoryId() == 1 || board.getCategoryId() == 3) {
            List<CommentDto.Response> comments = commentMapper.commentsToResponses(board.getComments());
            // 해당글 이미지 리스트
            List<String> imageUrls = boardService.findImageUrls(board);
            // 주변 가게 게시글 리스트
            List<Board> around = boardService.findByAddress(board.getAddress(), board.getStationId(), boardId, board.getCategoryId());// 근처 보드 정보
            // 주변 가게 찜 정보 리스트
            List<Boolean> booleans = boardService.findAroundDibs(accessToken, around);
            // 주변가게 DTO로 변경
            List<BoardDto.aroundResponse> aroundResponses = boardMapper.boardsToAround(around, booleans);

            boolean isDibs = false;
            int status = 0;
            // 로그인 시에만 바뀌는 정보
            if (accessToken!=null){
                // 해당글 찜 여부
                isDibs = boardService.checkDibs(accessToken, boardId);
                // 해당글 추천 여부
                Member member = memberService.findByAccessToken(accessToken);
                status = boardService.checkScoreStatus(member, board);
            }

            detailResponse = boardMapper.boardToDetailResponseDto(board, isDibs, board.getWriter(), comments, imageUrls, status, aroundResponses);

            // 볼거리의 경우 근처애들 추출
        } else if (board.getCategoryId() == 2) {
            List<CommentDto.Response> comments = commentMapper.commentsToResponses(board.getComments());
            // 해당글 이미지 리스트
            List<String> imageUrls = boardService.findImageUrls(board);
            // 주변 가게 게시글 리스트
            List<Board> around = boardService.findByAddressViewCategory(board.getStationId(), board.getCategoryId(), boardId);// 근처 보드 정보
            // 주변 가게 찜 정보 리스트
            List<Boolean> booleans = boardService.findAroundDibs(accessToken, around);
            // 주변가게 DTO로 변경
            List<BoardDto.aroundResponse> aroundResponses = boardMapper.boardsToAround(around, booleans);

            boolean isDibs = false;
            int status = 0;
            // 로그인 시에만 바뀌는 정보
            if (accessToken!=null){
                // 해당글 찜 여부
                isDibs = boardService.checkDibs(accessToken, boardId);
                Member member = memberService.findByAccessToken(accessToken);
                // 해당글 추천 여부
                status = boardService.checkScoreStatus(member, board);
            }

            detailResponse = boardMapper.boardToDetailResponseDto(board, isDibs, board.getWriter(), comments, imageUrls, status, aroundResponses);
        }


        return detailResponse;
    }

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
}
