package codestates.main007.boardNotice.entity;

import codestates.main007.board.entity.Board;
import codestates.main007.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class BoardNotice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardNoticeId;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member sender;

    @Column
    private String notice;

    @Column
    private long memberId;
}
