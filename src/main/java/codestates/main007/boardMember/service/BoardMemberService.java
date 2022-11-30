package codestates.main007.boardMember.service;

import codestates.main007.board.entity.Board;
import codestates.main007.board.repository.BoardRepository;
import codestates.main007.boardMember.entity.BoardMember;
import codestates.main007.boardMember.repository.BoardMemberRepository;
import codestates.main007.exception.ExceptionCode;
import codestates.main007.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardMemberService {
    private final BoardMemberRepository boardMemberRepository;

    private final BoardRepository boardRepository;

    public BoardMember getBoardMember(Member member, Board board) {
        Optional<BoardMember> boardMember = boardMemberRepository.findByMemberAndBoard(member, board);
        if (boardMember.isPresent()) {
            return boardMember.get();
        } else {
            BoardMember boardMember2 = BoardMember.builder()
                    .board(board)
                    .member(member)
                    .dibs(false)
                    .scoreStatus(0)
                    .build();
            this.boardMemberRepository.save(boardMember2);

            return boardMember2;
        }
    }

    // 찜상태를 변경
    public boolean changeDibs(Member member, Board board) {
        BoardMember boardMember = getBoardMember(member, board);
        boardMember.changeDibs();

        boardMemberRepository.save(boardMember);

        return boardMember.isDibs();
    }

    // 찜 여부 확인
    public boolean checkDibs(Member member, Board board) {
        Optional<BoardMember> boardMember = boardMemberRepository.findByMemberAndBoard(member, board);
        if (boardMember.isPresent()) {
            return boardMember.get().isDibs();
        } else {
            return false;
        }
    }

    // 추천 기능
    public int upVote(Member member, Board board) {
        BoardMember boardMember = getBoardMember(member, board);
        if (boardMember.getScoreStatus() == 1) {
            boardMember.changeScoreStatus(0);
            board.changeScore(1, 0);
        } else if (boardMember.getScoreStatus() == 0) {
            boardMember.changeScoreStatus(1);
            board.changeScore(0, 1);
        } else if (boardMember.getScoreStatus() == -1) {
            boardMember.changeScoreStatus(0);
            board.changeScore(-1, 0);
        }

        boardRepository.save(board);
        boardMemberRepository.save(boardMember);

        return boardMember.getScoreStatus();
    }

    // 비추천 기능
    public int downVote(Member member, Board board) {
        BoardMember boardMember = getBoardMember(member, board);
        if (boardMember.getScoreStatus() == -1) {
            boardMember.changeScoreStatus(0);
            board.changeScore(-1, 0);
        } else if (boardMember.getScoreStatus() == 0) {
            boardMember.changeScoreStatus(-1);
            board.changeScore(0, -1);
        } else if (boardMember.getScoreStatus() == 1) {
            boardMember.changeScoreStatus(0);
            board.changeScore(1, 0);
        }

        boardRepository.save(board);
        boardMemberRepository.save(boardMember);

        return boardMember.getScoreStatus();
    }

    public void report(Member member, Board board, long report) {
        Optional<BoardMember> OptionalBoardMember = boardMemberRepository.findByMemberAndBoard(member, board);

        if (OptionalBoardMember.isPresent()) {
            BoardMember boardMember = OptionalBoardMember.get();
            if (boardMember.getReport() == 0){
                boardMember.setReport(report);
                boardMemberRepository.save(boardMember);
            }else{
                throw new ResponseStatusException(ExceptionCode.ALREADY_REPORTED.getStatus(), ExceptionCode.ALREADY_REPORTED.getMessage(), new IllegalArgumentException());
            }
        } else {
            BoardMember boardMember = BoardMember.builder()
                    .member(member)
                    .board(board)
                    .build();
            boardMember.setReport(report);
            boardMemberRepository.save(boardMember);
        }
        board.upReported();
    }
}
