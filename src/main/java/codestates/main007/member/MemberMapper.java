package codestates.main007.member;

import org.mapstruct.Mapper;

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
}
