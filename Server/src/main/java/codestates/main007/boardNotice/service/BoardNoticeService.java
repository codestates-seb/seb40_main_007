package codestates.main007.boardNotice.service;

import codestates.main007.board.entity.Board;
import codestates.main007.board.repository.BoardRepository;
import codestates.main007.boardNotice.entity.BoardNotice;
import codestates.main007.boardNotice.repository.BoardNoticeRepository;
import codestates.main007.exception.ExceptionCode;
import codestates.main007.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardNoticeService {
    private final BoardRepository boardRepository;
    private final BoardNoticeRepository boardNoticeRepository;

    public void save(long boardId, Member sender, String notice) {
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new ResponseStatusException(ExceptionCode.BOARD_NOT_FOUND.getStatus(), ExceptionCode.BOARD_NOT_FOUND.getMessage(), new IllegalArgumentException()));

        BoardNotice boardNotice = BoardNotice.builder()
                .board(board)
                .sender(sender)
                .notice(notice)
                .boardMemberId(board.getWriter().getMemberId())
                .build();

        boardNoticeRepository.save(boardNotice);
    }

    public void delete(long boardId, Member sender, String notice) {
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new ResponseStatusException(ExceptionCode.BOARD_NOT_FOUND.getStatus(), ExceptionCode.BOARD_NOT_FOUND.getMessage(), new IllegalArgumentException()));
        boardNoticeRepository.deleteBySenderAndBoardAndNotice(sender, board, notice);
    }
}
