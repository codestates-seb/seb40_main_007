package codestates.main007.boardNotice.service;

import codestates.main007.board.entity.Board;
import codestates.main007.board.service.BoardService;
import codestates.main007.boardNotice.entity.BoardNotice;
import codestates.main007.boardNotice.repository.BoardNoticeRepository;
import codestates.main007.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardNoticeService {
    private final BoardService boardService;
    private final BoardNoticeRepository boardNoticeRepository;
    public void save(long boardId, Member sender, String notice){
        Board board = boardService.find(boardId);

        BoardNotice boardNotice = BoardNotice.builder()
                .board(board)
                .sender(sender)
                .notice(notice)
                .boardMemberId(board.getWriter().getMemberId())
                .build();

        boardNoticeRepository.save(boardNotice);
    }
    public void delete(long boardId, Member sender, String notice){
        Board board = boardService.find(boardId);
        boardNoticeRepository.deleteBySenderAndBoardAndNotice(sender,board,notice);
    }
}
