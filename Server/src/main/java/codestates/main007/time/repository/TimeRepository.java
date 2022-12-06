package codestates.main007.time.repository;

import codestates.main007.time.entity.Time;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TimeRepository extends JpaRepository<Time, Long> {

    Optional<Time> findByFromIdAndToId(long fromId, long toId);
}
