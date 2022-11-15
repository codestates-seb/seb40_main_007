package codestates.main007.boardMember;

import codestates.main007.board.Board;
import codestates.main007.member.Member;
import lombok.*;

import javax.persistence.*;

@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class BoardMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardMemberId;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @Column
    private boolean dibs;

    @Column
    private boolean scrap;

    @Column
    private boolean scoreStatus;

    public void changeDibs() {
        if (this.dibs == true) {
            this.dibs = false;
        } else {
            this.dibs = true;
        }
    }

}