package codestates.main007.member;

import codestates.main007.board.Board;
import codestates.main007.board.BoardRepository;
import codestates.main007.comments.Comment;
import codestates.main007.comments.CommentRepository;
import codestates.main007.member.query.MemberScore;
import codestates.main007.member.query.MemberStation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    private final BoardRepository boardRepository;

    private final CommentRepository commentRepository;

    public void save(Member member) {
        memberRepository.save(member);
    }

    public void update(String accessToken, MemberDto.Patch patchDto) {
        Member member = findByAccessToken(accessToken);
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

    public List<Board> findMyPageByStation(String accessToken, long stationId) {
        Member member = findByAccessToken(accessToken);

        return boardRepository.findByWriterAndStationId(member, stationId);
    }

    public List<Comment> findMyComments(String accessToken) {
        Member member = findByAccessToken(accessToken);

        return commentRepository.findByWriter(member);
    }

    public int findMyScore(Member member) {
        int totalScore = 0;

        List<MemberScore> scores = boardRepository.findScoreByWriter(member);
        for (MemberScore s : scores) {
            totalScore += s.getScore();
        }
        return totalScore;
    }

    public List<Long> findMyStations(Member member) {
        List<Long> myStations = new ArrayList<>();

        List<MemberStation> stations = boardRepository.findStationIdByWriter(member);
        for (MemberStation ms : stations) {
            if (!myStations.contains(ms.getStationId())) {
                myStations.add(ms.getStationId());
            }
        }
        return myStations;
    }
}
