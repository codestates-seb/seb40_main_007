package codestates.main007.board;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String review;
    private double star;
    private String thumbNail;
    private double latitude;
    private double longitude;
    private String station;
    private String category;
    //private List<Tag> tags;
    private String address;
}
