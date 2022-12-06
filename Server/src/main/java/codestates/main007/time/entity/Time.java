package codestates.main007.time.entity;

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
public class Time {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long timeId;

    @Column
    private long fromId;

    @Column
    private long toId;

    @Column
    private int time;

    @Column
    private String type;
}
