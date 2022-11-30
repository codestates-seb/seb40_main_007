package codestates.main007.boardMember.entity;

import codestates.main007.board.entity.Board;
import codestates.main007.exception.member.entity.Member;
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

    // 추천 상태 (-1:비추천 0:클릭안함 1:추천)
    @Column
    private int scoreStatus;

    // 신고 상태 (0: 신고 안함 그외: 신고 번호)
    @Column
    private long report;

    public void changeDibs() {
        if (this.dibs == true) {
            this.dibs = false;
        } else {
            this.dibs = true;
        }
    }

    // 추천상태 변경을 위한 메서드
    public void changeScoreStatus(int status) {
        this.scoreStatus = status;
    }

    public void setReport(long report){
        this.report = report;
    }
}
