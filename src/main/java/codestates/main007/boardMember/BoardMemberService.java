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

    public boolean checkDibs(Member member, Board board){
        Optional<BoardMember> boardMember = boardMemberRepository.findByMemberAndBoard(member, board);
        if (boardMember.isPresent()){
            return boardMember.get().isDibs();
        }else {
            return false;
        }
    }
}
