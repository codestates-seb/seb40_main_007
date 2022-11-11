package codestates.main007.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String avatar;

    // todo:보드, 댓글 연관관계 추가

}
