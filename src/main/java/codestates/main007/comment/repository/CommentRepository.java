package codestates.main007.comment.repository;

import codestates.main007.comment.entity.Comment;
import codestates.main007.exception.member.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    Page<Comment> findByWriter(Member member, Pageable pageable);

    Integer countByWriter(Member member);
}
