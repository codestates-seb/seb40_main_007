package codestates.main007.planner;

import codestates.main007.boardPlanner.BoardPlanner;
import codestates.main007.member.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Planner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long plannerId;

    @Column
    private String plannerName;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "planner", cascade = CascadeType.REMOVE)
    private final List<BoardPlanner> boardPlanners = new ArrayList<>();

    public void changeName(String plannerName){
        this.plannerName=plannerName;
    }

    public void patchPlanner(String plannerName) {
        if (plannerName != null) {
            this.plannerName = plannerName;
        }
    }
}
