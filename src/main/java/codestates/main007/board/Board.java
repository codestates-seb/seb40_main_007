package codestates.main007.board;

import codestates.main007.boardImage.BoardImage;
import codestates.main007.boardMember.BoardMember;
import codestates.main007.comments.Comment;
import codestates.main007.member.Member;
import codestates.main007.tag.Tag;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
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

    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE)
    private List<BoardImage> images = new ArrayList<>();

    @Column
    private String thumbnail;

    @Column
    private double star;

    // 총 추천 합
    @Column
    private int score;

    // 추천 수
    @Column
    private int upScore;

    // 비추천 수
    @Column
    private int downScore;

    @Column
    private int viewCount;

    @Column
    private String address;

    @Column
    private int timeFromStation;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member writer;

    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE)
    private final List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE)
    private final List<BoardMember> boardMembers = new ArrayList<>();

    @ManyToMany
    @JoinTable(name = "board_tag")
    private List<Tag> tags = new ArrayList<>();

    public void setImages(List<BoardImage> images) {
        this.images = images;
    }

    public void setThumbnail() {
        // todo: 나중에 변경
        this.thumbnail = "https://s3주소/images/thumbnail_of_" + boardId;
    }

    // 게시글 업데이트를 위한 메서드
    public void patchBoard(String title, String review, Double star, Double latitude,
                           Double longitude, Long stationId, Long categoryId, String address, Integer timeFromStation) {
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
        if (timeFromStation != null) {
            this.timeFromStation = timeFromStation;
        }
    }

    // 해당 게시글의 추천 수 변경 메서드 (총 추천합, 추천 수, 비추천 수 )
    public void changeScore(int fromStatus, int status) {
        if (fromStatus == -1 & status == 1) {
            this.downScore--;
            this.score++;
        } else if (fromStatus == 0 & status == 1) {
            this.upScore++;
            this.score++;
        } else if (fromStatus == 1 & status == -1) {
            this.upScore--;
            this.score--;
        } else if (fromStatus == 0 & status == -1) {
            this.downScore++;
            this.score--;
        }
    }

}
