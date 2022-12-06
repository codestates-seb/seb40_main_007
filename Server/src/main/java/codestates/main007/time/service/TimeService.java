package codestates.main007.time.service;

import codestates.main007.board.entity.Board;
import codestates.main007.board.repository.BoardRepository;
import codestates.main007.board.service.BoardService;
import codestates.main007.planner.dto.PlannerDto;
import codestates.main007.service.DistanceMeasuringService;
import codestates.main007.time.entity.Time;
import codestates.main007.time.repository.TimeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class TimeService {
    private final TimeRepository timeRepository;
    private final DistanceMeasuringService distanceMeasuringService;
    private final BoardService boardService;

    public Time save(long fromId, long toId, int time, String type) {
        Time newTime = Time.builder()
                .fromId(fromId)
                .toId(toId)
                .time(time)
                .type(type)
                .build();

        return timeRepository.save(newTime);
    }

    public Time find(long fromId, long toId) throws InterruptedException {
        Optional<Time> timeEntity = timeRepository.findByFromIdAndToId(fromId, toId);
        if (timeEntity.isPresent()) {
            log.info("# 이미 있는 경로입니다.");
            return timeEntity.get();
        } else {
            Board fromBoard = boardService.find(fromId);
            Board toBoard = boardService.find(toId);
            if (toBoard.getStationId() == fromBoard.getStationId()) {
                log.info("# 새 경로를 추가합니다.");
                PlannerDto.Time timeType = distanceMeasuringService.getPlannerTime(fromBoard.getLatitude(), fromBoard.getLongitude(), toBoard.getLatitude(), toBoard.getLongitude());
                Thread.sleep(400);
                return save(fromId, toId, timeType.getTime(), timeType.getType());
            } else {
                log.info("# 새 경로를 추가합니다. -기차");
                return save(fromId, toId, 0, "train");
            }
        }
    }
    //todo: 업데이트
}
