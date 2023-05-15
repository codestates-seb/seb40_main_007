package codestates.main007.boardPlanner.entity;

import codestates.main007.board.entity.Board;
import codestates.main007.planner.entity.Planner;
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
public class BoardPlanner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardPlannerId;

    @Column
    private int priority;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "planner_id")
    private Planner planner;

    public void setPriority(int priority) {
        this.priority = priority;
    }
}
