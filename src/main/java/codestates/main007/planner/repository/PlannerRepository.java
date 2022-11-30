package codestates.main007.planner.repository;

import codestates.main007.exception.member.entity.Member;
import codestates.main007.planner.entity.Planner;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PlannerRepository extends JpaRepository<Planner, Long> {
    List<Planner> findAllByMember(Member member);
    Optional<Planner> findByPlannerName(String plannerName);
}
