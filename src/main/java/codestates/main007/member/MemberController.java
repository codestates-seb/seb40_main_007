package codestates.main007.member;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class MemberController {
    @GetMapping("/members/{memberId}/myPages")
    public ResponseEntity getMyPage(@PathVariable long memberId,
                                    @RequestHeader String authorization) {
        MockUpDto.myPageResponse myPage = new MockUpDto.myPageResponse();
        myPage.setStar(1);
        myPage.setContent("content");
        myPage.setTitle("title");
        myPage.setBoardId(1);
        myPage.setTimeFromStation(5);

        MockUpDto.Boards response = new MockUpDto.Boards();
        response.setItems(List.of(myPage));

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/members/{memberId}/myPage")
    public ResponseEntity getMyPageByStation(@PathVariable long memberId,
                                             @RequestParam String stationId,
                                             @RequestHeader String authorization) {

        MockUpDto.myPageResponse myPage = new MockUpDto.myPageResponse();
        myPage.setStar(1);
        myPage.setContent("content");
        myPage.setTitle("title");
        myPage.setBoardId(1);
        myPage.setTimeFromStation(5);

        MockUpDto.Boards response = new MockUpDto.Boards();
        response.setItems(List.of(myPage));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/members/{memberId}/myPage/comments")
    public ResponseEntity getMyComments(@PathVariable long memberId,
                                        @RequestHeader String authorization) {
        MockUpAnswerDto.comment comment = new MockUpAnswerDto.comment();
        comment.setCommentId(1);
        comment.setTitle("title");
        comment.setComment("comment");
        comment.setThumbnailUrl("thumbnailUrl");
        comment.setBoardId(1);

        MockUpAnswerDto.comments response = new MockUpAnswerDto.comments();
        response.setItems(List.of(comment));

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/members/{member_id}/myPage/map")
    public ResponseEntity getMyMap(@PathVariable long member_id,
                                   @RequestHeader String authorization) {
        MockUpDto.boardToMap boardToMap = new MockUpDto.boardToMap();
        boardToMap.setBoardId(1);
        boardToMap.setLatitude(100.1111111);
        boardToMap.setLongitude(100.1111111);
        boardToMap.setThumbnailUrl("imageUrl");
        MockUpDto.maps response = new MockUpDto.maps(List.of(boardToMap));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/members/{member_id}/info")
    public ResponseEntity getMyInfo(@PathVariable long member_id,
                                    @RequestHeader String authorization) {
        MockUpDto.info response = new MockUpDto.info();
        response.setScore(1);
        response.setTotalBoard(1);
        response.setTotalComment(1);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/members/{member_id}")
    public ResponseEntity patchMemberInfo(@PathVariable long member_id,
                                          @RequestHeader String authorization,
                                          @RequestBody MockUpDto.updateDto updateDto) {

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
