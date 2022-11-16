package codestates.main007.tag;

import codestates.main007.board.Board;
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
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagId;

    @Column
    private String tagString;

    @ManyToMany(mappedBy = "tags")
    private List<Board> boards = new ArrayList<>();

    public Tag(String tagString) {
        this.tagString = tagString;
    }
}
