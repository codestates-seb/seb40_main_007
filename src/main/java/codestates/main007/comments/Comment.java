package codestates.main007.comments;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Comment {
    @Column
    private long commentId;

    @Column
    private String comment;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime modifiedAt;

    //todo: 멤버와 보드 연관관계 설정

    public void patchComment(String comment) {
        if (comment != null) {
            this.comment = comment;
        }
    }
}
