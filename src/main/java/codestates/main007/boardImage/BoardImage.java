package codestates.main007.boardImage;

import codestates.main007.board.Board;
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
public class BoardImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long boardImageId;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    private String originalFileName;

    private String stored_file_path;

    private long fileSize;
}
