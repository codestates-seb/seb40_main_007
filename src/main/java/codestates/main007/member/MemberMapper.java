package codestates.main007.member;

import codestates.main007.board.Board;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    default Member signupDtoToMember(MemberDto.Signup signupDto) {
        Member member = Member.builder()
                .email(signupDto.getEmail())
                .password(signupDto.getPassword())
                // todo:랜덤 네이밍 서비스 추가
                .name("임시 네임")
                // todo: 기본 프로필 이미지 서비스 추가
                .avatar("임시 이미지 주소")
                .build();
        return member;
    }

    default List<MemberDto.MyPage> boardsToMyPages(List<Board> boards){
        List<MemberDto.MyPage> myPages = new ArrayList<>();
        for (Board board : boards){
            MemberDto.MyPage myPage = MemberDto.MyPage.builder()
                    .boardId(board.getBoardId())
                    .star(board.getStar())
                    .title(board.getTitle())
                    .review(board.getReview())
                    .timeFromStation(board.getTimeFromStation())
                    .build();

            myPages.add(myPage);
        }

        return myPages;
    }
}
