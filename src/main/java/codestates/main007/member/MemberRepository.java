package codestates.main007.member;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);

    Integer countByName(String name);

    Integer countByEmail(String email);

    Optional<Member> findByRefreshToken(String refreshToken);
}
