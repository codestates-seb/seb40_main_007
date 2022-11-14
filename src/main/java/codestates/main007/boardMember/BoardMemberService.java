package codestates.main007.boardMember;

import codestates.main007.board.Board;
import codestates.main007.member.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardMemberService {
    private final BoardMemberRepository boardMemberRepository;

    public BoardMember getBoardMember(Member member, Board board) {
        Optional<BoardMember> boardMember = boardMemberRepository.findByMemberAndBoard(member, board);
        if (boardMember.isPresent()) {
            return boardMember.get();
        } else {
            BoardMember boardMember2 = BoardMember.builder()
                    .board(board)
                    .member(member)
                    .dibs(false)
                    .scrap(false)
                    .scoreStatus(false)
                    .build();
            this.boardMemberRepository.save(boardMember2);

            return boardMember2;
        }
    }

    public boolean changeDibs(Member member, Board board) {
        BoardMember boardMember = getBoardMember(member, board);
        boardMember.changDibs();

        boardMemberRepository.save(boardMember);

        return boardMember.isDibs();
    }

    public boolean checkDibs(Member member, Board board) {
        Optional<BoardMember> boardMember = boardMemberRepository.findByMemberAndBoard(member, board);
        if (boardMember.isPresent()) {
            return boardMember.get().isDibs();
        } else {
            return false;
        }
    }
}