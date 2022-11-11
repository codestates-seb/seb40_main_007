package codestates.main007.member;

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

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();


    // todo:보드, 댓글 연관관계 추가

    public void patchMember(String name, String avatar, String password) {
        if (name != null) {
            this.name = name;
        }
        if (avatar != null) {
            this.avatar = avatar;
        }
        if (password != null) {
            this.password = password;
        }
    }
}
