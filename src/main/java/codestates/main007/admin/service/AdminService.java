package codestates.main007.admin.service;

import codestates.main007.board.dto.BoardDto;
import codestates.main007.board.entity.Board;
import codestates.main007.board.service.BoardService;
import codestates.main007.boardMember.entity.BoardMember;
import codestates.main007.boardMember.repository.BoardMemberRepository;
import codestates.main007.dto.AdminDto;
import codestates.main007.dto.WeekBoardDto;
import codestates.main007.dto.WeekDto;
import codestates.main007.member.entity.Member;
import codestates.main007.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.*;

@Service
@Transactional
@RequiredArgsConstructor
public class AdminService {
    private final MemberService memberService;
    private final BoardService boardService;
    private final BoardMemberRepository boardMemberRepository;

    public AdminDto getAdminPage(String accessToken) {
        memberService.verifyAdmin(accessToken);
        List<Member> totalMembers = memberService.findAllMembers();
        List<Board> totalBoards = boardService.findAllBoards();
        int todayBoard = 0;
        int monthBoard = 0;
        Integer[] weekBoards = new Integer[7];
        Arrays.fill(weekBoards, 0);
        List<Board> reportedBoards = new ArrayList<>();
        ArrayList<Long>[] reportReason = new ArrayList[100000];
        LocalDateTime today = LocalDateTime.now().truncatedTo(ChronoUnit.DAYS);
        int todayOfTheWeek = today.getDayOfWeek().getValue();

        for (Board board : totalBoards) {
            LocalDateTime writeDay = board.getCreatedAt().truncatedTo(ChronoUnit.DAYS);

            int compareResultDay = today.compareTo(writeDay);
            if (compareResultDay == 0) {
                todayBoard++;
            }
            LocalDateTime monthAgo = LocalDateTime.now().minusMonths(1).truncatedTo(ChronoUnit.DAYS);

            int compareResultMonth = monthAgo.compareTo(writeDay);
            if (compareResultMonth == -1) {
                monthBoard++;
            }

            LocalDateTime dayMinus1 = LocalDateTime.now().minusDays(1).truncatedTo(ChronoUnit.DAYS);
            LocalDateTime dayMinus2 = LocalDateTime.now().minusDays(2).truncatedTo(ChronoUnit.DAYS);
            LocalDateTime dayMinus3 = LocalDateTime.now().minusDays(3).truncatedTo(ChronoUnit.DAYS);
            LocalDateTime dayMinus4 = LocalDateTime.now().minusDays(4).truncatedTo(ChronoUnit.DAYS);
            LocalDateTime dayMinus5 = LocalDateTime.now().minusDays(5).truncatedTo(ChronoUnit.DAYS);
            LocalDateTime dayMinus6 = LocalDateTime.now().minusDays(6).truncatedTo(ChronoUnit.DAYS);
            if (writeDay.isEqual(today)) {
                weekBoards[0]++;
            } else if (writeDay.isEqual(dayMinus1)) {
                weekBoards[1]++;
            } else if (writeDay.isEqual(dayMinus2)) {
                weekBoards[2]++;
            } else if (writeDay.isEqual(dayMinus3)) {
                weekBoards[3]++;
            } else if (writeDay.isEqual(dayMinus4)) {
                weekBoards[4]++;
            } else if (writeDay.isEqual(dayMinus5)) {
                weekBoards[5]++;
            } else if (writeDay.isEqual(dayMinus6)) {
                weekBoards[6]++;
            }


            if (board.getReported() >= 5) {
                if (!reportedBoards.contains(board)) {
                    reportedBoards.add(board);
                }
                List<BoardMember> boardMembers = boardMemberRepository.findAllByBoard(board);
                ArrayList<Long> reasons = new ArrayList<>();
                for (BoardMember boardMember : boardMembers) {
                    reasons.add(boardMember.getReport());
                }
                reportReason[(int) board.getBoardId()] = reasons;
            }
        }

        List<BoardDto.Reported> reportedDtos = new ArrayList<>();
        for (Board board : reportedBoards) {
            int reason1 = 0;
            int reason2 = 0;
            int reason3 = 0;
            int reason4 = 0;
            int reason5 = 0;

            ArrayList<Long> cnt = reportReason[(int) board.getBoardId()];
            for (long num : cnt) {
                if (num == 1) {
                    reason1++;
                } else if (num == 2) {
                    reason2++;
                } else if (num == 3) {
                    reason3++;
                } else if (num == 4) {
                    reason4++;
                } else if (num == 5) {
                    reason5++;
                }
            }

            BoardDto.ReportReasons reasons = BoardDto.ReportReasons
                    .builder()
                    .reason1(reason1)
                    .reason2(reason2)
                    .reason3(reason3)
                    .reason4(reason4)
                    .reason5(reason5)
                    .build();

            BoardDto.Reported dto = BoardDto.Reported.builder()
                    .title(board.getTitle())
                    .boardId(board.getBoardId())
                    .writer(board.getWriter().getName())
                    .writerId(board.getWriter().getMemberId())
                    .totalReport(board.getReported())
                    .reportCount(reasons)
                    .build();
            reportedDtos.add(dto);
        }

        List<Integer> stationCount = new ArrayList<>();
        for (int i = 1; i < 17; i++) {
            stationCount.add(boardService.countByStationId(i));
        }

        List<Board> highScoreBoards = boardService.findHighScoreBoard(5);
        List<Board> LowScoreBoards = boardService.findLowScoreBoard(-5);
        List<BoardDto.HighLowScoreResponse> highScoreDto = new ArrayList<>();
        List<BoardDto.HighLowScoreResponse> lowScoreDto = new ArrayList<>();
        for (Board board : highScoreBoards) {
            BoardDto.HighLowScoreResponse highScoreBoard
                    = BoardDto.HighLowScoreResponse.builder()
                    .boardId(board.getBoardId())
                    .title(board.getTitle())
                    .writer(board.getWriter().getName())
                    .writerId(board.getWriter().getMemberId())
                    .upScore(board.getUpScore())
                    .downScore(board.getDownScore())
                    .build();

            highScoreDto.add(highScoreBoard);
        }
        for (Board board : LowScoreBoards) {
            BoardDto.HighLowScoreResponse lowScoreBoard
                    = BoardDto.HighLowScoreResponse.builder()
                    .boardId(board.getBoardId())
                    .title(board.getTitle())
                    .writer(board.getWriter().getName())
                    .writerId(board.getWriter().getMemberId())
                    .upScore(board.getUpScore())
                    .downScore(board.getDownScore())
                    .build();

            lowScoreDto.add(lowScoreBoard);
        }
        ArrayList<String> week = new ArrayList<>();
        ArrayList<Integer> weekBoard = new ArrayList<>(Arrays.asList(weekBoards[6], weekBoards[5], weekBoards[4], weekBoards[3], weekBoards[2], weekBoards[1], weekBoards[0]));
        switch (todayOfTheWeek) {
            case 1:
                week = new ArrayList<>(Arrays.asList("TUE", "WED", "THU", "FRI", "SAT", "SUN", "MON"));
                break;
            case 2:
                week = new ArrayList<>(Arrays.asList("WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE"));
                break;
            case 3:
                week = new ArrayList<>(Arrays.asList("THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"));
                break;
            case 4:
                week = new ArrayList<>(Arrays.asList("FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"));
                break;
            case 5:
                week = new ArrayList<>(Arrays.asList("SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"));
                break;
            case 6:
                week = new ArrayList<>(Arrays.asList("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"));
                break;
            case 7:
                week = new ArrayList<>(Arrays.asList("MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"));
                break;
        }
//        Map<String, Integer> mon = new HashMap<>();
//        Map<String, Integer> tue = new HashMap<>();
//        Map<String, Integer> wed = new HashMap<>();
//        Map<String, Integer> thu = new HashMap<>();
//        Map<String, Integer> fri = new HashMap<>();
//        Map<String, Integer> sat = new HashMap<>();
//        Map<String, Integer> sun = new HashMap<>();

//        switch (todayOfTheWeek){
//            case 1 :
//                tue.put("TUE", weekBoards[6]);
//                wed.put("WED", weekBoards[5]);
//                thu.put("THU", weekBoards[4]);
//                fri.put("FRI", weekBoards[3]);
//                sat.put("SAT", weekBoards[2]);
//                sun.put("SUN", weekBoards[1]);
//                mon.put("MON", weekBoards[0]);
//                weekMaps.add(tue);
//                weekMaps.add(wed);
//                weekMaps.add(thu);
//                weekMaps.add(fri);
//                weekMaps.add(sat);
//                weekMaps.add(sun);
//                weekMaps.add(mon);
//                break;
//            case 2 :
//                tue.put("TUE", weekBoards[0]);
//                wed.put("WED", weekBoards[6]);
//                thu.put("THU", weekBoards[5]);
//                fri.put("FRI", weekBoards[4]);
//                sat.put("SAT", weekBoards[3]);
//                sun.put("SUN", weekBoards[2]);
//                mon.put("MON", weekBoards[1]);
//                weekMaps.add(wed);
//                weekMaps.add(thu);
//                weekMaps.add(fri);
//                weekMaps.add(sat);
//                weekMaps.add(sun);
//                weekMaps.add(mon);
//                weekMaps.add(tue);
//                break;
//            case 3 :
//                tue.put("TUE", weekBoards[1]);
//                wed.put("WED", weekBoards[0]);
//                thu.put("THU", weekBoards[6]);
//                fri.put("FRI", weekBoards[5]);
//                sat.put("SAT", weekBoards[4]);
//                sun.put("SUN", weekBoards[3]);
//                mon.put("MON", weekBoards[2]);
//                weekMaps.add(thu);
//                weekMaps.add(fri);
//                weekMaps.add(sat);
//                weekMaps.add(sun);
//                weekMaps.add(mon);
//                weekMaps.add(tue);
//                weekMaps.add(wed);
//                break;
//            case 4 :
//                tue.put("TUE", weekBoards[2]);
//                wed.put("WED", weekBoards[1]);
//                thu.put("THU", weekBoards[0]);
//                fri.put("FRI", weekBoards[6]);
//                sat.put("SAT", weekBoards[5]);
//                sun.put("SUN", weekBoards[4]);
//                mon.put("MON", weekBoards[3]);
//                weekMaps.add(fri);
//                weekMaps.add(sat);
//                weekMaps.add(sun);
//                weekMaps.add(mon);
//                weekMaps.add(tue);
//                weekMaps.add(wed);
//                weekMaps.add(thu);
//                break;
//            case 5 :
//                tue.put("TUE", weekBoards[3]);
//                wed.put("WED", weekBoards[2]);
//                thu.put("THU", weekBoards[1]);
//                fri.put("FRI", weekBoards[0]);
//                sat.put("SAT", weekBoards[6]);
//                sun.put("SUN", weekBoards[5]);
//                mon.put("MON", weekBoards[4]);
//                weekMaps.add(sat);
//                weekMaps.add(sun);
//                weekMaps.add(mon);
//                weekMaps.add(tue);
//                weekMaps.add(wed);
//                weekMaps.add(thu);
//                weekMaps.add(fri);
//                break;
//            case 6 :
//                tue.put("TUE", weekBoards[4]);
//                wed.put("WED", weekBoards[3]);
//                thu.put("THU", weekBoards[2]);
//                fri.put("FRI", weekBoards[1]);
//                sat.put("SAT", weekBoards[0]);
//                sun.put("SUN", weekBoards[6]);
//                mon.put("MON", weekBoards[5]);
//                weekMaps.add(sun);
//                weekMaps.add(mon);
//                weekMaps.add(tue);
//                weekMaps.add(wed);
//                weekMaps.add(thu);
//                weekMaps.add(fri);
//                weekMaps.add(sat);
//                break;
//            case 7 :
//                tue.put("TUE", weekBoards[5]);
//                wed.put("WED", weekBoards[4]);
//                thu.put("THU", weekBoards[3]);
//                fri.put("FRI", weekBoards[2]);
//                sat.put("SAT", weekBoards[1]);
//                sun.put("SUN", weekBoards[0]);
//                mon.put("MON", weekBoards[6]);
//                weekMaps.add(mon);
//                weekMaps.add(tue);
//                weekMaps.add(wed);
//                weekMaps.add(thu);
//                weekMaps.add(fri);
//                weekMaps.add(sat);
//                weekMaps.add(sun);
//                break;
//
//        }

        return AdminDto.builder()
                .totalBoard(totalBoards.size())
                .todayBoard(todayBoard)
                .monthBoard(monthBoard)
                .totalMember(totalMembers.size())
                .reportedBoards(reportedDtos)
                .stationCount(stationCount)
                .highScoreBoards(highScoreDto)
                .lowScoreBoards(lowScoreDto)
                .BoardsOfThisWeek(weekBoard)
                .thisWeek(week)
                .build();
    }

}
