package codestates.main007.comments;

import codestates.main007.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByWriter(Member member);
}
