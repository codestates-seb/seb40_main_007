package codestates.main007.comment.entity;

import codestates.main007.board.entity.Board;
import codestates.main007.exception.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commentId;

    @Column
    private String comment;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime modifiedAt;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member writer;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    public void patchComment(String comment) {

        if (comment != null) {
            this.comment = comment;
        }
    }

    public void setWriterAndBoard(Member writer, Board board) {
        this.writer = writer;
        this.board = board;
    }
}
