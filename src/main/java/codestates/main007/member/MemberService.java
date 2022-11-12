package codestates.main007.member;

import codestates.main007.board.Board;
import codestates.main007.board.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    private final BoardRepository boardRepository;

    public void save(Member member) {
        memberRepository.save(member);
    }

    public void update(long memberId, MemberDto.Patch patchDto) {
        Member member = find(memberId);
        member.patchMember(patchDto.getName(), patchDto.getAvatar(), patchDto.getPassword());
        memberRepository.save(member);
    }

    public Member find(long memberId) {
        return memberRepository.findById(memberId)
                .orElseThrow(() -> new NullPointerException("해당 멤버가 존재하지 않습니다."));
    }

    public Member findByAccessToken(String accessToken) {
        //todo: 액세스 토큰을 이용하여 멤버 찾는 로직

        //임시 리턴값
        return find(1);
    }

    public void verifyPassword(String accessToken, String password) {
        // todo: 패스워드 검증 로직 작성 (틀릴 경우 에러)
    }

    public void sendPassword(String email) {
        //todo: 이메일로 패스워드 보내주는 로직 작성
    }

    public List<Board> findMyPage(String accessToken) {
        Member member = findByAccessToken(accessToken);

        return boardRepository.findByWriter(member);
    }

    public List<Board> findMyPageByStation(String accessToken, long stationId){
        Member member = findByAccessToken(accessToken);

        return boardRepository.findByWriterAndStationId(member,stationId);
    }
}
