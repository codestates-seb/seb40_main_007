package codestates.main007.planner;

import codestates.main007.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PlannerRepository extends JpaRepository<Planner, Long> {
    List<Planner> findAllByMember(Member member);
    Optional<Planner> findByPlannerName(String plannerName);
}
