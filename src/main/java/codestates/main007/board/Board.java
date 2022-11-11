package codestates.main007.board;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Builder
@Entity
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long boardId;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String review;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime modifiedAt;

    @Column
    private long categoryId;

    @Column
    private long stationId;

    @Column
    private double latitude;

    @Column
    private double longitude;

    //todo: 이미지
//    @Column
//    private List<String> images;

    @Column
    private String thumbnail;

    @Column
    private double star;

    @Column
    private int score;

    @Column
    private int viewCount;

    @Column
    private String address;

    @Column
    private int timeFromStation;

    // todo: 연관관계 - 멤버 , 댓글 , 태그

    // 게시글 업데이트를 위한 메서드
    public void patchBoard(String title, String review, Double star, Double latitude,
                           Double longitude, Long stationId, Long categoryId, String address) {
        if (title != null) {
            this.title = title;
        }
        if (review != null) {
            this.review = review;
        }
        if (star != null) {
            this.star = star;
        }
        if (latitude != null) {
            this.latitude = latitude;
        }
        if (longitude != null) {
            this.longitude = longitude;
        }
        if (stationId != null) {
            this.stationId = stationId;
        }
        if (categoryId != null) {
            this.categoryId = categoryId;
        }
        if (address != null) {
            this.address = address;
        }
    }
}