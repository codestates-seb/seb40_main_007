package codestates.main007.boardPlanner.repository;

import codestates.main007.board.entity.Board;
import codestates.main007.boardPlanner.entity.BoardPlanner;
import codestates.main007.planner.entity.Planner;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardPlannerRepository extends JpaRepository<BoardPlanner, Long> {
    BoardPlanner findBoardPlannerByBoardAndPlanner(Board board, Planner planner);
    List<BoardPlanner> findAllByPlanner(Planner planner);
    List<BoardPlanner> findAllByBoardAndPlanner(Board board,Planner planner);

}
